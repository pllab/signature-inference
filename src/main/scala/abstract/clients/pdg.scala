// this in an interface to generate a program dependence graph

package notjs.abstracted.clients.PDG

import notjs.abstracted.clients.graph._
import collection.mutable.{Set ⇒ MSet, Queue ⇒ MQ}

import notjs.abstracted.traces.Trace
import notjs.abstracted.traces.Haltingτ
import notjs.abstracted.traces.Enteringτ
import notjs.abstracted.domains.AddressSpace.{Address, Addresses}
import notjs.abstracted.domains._
import notjs.syntax.Scratch
import notjs.syntax.Stmt
import notjs.syntax.CodePrint
import notjs.translator.PVarMapper
import notjs.abstracted.interpreter.notJS.Mutable
import collection.mutable.{Set ⇒ MSet, Map ⇒ MMap}
import java.io._
import java.util.regex._

// =======================
// Control Flow Graph Edge Labels
// =======================
trait ControlLabel extends EdgeLabel 

trait LocalControl extends ControlLabel
trait ExplicitNonLocalControl extends ControlLabel
trait ImplicitNonLocalControl extends ControlLabel

// most of the control edges
case object NormalControl extends LocalControl
// The calling edge
case object CallingControl extends LocalControl 
// The call return edge
case object ReturnControl extends ExplicitNonLocalControl 
// The control edge from decl to each individual 
// declaration, and from each individual declaration 
// to the next statement
case object DeclVarControl extends LocalControl 
// The call node to the dummy ret node control flow
// case object CallToRetNodeControl extends LocalControl
// Control edges to the halt node
case object HaltControl extends LocalControl
// Control edges to the next statement assuming these 
case object JumpDummyControl extends LocalControl
case object ExpExcControl extends ExplicitNonLocalControl 
case object ImpExcControl extends ImplicitNonLocalControl 
// this should not be used if we don't care about termination leaks
// case object HaltExcControl extends ControlLabel {
// 	override def toString = " color=red "
// }
// Used for entry to start node, and entry to halt node
// Also used for edges between throw and jumps to the next
// "natural" position that they would go to
// as if these statements were absent
case object DummyControl extends LocalControl 

// =======================
// Data Flow Graph Edge Labels
// =======================
trait DataLabel extends EdgeLabel

case object StrongData extends DataLabel
case object WeakData extends DataLabel

case object NormalData extends DataLabel
case object ScratchData extends DataLabel
case object ExceptionData extends DataLabel
case object ReturnData extends DataLabel

// =======================
// Control Dependence Graph Edge Labels
// =======================
trait CDGEdge extends EdgeLabel
// amplified local control dependence
case object ALC extends CDGEdge
// simple local control dependence (also used for initial constructions)
case object SLC extends CDGEdge
// amplified explicit non local control dependence
case object AENLC extends CDGEdge
// simple explicit non local control dependence
case object SENLC extends CDGEdge
// amplified implicit non local control dependence
case object AINLC extends CDGEdge 
// simple implicit non local control dependence
case object SINLC extends CDGEdge 

// =======================
// Leak Types
// =======================
trait LeakType {
	def toSet: Set[EdgeLabel]
}

case object Type1 extends LeakType {
	override def toSet = Set(StrongData)
}

case object Type2 extends LeakType {
	override def toSet = Set(StrongData, WeakData)
}

case object Type3 extends LeakType {
	override def toSet = Set(StrongData, WeakData, ALC)
}

case object Type4 extends LeakType {
	override def toSet = Set(StrongData, WeakData, ALC, SLC)
}

case object Type5 extends LeakType {
	override def toSet = Set(StrongData, WeakData, ALC, AENLC)
}

case object Type6 extends LeakType {
	override def toSet = Set(StrongData, WeakData, ALC, SLC, AENLC, SENLC)
}

case object Type7 extends LeakType {
	override def toSet = Set(StrongData, WeakData, ALC, AENLC, AINLC)
}

case object Type8 extends LeakType {
	override def toSet = Set(StrongData, WeakData, ALC, SLC, AENLC, SENLC, AINLC, SINLC)
}


