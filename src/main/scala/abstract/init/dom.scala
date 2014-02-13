package notjs.abstracted.init

import notjs.syntax._
import notjs.abstracted.domains._
import notjs.abstracted.init.InitHelpers._
// import notjs.abstracted.init.StringHelpers._
import notjs.abstracted.traces.Trace
import notjs.abstracted.domains.AddressSpace._
import notjs.abstracted.init.Init._
import notjs.abstracted.helpers.Fields
import notjs.abstracted.interpreter.notJS
// import notjs.abstracted.helpers.Helpers._
// import notjs.abstracted.init.StringHelpers._


// window.XMLHttpRequest = function() {
//   this.open = function(method, url) {
//     this["__domain"] = url;
//     this.responseText = TopString;
//     this.responseXML = document;
//     this.readyState = TopNum;
//     this.status = TopNum;
//     this.statusText = TopString;
//     this.timeout = TopNum;
//   };

//   this.abort = function() {}; // 0
//   this.getAllResponseHeaders = function() { return TopString; }; // 0
//   this.getResponseHeader = function(hdr) { return TopString; }; // 1
//   this.overrideMimeType = function() {}; // 1
//   this.setRequestHeader = function() {}; // 2

//   this.sendAsBinary = function(msg) {}; // 1

//   this.send = function(msg) {}; // 0
// }

object InitDOM {

  val document_Obj = createInitObj(Map(
    "location" → Address.inject(document_location_Addr)
  ))

  val document_location_Obj = createInitObj(Map[String, BValue]())

  val XMLHttpRequest_Obj = createInitFunctionObj(Native(
  	(selfAddr: BValue, argArrayAddr: BValue, x: Var, ρ: Env, σ: Store, ß:Scratchpad, κ: KStack, τ:Trace) ⇒ {
      assert(selfAddr.as.size == 1, "We allocated a single XHR object at this point")
      val xhrAddr = selfAddr.as.head
      val xhrObj = σ.getObj(xhrAddr, Str.⊥)
      val isStrong = σ.isStrong(xhrAddr)
      if (isStrong) {
        val extern = xhrObj.extern ++
          (Str.α("open") → Address.inject(XMLHttpRequest_open_Addr)) ++
          (Str.α("addEventListener") → Address.inject(XMLHttpRequest_addEventListener_Addr)) ++
          (Str.α("abort") → Address.inject(XMLHttpRequest_abort_Addr)) ++           
          (Str.α("getAllResponseHeaders") → Address.inject(XMLHttpRequest_getAllResponseHeaders_Addr)) ++           
          (Str.α("getResponseHeader") → Address.inject(XMLHttpRequest_getResponseHeader_Addr)) ++           
          (Str.α("overrideMimeType") → Address.inject(XMLHttpRequest_overrideMimeType_Addr)) ++           
          (Str.α("setRequestHeader") → Address.inject(XMLHttpRequest_setRequestHeader_Addr)) ++           
          (Str.α("sendAsBinary") → Address.inject(XMLHttpRequest_sendAsBinary_Addr)) ++           
          (Str.α("send") → Address.inject(XMLHttpRequest_send_Addr))
        val intern = xhrObj.intern + (Fields.domain → Str.⊥)
        val present = Set(Str.α("open"), 
                          Str.α("addEventListener"), 
                          Str.α("abort"), 
                          Str.α("getAllResponseHeaders"), 
                          Str.α("getResponseHeader"), 
                          Str.α("overrideMimeType"), 
                          Str.α("setRequestHeader"), 
                          Str.α("sendAsBinary"), 
                          Str.α("send"))
        val updatedObj = Object(extern, intern, xhrObj.present ++ present)
        makeState(selfAddr, x, ρ, σ.putObjStrong(xhrAddr, updatedObj, Str.⊤), ß, κ, τ) 
      } else {
        val extern = xhrObj.extern +
          (Str.α("open") → Address.inject(XMLHttpRequest_open_Addr)) +
          (Str.α("addEventListener") → Address.inject(XMLHttpRequest_addEventListener_Addr)) +
          (Str.α("abort") → Address.inject(XMLHttpRequest_abort_Addr)) +
          (Str.α("getAllResponseHeaders") → Address.inject(XMLHttpRequest_getAllResponseHeaders_Addr)) +
          (Str.α("getResponseHeader") → Address.inject(XMLHttpRequest_getResponseHeader_Addr)) +    
          (Str.α("overrideMimeType") → Address.inject(XMLHttpRequest_overrideMimeType_Addr)) +          
          (Str.α("setRequestHeader") → Address.inject(XMLHttpRequest_setRequestHeader_Addr)) +           
          (Str.α("sendAsBinary") → Address.inject(XMLHttpRequest_sendAsBinary_Addr)) +    
          (Str.α("send") → Address.inject(XMLHttpRequest_send_Addr))
        // just making the domain explicitly present
        val intern = xhrObj.intern + (Fields.domain → xhrObj.getDomain)
        val updatedObj = xhrObj.copy(extern = extern, intern = intern)
        makeState(selfAddr, x, ρ, σ.putObjWeak(xhrAddr, updatedObj, Str.⊤), ß, κ, τ)  
      }
  	}), Map("length" → Num.inject(Num.α(0))))

