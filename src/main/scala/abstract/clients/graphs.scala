// this file contains various graph data structures
// and operations on them

package notjs.abstracted.clients.graph
import collection.mutable.{Set ⇒ MSet, Queue ⇒ MQ, Map ⇒ MMap, ListBuffer ⇒ MList}

case class Edge[Node](src: Node, dest: Node, label: EdgeLabel)

trait EdgeLabel 

case class EdgeGraph[Node](edges: MSet[Edge[Node]]) {
	
	def clear {
		edges.clear
	}

	def ++(that: EdgeGraph[Node]): EdgeGraph[Node] = {
		val thisSet = edges.toSet
		val thatSet = that.getEdges.toSet
		new EdgeGraph(MSet[Edge[Node]]() ++ thisSet ++ thatSet)
	} 

	def deepCopy(): EdgeGraph[Node] = {
		val immutableSet = edges.toSet
		EdgeGraph(MSet[Edge[Node]]() ++ immutableSet)
	}

	def beginNodes = {
		val (outgoing, incoming) = (edges.map(_.src), edges.map(_.dest))
		(outgoing -- incoming)
	}

	def getEdges = edges

	def addEdge(src: Node, dest: Node, label: EdgeLabel) {
		edges += Edge(src, dest, label)
	}

	def filter(func: (Edge[Node]) ⇒ Boolean): EdgeGraph[Node] = 
		EdgeGraph(MSet[Edge[Node]]() ++ edges.toSet.filter(func))

	def toAdjacencyGraph: AdjacencyGraph[Node] = {
		AdjacencyGraph(
			edges.foldLeft(Map[Node, Set[Node]]().withDefaultValue(Set[Node]())) {
				case (acc, Edge(src, dest, _)) ⇒ 
					acc + (src → (acc(src) + dest))
			}
		)
	}

	def toHalfAdjacencyGraph: HalfAnnotatedAdjacencyGraph[Node] = {
		val succ = MMap[Node, Set[(Node, EdgeLabel)]]().withDefaultValue(Set[(Node, EdgeLabel)]())
		edges.foreach {
			case Edge(src, dest, lbl) ⇒ {
				succ(src) += ((dest, lbl))
			}
		}
		HalfAnnotatedAdjacencyGraph(Map[Node, Set[(Node, EdgeLabel)]]().withDefaultValue(Set[(Node, EdgeLabel)]()) ++ succ)
	}

	def toAnnotatedAdjacencyGraph: AnnotatedAdjacencyGraph[Node] = {
		val succ = MMap[Node, Set[Node]]().withDefaultValue(Set[Node]())
		val pred = MMap[Node, Set[(Node, EdgeLabel)]]().withDefaultValue(Set[(Node, EdgeLabel)]())
		edges.foreach {
			case Edge(src, dest, lbl) ⇒ {
				succ(src) += dest
				pred(dest) += ((src, lbl))
			}
		}
		AnnotatedAdjacencyGraph(Map[Node, Set[Node]]().withDefaultValue(Set[Node]()) ++ succ, 
														Map[Node, Set[(Node, EdgeLabel)]]().withDefaultValue(Set[(Node, EdgeLabel)]()) ++ pred)
	}

	def isReachable(sources: Set[Node], sinks: Set[Node]): Boolean = 
		toAdjacencyGraph.isReachable(sources, sinks)

	def getReachable(sources: Set[Node]): Set[Node] = 
		toAdjacencyGraph.getReachable(sources)	

	def matchNodes(cond: (Node) ⇒ Boolean): Set[Node] = {
		edges.collect {
			case Edge(src, _, _) if cond(src) ⇒ src
			case Edge(_, dest, _) if cond(dest) ⇒ dest
		} toSet
	}
	
	def matchSrcNodes(cond: (EdgeLabel) ⇒ Boolean): Set[Node] = {
		edges.collect {
			case Edge(src, _, lbl) if cond(lbl) ⇒ src
		} toSet
	}

	def getSelfLoopNodes(): Set[Node] = {
		edges.collect {
			case Edge(src, dest, _) if (src == dest) ⇒ src
		} toSet
	}

	def eliminateDeadNodes(haltNode: Node): EdgeGraph[Node] = {
		this.toHalfAdjacencyGraph.eliminateDeadNodes(haltNode)
	}

	def toDOT(name: String, nodeToStr: (Node) ⇒ String): String = {
		"digraph %s {\n%s\n}\n".format(name,  
			edges.map {
				case Edge(s, d, l) ⇒ "\t%s -> %s [ label=\"%s\" ];".format(nodeToStr(s), 
																	    			  										 nodeToStr(d),
																	    			  										 l.toString) 
			}.mkString("\n")
		)
	}	

	def toJSON(nodeToStr: (Node) ⇒ String): String = {
		"[\n%s\n]".format(edges.map {
			case Edge(s, d, l) ⇒ """{"source": "%s", "target": "%s", "type": "%s"}""".format(
				nodeToStr(s), nodeToStr(d), l.toString)
		}.mkString(",\n"))
	}
}

