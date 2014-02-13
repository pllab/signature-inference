var TopString = (45).toString(12);
var TopNum = Date.now();
var TopBool = !TopNum;

var globalFuncList = [];

var Components = {
  classes: {},
  interfaces: {
    nsIPrefService: {},
    nsIPrefBranch2: {},
    nsILoginManager: {},
    nsILoginInfo: {},
    nsIClipboardHelper: {},
    nsIConsoleService: {},
    nsIStringBundleService: {},
    nsITimer: {
        TYPE_REPEATING_SLACK: TopNum
    },
    nsIWindowMediator: {},
    nsIIOService: {},
    nsICookieManager2: {}
  },
  Constructor: function() {
    return function() {}
  },
  utils: {
    reportError: function() {}
  }
};


document.getElementById =  function() { return document; };
document.addTab =  function() { return document; };
document.getElementsByTagName = function() { 
  var a = [];
  a.push(document);
  a.push(document);
  return a;
};
document.appendChild = function() { return document; };
document.removeChild = function() { return document; };
document.createElement = function() {return document; };
document.createElementNS = function() {return document; };
document.setAttribute = function() {};
document.getAttribute = function() { return TopString; };
document.hasAttribute = function() { return TopBool; };
document.removeAttribute = function() { };
document.addEventListener = function(e, f) {
  globalFuncList.push(f);
};
document.removeEventListener = function() {};
document.getString = function() { return TopString; };
document.getFormattedString = function() { return TopString; };

document.location.href = TopString;
document.location.reload =  function() {};
document.location.hostname =  TopString;
document.location.protocol =  TopString;
document.documentURI = TopString;
document.title = TopString;
document.click = function() {};
document.nodeName = TopString;
document.style = {};
document.className = TopString;
document.nodeValue = TopString;
document.currentSet = TopString;
document.persist = function() {};
document.type = TopString;
document.textContent = TopString;
document.textLength = TopNum;
document.selectionStart = TopNum;
document.selectionEnd = TopNum;
document.value = TopString;


function addEventListener(e, f) {
    globalFuncList.push(f);
}

var __window = {
    document: document,
    getSelection: function() {
        return TopString;
    },
    focus: function() {},
    contentDocument: document,
    window: __window,
    currentURI: {
        asciiSpec: TopString
    }
}

__window.contentWindow = __window;
document.contentWindow = __window;

window.open = function() {
    return __window;
}

window.openDialog = window.open;

document.body = document;
document.parentNode = document;
document.childNodes = [];
document.childNodes.push(document);
document.childNodes.push(document);
document.firstChild = document;
document.ownerDocument = document;
document.popupNode = document;
document.element = document;

document.commandDispatcher = {
    focusedWindow: __window
};
document.documentElement = document;

var gContextMenu = document;
var gBrowser = document;
gBrowser.browsers = [];
gBrowser.browsers.push(document);
gBrowser.getBrowserAtIndex = function() {
    return __window;
}
gBrowser.contentDocument = document;
var ContextHelper = {
  popupNode: document,
  popupState: document
};

var ContextHandler = {
  registerType: function() {}
}

var alert = function() {};
var dump = function() {};
var prompt = function() { return TopString; }
var stop = function() {}
var location = {
    href: TopString
};

var content = {
    document: document
};

var messageManager = {
  addMessageListener: function() {},
  sendAsyncMessage: function() {}
};
var sendAsyncMessage = function() {};
var addMessageListener = function() {};

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

//   this.abort = function() {};
//   this.getAllResponseHeaders = function() { return TopString; };
//   this.getResponseHeader = function(hdr) { return TopString; };
//   this.overrideMimeType = function() {};
//   this.setRequestHeader = function() {};

//   this.sendAsBinary = function(msg) {};

//   this.send = function(msg) {};
// }

var __prefObj = {
  QueryInterface: function() {},
  
  addObserver: function(a, obj, ignore) {
    globalFuncList.push(obj.observe);
  },

  removeObserver: function() {},
  
  getCharPref: function() { return TopString; },

  getIntPref: function() { return TopNum; },

  getBoolPref: function() { return TopBool; },

  setCharPref: function() {},

  setIntPref: function() {},

  prefHasUserValue: function() { return TopBool; }
};

var __evtObj = {
    originalTarget: document,
    cancel: function() {},
    stopPropagation: function() {}
};

Components.classes["@mozilla.org/preferences-service;1"] = {
  getService: function() {
    return {
      getBranch: function() {
        return __prefObj;
      }
    }
  }
}

Components.classes["@mozilla.org/consoleservice;1"] = {
    getService: function() {
        return {
            logStringMessage: function() {}
        }
    }
}

Components.classes["@mozilla.org/intl/stringbundle;1"] = {
    getService: function() {
        return {
            createBundle: function() {}
        }
    }
}

Components.classes["@mozilla.org/timer;1"] = {
    createInstance: function() {
        return {
            initWithCallback: function(evt) {
                globalFuncList.push(evt.notify);
            }
        }
    }
}

Components.classes["@mozilla.org/appshell/window-mediator;1"] = {
    getService: function() {
        return {
            getMostRecentWindow: function() {
                return __window;
            }
        }
    }
}

Components.classes["@mozilla.org/network/io-service;1"] = {
  getService: function() {
    return {
      newURI: function() {
        return {
          host: TopString
        };
      }
    }
  }  
}

Components.classes["@mozilla.org/cookiemanager;1"] = {
  getService: function() {
    return {
      add: function() {}
    }
  }
}

Components.classes["@mozilla.org/moz/jssubscript-loader;1"] = {
  getService: function() {
    return {
      loadSubScript: function() {}
    }
  }
}

window.setInterval = function(fun, time) {
  globalFuncList.push(fun);
  return TopNum;
}

window.clearInterval = function() {};
window.loadURI = function() {};

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.foo.com/");
if (document.popupNode.ownerDocument.location.toString().match(/^about/g)) {
  xhr.send(null);
}