    val XMLHttpRequest_open_Obj = createInitFunctionObj(Native(
      (selfAddr: BValue, argArrayAddr: BValue, x: Var, ρ: Env, σ: Store, ß:Scratchpad, κ: KStack, τ:Trace) ⇒ {
        assert(argArrayAddr.defAddr, "Arguments array refers to non-addresses")
        assert(argArrayAddr.as.size == 1, "Arguments array refers to multiple addresses")
        
        val xhrAddrs = selfAddr.as.filter(a ⇒ σ.getObj(a, Str.⊥).getJSClass == CXHR)
        val argsObj = σ.getObj(argArrayAddr.as.head, Str.α("1"))
        val url = argsObj(Str.α("1")).getOrElse(BValue.⊥).str
        lazy val present = Set(Str.α("responseText"),
                               Str.α("responseXML"),
                               Str.α("readyState"),
                               Str.α("status"),
                               Str.α("statusText"),
                               Str.α("timeout"))
        val isStrong = σ.isStrong(xhrAddrs.head) && selfAddr.as.size == 1

        val newσ = 
          xhrAddrs.foldLeft(σ) { case (accσ, xhrAddr) ⇒ 
            val xhrObj = accσ getObj(xhrAddr, Str.⊥)
            val extern = xhrObj.extern ++ 
                          (Str.α("responseText") → Str.inject(Str.⊤)) ++
                          (Str.α("responseXML") → Address.inject(document_Addr)) ++
                          (Str.α("readyState") → Num.inject(Num.⊤)) ++
                          (Str.α("status") → Num.inject(Num.⊤))
                          (Str.α("statusText") → Str.inject(Str.⊤))
                          (Str.α("timeout") → Num.inject(Num.⊤))
            val intern = xhrObj.intern + (Fields.domain → (url ⊔ xhrObj.getDomain)) 
            if (isStrong) {
              val updatedObj = xhrObj.copy(extern = extern, intern = intern, xhrObj.present ++ present) 
              accσ.putObjStrong(xhrAddr, updatedObj, Str.⊤)
            } else {
              val updatedObj = xhrObj.copy(extern = extern, intern = intern)
              accσ.putObjWeak(xhrAddr, updatedObj, Str.⊤)
            }
          }

        makeState(Undef.BV, x, ρ, newσ, ß, κ, τ)    
      }), Map("length" → Num.inject(Num.α(2))))

    def doNothingFunction(len: Int) = 
      createInitFunctionObj(Native(
        (selfAddr: BValue, argArrayAddr: BValue, x: Var, ρ: Env, σ: Store, ß:Scratchpad, κ: KStack, τ:Trace) ⇒ {
          // change nothing, return undef
          makeState(Undef.BV, x, ρ, σ, ß, κ, τ)
        }), Map("length" → Num.inject(Num.α(len))))

    def retTopStringFunction(len: Int) = 
      createInitFunctionObj(Native(
        (selfAddr: BValue, argArrayAddr: BValue, x: Var, ρ: Env, σ: Store, ß:Scratchpad, κ: KStack, τ:Trace) ⇒ {
          // change nothing, return top string
          makeState(Str.inject(Str.⊤), x, ρ, σ, ß, κ, τ)
        }), Map("length" → Num.inject(Num.α(len))))
    