case class AnnotatedAdjacencyGraph[Node](succ: Map[Node, Set[Node]],
																			   pred: Map[Node, Set[(Node, EdgeLabel)]]) {
	
	def reversePostOrder(startNode: Node): List[Node] = {
		val visited = MSet[Node]()
		val po = MList[Node]()

		def DFSRecurse(v: Node) {
			visited += v
			if (succ.contains(v)) {
				for (w ← succ(v)) {
					if (!visited(w))
						DFSRecurse(w)
				}
			}
			po += v
		}

		DFSRecurse(startNode)
		po.reverse.toList
	}
}

case class HalfAnnotatedAdjacencyGraph[Node](edges: Map[Node, Set[(Node, EdgeLabel)]]) {
	def eliminateDeadNodes(haltNode: Node): EdgeGraph[Node] = {
		// 1. find all nodes that have zero edges, or those dest nodes that are never sources
		// 2. remove those nodes
		// 3. repeat until 1. returns no nodes

		def endNodes(edgeMap: Map[Node, Set[(Node, EdgeLabel)]]): Set[Node] = 
			(edgeMap.collect {
				case (n, outs) if outs.isEmpty ⇒ n
		   }.toSet) ++ (edgeMap.values.flatMap(tups ⇒ tups.map(_._1)).toSet -- edgeMap.keySet) - haltNode
		
		def removeNodes(edgeMap: Map[Node, Set[(Node, EdgeLabel)]], nodes: Set[Node]): Map[Node, Set[(Node, EdgeLabel)]] = {
			edgeMap.foldLeft(Map[Node, Set[(Node, EdgeLabel)]]()) {
				case (acc, (k, vs)) ⇒ if (nodes(k)) acc
														  else {
														  	val newvs = vs.filterNot(v ⇒ nodes(v._1))
														  	acc + (k → newvs)
														  }
			}
		}	  

		var graph = edges
		var leaves = endNodes(graph)
		do {
			graph = removeNodes(graph, leaves)
			leaves = endNodes(graph)
		} while(leaves.nonEmpty)

		EdgeGraph(MSet[Edge[Node]]() ++ (graph.flatMap {
			case (k, vs) ⇒ vs.map(v ⇒ Edge(k, v._1, v._2))	
		}))
	}
}