object LeakType {
	lazy val lessThanRelation: Set[(LeakType, LeakType)] = 
		Set(
			// less than Type1
			(Type2, Type1),
			(Type3, Type1),
			(Type4, Type1),
			(Type5, Type1),
			(Type6, Type1),
			(Type7, Type1),
			(Type8, Type1),
			// less than type 2
			(Type3, Type2),
			(Type4, Type2),
			(Type5, Type2),
			(Type6, Type2),
			(Type7, Type2),
			(Type8, Type2),
			// less than type 3
			(Type4, Type3),
			(Type5, Type3),
			(Type6, Type3),
			(Type7, Type3),
			(Type8, Type3),
			// less than type 4
			(Type6, Type4),
			(Type8, Type4),
			// less than type 5
			(Type6, Type5),
			(Type7, Type5),
			(Type8, Type5),
			// less than type 6
			(Type8, Type6),
			// less than type 7
			(Type8, Type7)
		)

	def strictLessThan(a: LeakType, b: LeakType): Boolean = 
		lessThanRelation((a, b))

	lazy val meetMap: Map[(LeakType, LeakType), LeakType] = 
		Map(
			(Type4, Type5) → Type6,
			(Type4, Type7) → Type8,
			(Type6, Type7) → Type8
		)	

	def meet(a: LeakType, b: LeakType): LeakType = 
		if (strictLessThan(a, b)) a
		else if (strictLessThan(b, a)) b
		else {
			meetMap.get((a, b)) match {
				case Some(ans) ⇒ ans
				case None ⇒ meetMap((b, a))
			}	
		}
}

object AnnotationToLeakType {
	private lazy val m: Map[EdgeLabel, LeakType] = 
		Map(
			StrongData → Type1,
			WeakData → Type2,
			ALC → Type3,
			SLC → Type4,
			AENLC → Type5,
			SENLC → Type6,
			AINLC → Type7,
			SINLC → Type8
		)

	def apply(ann: EdgeLabel): LeakType = {
		m get (ann) match {
			case Some(res) ⇒ res
			case None ⇒ sys.error("Cannot find label: " + ann)
		}
	}
}

// =======================
// Strongest and Weakest Functions
// =======================

object Strongest {
	lazy val ⊥ = Type8

	def apply(s: Set[LeakType]): Set[LeakType] = {
		s.size match {
			case 0 | 1 ⇒ s
			case _ ⇒ {
				s.foldLeft[Set[LeakType]](Set(Strongest.⊥)) {
					case (acc, lt) ⇒ {
						acc.flatMap {
							case e: LeakType ⇒ 
								if (LeakType.strictLessThan(e, lt)) Set(lt)
								else if (LeakType.strictLessThan(lt, e)) Set(e)
								else Set(e, lt)
						}
					}
				}
			}
		}
	}
}

object Weakest {
	def apply(lt: LeakType, ann: EdgeLabel): LeakType = {
		if (lt.toSet(ann)) lt
		else LeakType.meet(lt, AnnotationToLeakType(ann))
	}
}

// =======================
// Source and Sink Types
// =======================
trait SourceType
case object CurrentURL extends SourceType
case object KeyPress extends SourceType 
// for testing purposes
case object MathPI extends SourceType

object SourceType {
	def allTypes: Set[SourceType] = 
		Set(
			CurrentURL, 
			KeyPress,
			MathPI
		)
}

trait SinkType
case class XHRSend(domain: Str) extends SinkType
// for testing purposes
case object MathCos extends SinkType