    def networkSend(len: Int) = 
      createInitFunctionObj(Native(
        (selfAddr: BValue, argArrayAddr: BValue, x: Var, ρ: Env, σ: Store, ß:Scratchpad, κ: KStack, τ:Trace) ⇒ {
          // send network message, return top string
          assert(argArrayAddr.defAddr, "Arguments array refers to non-addresses")
          assert(argArrayAddr.as.size == 1, "Arguments array refers to multiple addresses")
          val xhrAddrs = selfAddr.as.filter(a ⇒ σ.getObj(a, Str.⊥).getJSClass == CXHR)

          // we indicate that we are using the first parameterof xhr send
          val argsObj = σ.getObj(argArrayAddr.as.head, Str.α("0"))

          // Sending message given by argsObj(Str.α("0")).getOrElse(Undef.BV) to the domain xhrObj.getDomain
          xhrAddrs.foreach { xhrAddr ⇒
            val xhrObj = σ getObj(xhrAddr, Str.⊥)
            notJS.Mutable.pdg.collectXHR(xhrAddr, xhrObj.getDomain)
          }
          makeState(Undef.BV, x, ρ, σ, ß, κ, τ)
        }), Map("length" → Num.inject(Num.α(len))))

    // TODO: actually listen to events
    val XMLHttpRequest_addEventListener_Obj = doNothingFunction(2)
    val XMLHttpRequest_abort_Obj = doNothingFunction(0)
    val XMLHttpRequest_getAllResponseHeaders_Obj = retTopStringFunction(0)
    val XMLHttpRequest_getResponseHeader_Obj = retTopStringFunction(1)
    val XMLHttpRequest_overrideMimeType_Obj = doNothingFunction(1)
    val XMLHttpRequest_setRequestHeader_Obj = doNothingFunction(2)
    val XMLHttpRequest_sendAsBinary_Obj = networkSend(1)
    val XMLHttpRequest_send_Obj = networkSend(0)

    val __evt_Obj = createInitObj(Map(
      "bubbles" → Bool.inject(Bool.⊤),
      "cancelBubble" → Bool.inject(Bool.⊤),
      "cancelable" → Bool.inject(Bool.⊤),
      "currentTarget" → Address.inject(document_Addr),
      "defaultPrevented" → Bool.inject(Bool.⊤),
      "eventPhase" → Num.inject(Num.⊤),
      "explicitOriginalTarget" → Address.inject(document_Addr),
      "mozInputSource" → Num.inject(Num.⊤),
      "originalTarget" → Address.inject(document_Addr),
      "target" → Address.inject(document_Addr),
      "timeStamp" → Num.inject(Num.⊤),
      "type" → Str.inject(Str.⊤),
      "isTrusted" → Bool.inject(Bool.⊤),
      "initEvent" → Address.inject(__evt_Obj_initEvent_Addr),
      "preventBubble" → Address.inject(__evt_Obj_doNothing_Addr),
      "preventDefault" → Address.inject(__evt_Obj_doNothing_Addr),
      "stopImmediatePropagation" → Address.inject(__evt_Obj_doNothing_Addr),
      "stopPropagation" → Address.inject(__evt_Obj_doNothing_Addr),
      "cancel" →  Address.inject(__evt_Obj_doNothing_Addr),
      "clientX" → Num.inject(Num.⊤),
      // the following are marked as keypresses
      "charCode" → Num.inject(Num.⊤),
      "char" → Str.inject(Str.⊤),
      "key" → Str.inject(Str.⊤),
      "keyCode" → Num.inject(Num.⊤),
      "location" → Num.inject(Num.⊤),
      "which" → Num.inject(Num.⊤)
    ))

    // TODO: lengths may vary, set appropriately
    val __evt_Obj_doNothing_Obj = doNothingFunction(0)
    val __evt_Obj_initEvent_Obj = createInitFunctionObj(Native(
      (selfAddr: BValue, argArrayAddr: BValue, x: Var, ρ: Env, σ: Store, ß:Scratchpad, κ: KStack, τ:Trace) ⇒ {
        makeState(Address.inject(__evt_Addr), x, ρ, σ, ß, κ, τ)
      }), Map("length" → Num.inject(Num.α(3))))
}