case class AdjacencyGraph[Node](edges: Map[Node, Set[Node]]) {

	def toDOT(name: String, nodeToStr: (Node) ⇒ String): String = {
		"digraph %s {\n%s\n}\n".format(name, 
			edges.map {
				case (k, vs) ⇒ vs.map(v ⇒ "\t%s -> %s;".format(nodeToStr(k), nodeToStr(v))).mkString("\n")
			}.mkString("\n")
		)
	}

	def getDest(src: Node): Set[Node] = edges.getOrElse(src, Set[Node]())

	def filter(func: (Node, Node) ⇒ Boolean): AdjacencyGraph[Node] = {
		AdjacencyGraph(
			edges.foldLeft(Map[Node, Set[Node]]()) {
				case (acc, (k, vs)) ⇒ {
					val filteredVs = vs.filter(v ⇒ func(k, v))
					if (filteredVs.isEmpty) acc
					else acc + (k → filteredVs)
				}
			}
		)
	}

	def getEdgePairs: Set[(Node, Node)] = {
		edges.foldLeft(Set[(Node, Node)]()) {
			case (acc, (k, vs)) ⇒ acc ++ vs.map(v ⇒ (k, v))
		}
	}

	def isReachable(sources: Set[Node], sinks: Set[Node]): Boolean = 
		(getReachable(sources) & sinks).nonEmpty

	// includes the source nodes
	def getReachable(sources: Set[Node]): Set[Node] = {
		val visited = MSet[Node]()
		val worklist = MQ[Node]() ++ sources

		while (worklist.nonEmpty) {
			val item = worklist.dequeue()
			visited += item
			val outgoing = 
				if (edges.contains(item))
					edges(item).filter(t ⇒ !visited(t))
				else Set()	
			worklist ++= outgoing
		}		

		visited.toSet
	}

	lazy val nodes = edges.keySet ++ edges.values.flatten

	// edges that have outgoing nodes, but no one coming in
	lazy val beginNodes = edges.keySet -- edges.values.flatten
		
	def connectEndNodes(haltNode: Node): AdjacencyGraph[Node] = {
		// find all nodes with no outgoing edge
		val leaves = (edges.collect {
				case (n, outs) if outs.isEmpty ⇒ n
		   }.toSet) ++ (edges.values.flatten.toSet -- edges.keySet) - haltNode
		AdjacencyGraph(edges ++ leaves.map(l ⇒ (l → Set(haltNode))).toMap)
	}
		
	def eliminateDeadNodes(haltNode: Node): AdjacencyGraph[Node] = {
		// 1. find all nodes that have zero edges, or those dest nodes that are never sources
		// 2. remove those nodes
		// 3. repeat until 1. returns no nodes

		def endNodes(edgeMap: Map[Node, Set[Node]]): Set[Node] = 
			(edgeMap.collect {
				case (n, outs) if outs.isEmpty ⇒ n
		   }.toSet) ++ (edgeMap.values.flatten.toSet -- edgeMap.keySet) - haltNode
		
		def removeNodes(edgeMap: Map[Node, Set[Node]], nodes: Set[Node]): Map[Node, Set[Node]] = {
			edgeMap.foldLeft(Map[Node, Set[Node]]()) {
				case (acc, (k, v)) ⇒ if (nodes(k)) acc
														 else acc + (k → (v -- nodes))
			}
		}	  

		var graph = edges
		var leaves = endNodes(graph)
		do {
			graph = removeNodes(graph, leaves)
			leaves = endNodes(graph)
		} while(leaves.nonEmpty)

		AdjacencyGraph(graph)
	}

	// http://www.hipersoft.rice.edu/grads/publications/dom14.pdf
	// Figure 3: the engineered algorithm
	def dominatorTree: AdjacencyGraph[Node] = {

		assert(beginNodes.size == 1, "There is only one start node for dominator tree computation")
		val rootNode = beginNodes.head
		val (node2Post, post2Node) = DFS(rootNode)

		// get predecessors interms of post order numbers
		val pred = MMap[Int, Set[Int]]().withDefaultValue(Set[Int]())

		edges.foreach {
			case (k, v) ⇒ v.foreach(e ⇒ 
				pred(node2Post(e)) += 
					node2Post(k))
		}

		// post order gives the root the last number
		val root = node2Post(rootNode) 
		// rpo is reverse post order minus the root
		val rpo = List.range(1, post2Node.size).reverse

		val UNDEFINED = -1
		val doms = MMap[Int, Int]().withDefaultValue(UNDEFINED)
		doms(root) = root
		var changed = true
		while (changed) {
			changed = false
			for (b ← rpo) { // rpo excludes root
				val predb = pred(b)
				var newIdom = predb.max
				for (p ← (predb - newIdom)) { 
					if (doms(p) != UNDEFINED)
						newIdom = intersect(p, newIdom)
				}
				if (doms(b) != newIdom) {
					doms(b) = newIdom
					changed = true
				}
			}
		}

		def intersect(b1: Int, b2: Int): Int = {
			var finger1 = b1
			var finger2 = b2
			while (finger1 != finger2) {
				while (finger1 < finger2)
					finger1 = doms(finger1)
				while (finger2 < finger1)	
					finger2 = doms(finger2)
			}
			finger1
		}

		val domEdges = MMap[Node, Set[Node]]().withDefaultValue(Set[Node]())
		doms.foreach {
			case (k, v) ⇒ domEdges(post2Node(k)) += post2Node(v)
		}
		domEdges(rootNode) = Set[Node]()
		AdjacencyGraph(domEdges.toMap)
	}

	// does a DFS traversal from node n
	// returns two maps:
	// 1. each node mapped to its post order traversal number
	// 2. post order traversal number mapped to the corresponding node
	private def DFS(n: Node): (Map[Node, Int], Map[Int, Node]) = {
		val visited = MSet[Node]()
		val node2PostOrder = MMap[Node, Int]()
		val postOrder2Node = MMap[Int, Node]()
		var number = 0

		// does recursive DFS
		// side effects visited and increments number
		// also fills up node2PostOrder and postOrder2Node
		def DFSRecurse(v: Node) {
			visited += v
			if (edges.contains(v))
				for (w ← edges(v)) {
					if (!visited(w))
						DFSRecurse(w)
				}
			number = number + 1
			node2PostOrder(v) = number
			postOrder2Node(number) = v	
		}

		DFSRecurse(n)
		(node2PostOrder.toMap, postOrder2Node.toMap)
	}

	// returns a new reversed graph
	def reverse: AdjacencyGraph[Node] = {
		val rmap = MMap[Node, Set[Node]]().withDefaultValue(Set[Node]())
		edges.foreach {
			case (k, v) ⇒ v.foreach(e ⇒ rmap(e) += k)
		}
		AdjacencyGraph(rmap.toMap)
	}

	// using Tarjan's algorithm
	def getCycleNodes(): Set[Node] = {
	  val Index = MMap[Node, Int]()
	  val Lowlink = MMap[Node, Int]()
	  val S = collection.mutable.Stack[Node]()
	  var index = 0
	  val cycleNodes = MSet[Node]()

	  def strongconnect(v: Node) {
	    Index(v) = index
	    Lowlink(v) = index
	    index += 1
	    S.push(v)

	    for (w ← edges(v)) {
	      if (!Index.contains(w)) {
	        strongconnect(w)
	        Lowlink(v) = math.min(Lowlink(v), Lowlink(w))
	      } else if (S.contains(w)) {
	        Lowlink(v) = math.min(Lowlink(v), Index(w))
	      }
	    }

	    if (Lowlink(v) == Index(v)) {
	      // start a new strongly connected component
	      val scc = MSet[Node]()
	      var cond = true
	      while(cond) {
	        val w = S.pop()
	        scc += w
	        cond = (w != v)
	      } 
	      if (scc.size > 1)
	        cycleNodes ++= scc
	      if (scc.size == 1 && edges.contains(scc.head) && edges(scc.head).contains(scc.head))
	        cycleNodes ++= scc
	    }
	  }
	  
	  val V = edges.keySet
	  for (v ← V) {
	    if (!Index.contains(v)) 
	    	strongconnect(v)
	  }

	 	cycleNodes.toSet
	}
}

object GraphTester {
	def main(args: Array[String]): Unit = {
		// test dominator tree	  
		case object DummyLabel extends EdgeLabel 
		val graph = new EdgeGraph(MSet[Edge[String]]())
		graph.addEdge("entry", "start", DummyLabel)
		graph.addEdge("entry", "stop", DummyLabel)
		graph.addEdge("start", "1", DummyLabel)
		graph.addEdge("1", "2", DummyLabel)
		graph.addEdge("1", "3", DummyLabel)
		graph.addEdge("2", "4", DummyLabel)
		graph.addEdge("2", "5", DummyLabel)
		graph.addEdge("3", "5", DummyLabel)
		graph.addEdge("3", "7", DummyLabel)
		graph.addEdge("4", "6", DummyLabel)
		graph.addEdge("5", "6", DummyLabel)
		graph.addEdge("6", "7", DummyLabel)
		graph.addEdge("7", "stop", DummyLabel)

		println(
			graph.toAdjacencyGraph.reverse.dominatorTree.reverse.toDOT("DOMTree", (x: String) ⇒ x)
		)
	}
}