// =======================
// The interface to building and operating on PDGs
// =======================
case class PDGInterface() {

	type Field = (Address, Str)

	val cfg = EdgeGraph(MSet[Edge[Trace]]())
	val ddg = EdgeGraph(MSet[Edge[Trace]]())

	val strongReadFieldSet = MMap[Trace, Set[Field]]().withDefaultValue(Set[Field]())
	val weakReadFieldSet = MMap[Trace, Set[Field]]().withDefaultValue(Set[Field]())
	val strongWriteFieldSet = MMap[Trace, Set[Field]]().withDefaultValue(Set[Field]())
	val weakWriteFieldSet = MMap[Trace, Set[Field]]().withDefaultValue(Set[Field]())
	val readScratchSet = MMap[Trace, Set[Scratch]]().withDefaultValue(Set[Scratch]())
	val writeScratchSet = MMap[Trace, Set[Scratch]]().withDefaultValue(Set[Scratch]())

	// collects the xhr object addresses on which xhr send (or sendBinary) was invoked
	// also collects the domains to which the send was directed to
	val xhrCollection = MSet[(Address, Str)]()

	var currentτ: Trace = _
	var record = true

	// we only record and instrument if this is true
	def condition = Mutable.inPostFixpoint && Mutable.genSig && record

	def clear {
		cfg.clear
		currentτ = _: Trace
		record = true
	}

	def collectXHR(xhrAddress: Address, xhrDomain: Str) {
		if (condition)
			xhrCollection += ((xhrAddress, xhrDomain))
	}

	// indicate which trace (statement) we are currently processing
	def processing(τ: Trace) {
		if (condition)
			currentτ = τ
	}

  // APIs to pause and restart instrumentation
	def pauseRecording() {
		record = false
	}

	def resumeRecording() {
		record = true
	}

	def addToReadSet(addr: Address, hint: Str, strong: Boolean) {
		if (condition && hint != Str.⊥) {
			if (strong)
				strongReadFieldSet(currentτ) += Pair(addr, hint)
			else 		
				weakReadFieldSet(currentτ) += Pair(addr, hint)
		}
	}

	def addToReadSet(addrs: Addresses, hint: Str, strong: Boolean) {
		if (condition && hint != Str.⊥) 
			addrs.foreach(addToReadSet(_, hint, strong))
	}

	def addToWriteSet(addr: Address, hint: Str, strong: Boolean) {
		if (condition && hint != Str.⊥) {
			if (strong && Str.isExact(hint))
				strongWriteFieldSet(currentτ) += Pair(addr, hint)
			else 	
				weakWriteFieldSet(currentτ) += Pair(addr, hint)
		}
	}

	def addToWriteSet(addrs: Addresses, hint: Str, strong: Boolean) {
		if (condition && hint != Str.⊥) {
			if (strong && Str.isExact(hint))
				addrs.foreach { a ⇒
					strongWriteFieldSet(currentτ) += Pair(a, hint)
				}
			else 
				addrs.foreach { a ⇒
					weakWriteFieldSet(currentτ) += Pair(a, hint)
				}	
		}
	}

	def addToReadSet(scr: Scratch) {
		if (condition)
			readScratchSet(currentτ) += scr
	}

	def addToWriteSet(scr: Scratch) {
		if (condition)
			writeScratchSet(currentτ) += scr
	}

	def addCFGEdge(src: Trace, dest: Trace, label: ControlLabel) {
		if (condition)
			cfg.addEdge(src, dest, label)
	}

	def addDDGEdge(src: Trace, dest: Trace, label: DataLabel) {
		if (condition)
			ddg.addEdge(src, dest, label)
	}

	private def intersect(w: Set[Field], r: Set[Field]): Boolean = {
		w.exists {
  		case (a1, s1) ⇒ r.exists {
    		case (a2, s2) ⇒ a1 == a2 && (s1 ⊑ s2 || s2 ⊑ s1)
			}
		}
	}

	// side effects the ddg graph
	def computeDataDependencies(controlGraph: EdgeGraph[Trace]) {
		// for each trace in the write set
		// compute intersecting traces that read from it
		// 1. get all reachable nodes
		// 2. skipping condition (these nodes are not included in the graph)
		// 3. intersecting condition (in addition to being reachable)

		// strong data: strong write
		// no potential weak write in between
		// strong read

		weakWriteFieldSet.foreach { 
			case (node, wset) ⇒ {
				// remove all edges to killer nodes
				// and get all reachable nodes in CFG
				// is the thing below redundant? because we never kill weak writes
				val reachable = controlGraph.filter { 
					case Edge(src, dest, _) ⇒ {
						src == node || src == dest || 
						((strongWriteFieldSet(src) != wset) &&
							(strongWriteFieldSet(dest) != wset))
					}
				} getReachable(Set(node))

				reachable.filter(r ⇒ intersect(wset, strongReadFieldSet(r) ++ weakReadFieldSet(r))).foreach { 
					dest ⇒
						ddg.addEdge(node, dest, WeakData)
				}
			}
		}

		strongWriteFieldSet.foreach { 
			case (node, wset) ⇒ {
				val filteredGraph = controlGraph.filter { 
					case Edge(src, dest, _) ⇒ {
						src == node || src == dest || 
						((strongWriteFieldSet(src) != wset) &&
						 (strongWriteFieldSet(dest) != wset))
					}
				}
				val reachable = filteredGraph.getReachable(Set(node))

				reachable.filter(r ⇒ intersect(wset, weakReadFieldSet(r))).foreach { 
					dest ⇒
						ddg.addEdge(node, dest, WeakData)
				}
				reachable.filter(r ⇒ intersect(wset, strongReadFieldSet(r))).foreach { 
					dest ⇒
						ddg.addEdge(node, dest, StrongData)
				}
				// TODO: check if there can be weak writes in between a strong write and a strong read
			}
		}

		writeScratchSet.foreach { 
			case (node, wset) ⇒ {
				// remove all edges to killer nodes
				// and get all reachable nodes in controlGraph
				val reachable = controlGraph.filter { 
					case Edge(src, dest, _) ⇒ {
						src == node || src == dest || 
						((writeScratchSet(src) != wset) &&
							(writeScratchSet(dest) != wset))
					}
				} getReachable(Set(node))

				reachable.filter(r ⇒ (wset & readScratchSet(r)).nonEmpty).foreach { 
					dest ⇒
						ddg.addEdge(node, dest, StrongData)
				}
			}
		}
	}

	// all edges in the CFG that are from "call" nodes that are not calling control edges
	// are shifted to originate instead from the corresponding ret edges
	// all dead nodes are also removed in this stage
	def rectifyCFG(g: EdgeGraph[Trace]): EdgeGraph[Trace] = {
		// all the nodes that are making a call
		val callNodes = cfg.matchSrcNodes(
			(lbl: EdgeLabel) ⇒ lbl match {
				case CallingControl ⇒ true
				case _ ⇒ false
			})

		EdgeGraph(
			g.getEdges.map {
				// leave the calling control edges as is
				case e@Edge(src, dest, CallingControl) ⇒ e
				// in the remaining edges, move all call node originating
				// edges to originate from the corresponding ret node
				case Edge(src, dest, lbl) if (callNodes(src)) ⇒ Edge(PDGInterface.getRetNode(src), dest, lbl)
				// leave the remaining edges as is
				case other ⇒ other
			}		
		).eliminateDeadNodes(Haltingτ)
	}

	// Implementation of control flow graph to control dependence graph
	// http://www.cc.gatech.edu/~harrold/6340/cs6340_fall2009/Readings/ferrante87jul.pdf
	// Ferrante 1987
	// returns a set of edges (src, dest)
	def computeCDG(g: EdgeGraph[Trace]): Set[(Trace, Trace)] = {
		// first, add entry node and edges to all begin nodes and halt node
		for (start ← g.beginNodes)
			g.addEdge(Enteringτ, start, DummyControl)
		g.addEdge(Enteringτ, Haltingτ, DummyControl)

		// then, eliminate the dead nodes
		// val gPruned = g.toAdjacencyGraph.eliminateDeadNodes(Haltingτ)
		val gAdjacency = g.toAdjacencyGraph.connectEndNodes(Haltingτ) 
		// reverse the g
		val gReversed = gAdjacency.reverse
		// get the dominator tree for the reverse g
		// what we have a post-dominator tree for the g

		val reversePostDomTree = gReversed.dominatorTree
		// an edge A → B in the reverse post dom tree indicates that
		// B is a parent of A in post dom tree
		val postDomTree = reversePostDomTree.reverse

		val branchGraph = gAdjacency.filter((src: Trace, dest: Trace) ⇒ {
			// dst is an ancestor of src in the post dom tree, do not include it
			!reversePostDomTree.isReachable(Set(src), Set(dest))
		})

		val cdg = MSet[(Trace, Trace)]()
		branchGraph.getEdgePairs.foreach { case (a, b) ⇒
			// forward from b in reverse post dom tree
			// until we reach a's parent
			val aParent = reversePostDomTree.getDest(a).headOption	
			var traverse = true
			// curr traverses b, its parent, ....
			var curr = b
			while (traverse) {
				cdg += (a → curr)
				reversePostDomTree.getDest(curr).headOption match {
					// we have reached the top of the tree, done
					case None ⇒ traverse = false
					case cp@Some(currParent) ⇒ 
						if (cp == aParent) traverse = false
						else curr = currParent
				}
			}	
		}

		cdg.toSet
	}


	// decorates the CDG with annotations
	def decorateCDG(controlFlow: EdgeGraph[Trace]): EdgeGraph[Trace] = {
		// compute all cycles in CFG
		val cycleNodes = controlFlow.toAdjacencyGraph.getCycleNodes()

		val cfg1 = controlFlow.filter(e ⇒ e match {
			case Edge(_, _, _: ExplicitNonLocalControl) ⇒ false
			case Edge(_, _, _: ImplicitNonLocalControl) ⇒ false
			case _ ⇒ true
		})
		val cdg1 = computeCDG(cfg1)

		val cfg2 = controlFlow.filter(e ⇒ e match {
			case Edge(_, _, _: ImplicitNonLocalControl) ⇒ false
			case _ ⇒ true
		})
		val cdg2 = computeCDG(cfg2)

		val cdg3 = computeCDG(controlFlow)

		val loc = cdg1
		val nonlocE = (cdg2 -- cdg1)
		val nonlocI = (cdg3 -- (cdg1 ++ cdg2))

		val edges = MSet[Edge[Trace]]()
		
		edges ++= (loc map {
			case (s, d) ⇒
				if (cycleNodes(s)) Edge(s, d, ALC)
				else Edge(s, d, SLC) 
		})

		edges ++= (nonlocE map {
			case (s, d) ⇒
				if (cycleNodes(s)) Edge(s, d, AENLC)
				else Edge(s, d, SENLC) 
		})

		edges ++= (nonlocI map {
			case (s, d) ⇒
				if (cycleNodes(s)) Edge(s, d, AINLC)
				else Edge(s, d, SINLC) 
		})

		EdgeGraph[Trace](edges)
	}

	// compute interesting leaks
	// the srcMap gives the source nodes and the source type
	// the sinkMap gives sink nodes and their type
	// we return the signature leak entries
	// each giving the source and sink of the leak, and its type
	// NOTE:
	// we assume each node only corresponds to one source type
	// similarly with sink type
	def computeLeaks(srcMap: Map[Trace, SourceType], 
									 sinkMap: Map[Trace, SinkType], 
									 annPDG: AnnotatedAdjacencyGraph[Trace]): Set[(SourceType, LeakType, SinkType)] = {

		def joinSLTEntries(a: Map[SourceType, Set[LeakType]], 
								 	     b: Map[SourceType, Set[LeakType]]): Map[SourceType, Set[LeakType]] = {
			(a.keySet ++ b.keySet).foldLeft(Map[SourceType, Set[LeakType]]()) {
				case (acc, key) ⇒ acc + (key → Strongest(a(key) ++ b(key)))
			}
		}

		val srcTypeSet: Set[SourceType] = SourceType.allTypes
		// set of leak types
		val SLT = MMap[Trace, Map[SourceType, Set[LeakType]]]().
			withDefaultValue(Map[SourceType, Set[LeakType]]().
				withDefaultValue(Set[LeakType]()))
		// initialize source nodes
		srcMap.foreach {
			case (τ, st) ⇒ SLT(τ) = Map[SourceType, Set[LeakType]](st → Set(Type1)).withDefaultValue(Set[LeakType]()) 
		}
		// initialize the worklist in reverse post order, starting from Enteringτ
		val workList = MQ[Trace]() ++ annPDG.reversePostOrder(Enteringτ)

		while (workList.nonEmpty) {
			val node = workList.dequeue()
			// the set of leak types computed freshly for the node
			val sltNode = MMap[SourceType, Set[LeakType]]()

			for (st ← srcTypeSet) {
				sltNode(st) = Set[LeakType]()
				for ((src, ann) ← annPDG.pred(node)) {
					var contrib = Set[LeakType]()
					for (lt ← SLT(src)(st)) {
						contrib = Strongest(contrib + Weakest(lt, ann))
					}
					sltNode(st) = Strongest(sltNode(st) ++ contrib)
				}
			}
			val sltNodeImmutable = sltNode.toMap
			if (sltNodeImmutable != SLT(node)) {
				SLT(node) = joinSLTEntries(sltNodeImmutable, SLT(node))
				workList ++= annPDG.succ(node)
			} // else SLT(node) is already computed, for now
		}
		
		// TODO: reduce to remove redundant flows
		sinkMap.foldLeft(Set[(SourceType, LeakType, SinkType)]()) {
			case (outeracc, (τ, sinktype)) ⇒ {
				SLT(τ).foldLeft(Set[(SourceType, LeakType, SinkType)]()) {
					case (inneracc, (sourcetype, lts)) ⇒
						inneracc ++ lts.map(lt ⇒ (sourcetype, lt, sinktype))
				} ++ outeracc 
			}
		}
	}

	def computeSignature() = {
		import notjs.abstracted.init._
		import java.io._

		// indicate sources and sinks here
		val sources: Map[Field, SourceType] = 
			Map( 
				(Init.document_Addr, Str.α("location")) → CurrentURL,
	      (Init.__evt_Addr, Str.α("charCode")) → KeyPress, 
	      (Init.__evt_Addr, Str.α("char")) → KeyPress, 
	      (Init.__evt_Addr, Str.α("key")) → KeyPress, 
	      (Init.__evt_Addr, Str.α("keyCode")) → KeyPress, 
	      (Init.__evt_Addr, Str.α("location")) → KeyPress, 
	      (Init.__evt_Addr, Str.α("which")) → KeyPress, 
				(Init.Math_Addr, Str.α("PI")) → MathPI
			)

		val sinks: Map[Field, SinkType] = 
			Map(
				(Init.Math_Addr, Str.α("cos")) → MathCos
				)

		val xhrsinks = 
			xhrCollection.map {
					case (a, str) ⇒ ((a, Str.α("send")), XHRSend(str))
			}.toMap[Field, SinkType]

		// at this point we have already populated the CFG in cfg
	  // correct the CFG to move edges from call nodes 
	  // (except the calling control edges) to edges from
	  // corresponding ret nodes
	  // also eliminate unconnected leaves
	  val correctedCFG = rectifyCFG(cfg)


		println("Time for analysis: " + Mutable.getTimeSincePrevCall())
		// DDG is partially built, we need to build the rest
		// using the correctedCFG
		// this side effects ddg
		computeDataDependencies(correctedCFG)

		val annCDG = decorateCDG(correctedCFG)

		val (srcMap, sinkMap) = 
			correctedCFG.matchNodes((τ) ⇒ true).foldLeft((Map[Trace, SourceType](), Map[Trace, SinkType]())) {
				case ((accsrc, accsink), node) ⇒ {
					// overwrites if there are multiple sources at the same trace
					(accsrc ++
						((weakReadFieldSet(node) ++ strongReadFieldSet(node)) & sources.keySet).foldLeft(Map[Trace, SourceType]()) {
							case (acc, key) ⇒ acc + (node → sources(key))
						},
	  			 accsink ++				
						((weakReadFieldSet(node) ++ strongReadFieldSet(node)) & xhrsinks.keySet).foldLeft(Map[Trace, SinkType]()) {
							case (acc, key) ⇒ acc + (node → xhrsinks(key))
						} ++
						((weakReadFieldSet(node) ++ strongReadFieldSet(node)) & sinks.keySet).foldLeft(Map[Trace, SinkType]()) {
							case (acc, key) ⇒ acc + (node → sinks(key))
						}
					)
				}
			}

		val annotatedPDG = (annCDG ++ ddg)

		println("Time for constructing ann PDG: " + Mutable.getTimeSincePrevCall())

		val signature = computeLeaks(srcMap, sinkMap, annotatedPDG.toAnnotatedAdjacencyGraph)
		println("Time for computing signature: " + Mutable.getTimeSincePrevCall())
		println("Signature: ")
		signature.foreach(println(_))
		xhrsinks.values.toSet.foreach((x: SinkType) ⇒ println(x))

		(annotatedPDG, signature)
	}

	def writeSliceVisualizer(ast: Stmt, annotatedPDG: EdgeGraph[Trace], fName: String) = {
		val SLICE_VISUALIZER_PATH = new File("scripts/slice_visualizer/slice_visualizer.html")

	    val codePrint = CodePrint.getText(ast, PVarMapper.getMapping)
	    val formattedEdges = annotatedPDG.toJSON(_.getProgramPoint.get.toString)

	    val visualizerTemplateSource = io.Source.fromFile(SLICE_VISUALIZER_PATH)
	    val visualizerTemplate = visualizerTemplateSource.mkString
	    visualizerTemplateSource.close

	    val visualizerCode = visualizerTemplate.replaceAll(
	        "(?s)<!-- EDGES_START -->.*<!-- EDGES_END -->", Matcher.quoteReplacement(formattedEdges))
	      .replaceAll(
	        "(?s)<!-- CODE_START -->.*<!-- CODE_END -->", Matcher.quoteReplacement(codePrint))
	    val fOut = new File(SLICE_VISUALIZER_PATH.getParent, fName)
	    val writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(fOut), "utf-8"));
	    writer.write(visualizerCode)
	    writer.close
	    System.out.println("Wrote slice visualizer to " + fOut.getAbsolutePath)
	}

}

object PDGInterface {
	// given a call node, gives back the artificial ret node
	// does this by adding 1 to the statement id
	def getRetNode(callNode: Trace) = {
		val sid = Trace.getBase(callNode.toAddr)
		callNode.update(sid + 1)
	}
}
