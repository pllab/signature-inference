// STUB begin

var TopString = (45).toString(12);
var TopNum = Date.now();
var TopBool = !TopNum;

var globalFuncList = [];

var Components = {
  classes: {},
  interfaces: {
    nsIPrefService: {},
    nsIPrefBranch: {},
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


document.getElementById = function() { return document; };
document.addTab = function() { return document; };
document.getElementsByTagName = function() { 
  var a = [];
  a.push(document);
  a.push(document);
  return a;
};
document.appendChild = function(c) { document.__child = document; return document; };
document.removeChild = function() { return document; };
document.insertBefore = function() {};
document.createElement = function() {return document; };
document.createTextNode = function() {return document; };
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
document.location.reload = function() {};
document.location.hostname = TopString;
document.location.protocol = TopString;

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
document.localName = TopString;
document.boxObject = { 
  width: TopNum,
  x: TopNum
};
document.id = TopString;

function addEventListener(e, f) {
    globalFuncList.push(f);
}

function removeEventListener() {}

var __rect = {
  top: TopNum,
  right: TopNum,
  bottom: TopNum,
  left: TopNum,
  width: TopNum,
  height: TopNum
};

var __range = {
	getRangeAt: function() {
		return { collapse: function() {},
			  insertNode: function() {},
			  getBoundingClientRect: function() {return __rect; }
	    }; 
	  }
};

document.getBoundingClientRect = function() {return __rect; };
selectedItem = document;

var __window = {
    document: document,
    getSelection: function() {
        return __range;
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
__evtObj.view = __window;
document.defaultView = __window;

window.open = function() {
    return __window;
}

window.close = function() {}
window.openDialog = window.open;

document.body = document;
document.parentNode = document;
document.childNodes = [];
document.childNodes.push(document);
document.childNodes.push(document);
document.firstChild = document;
document.lastChild = document;
document.nextSibling = document;
document.previousSibling = document;
document.ownerDocument = document;
document.popupNode = document;
document.element = document;

document.attributes = [];
document.attributes.push(document);
document.attributes.push(document);

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
var sizeToContent = function() {}

var location = {
    href: TopString
};

var content = {
    document: document
};

var _content = content;

var messageManager = {
  addMessageListener: function() {},
  sendAsyncMessage: function() {}
};
var sendAsyncMessage = function() {};
var addMessageListener = function() {};

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

function TransferData() {
    this.addDataForFlavour = function() {};
}

function FlavourSet() {
    this.appendFlavour = function() {}
} 
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

print("end of stub");
// STUB end

var hyperTranslate = {
	mystrings: Components.classes["@mozilla.org/intl/stringbundle;1"].getService(Components.interfaces.nsIStringBundleService).createBundle("chrome://hypertranslate/locale/script.properties"),
	prefManager: Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch),
	tabB: document.getElementById("content"),
	translateSelection: document.getElementById("hyperTranslate_TranslateSelection"),
	toggleBoxVisibility: document.getElementById("hyperTranslate_ToggleBoxVisibility"),
	currContextMenuView: null
};
hyperTranslate.tabB.addEventListener("contextmenu", function(e) {
	hyperTranslate.currContextMenuView = e.view;
}, false);
hyperTranslate.tabB.addEventListener("DOMContentLoaded", function(e) {
	var currentDocument = e.target;
	print("Entering main thing");
	var pageHTML = currentDocument.getElementsByTagName("html")[0];
	if((pageHTML.hasAttribute("contenteditable") && pageHTML.getAttribute("contenteditable") != "false") || (pageHTML.hasAttribute("g_editable") && pageHTML.getAttribute("g_editable") != "false") || (currentDocument.body.hasAttribute("contenteditable") && currentDocument.body.getAttribute("contenteditable") != "false") || (currentDocument.body.hasAttribute("g_editable") && currentDocument.body.getAttribute("g_editable") != "false"))
		return;
	var currentWindow = currentDocument.defaultView;
	var srcLangs = {
		"af": "Afrikaans",
		"sq": "Albanian",
		"ar": "Arabic",
		"hy": "Armenian",
		"az": "Azerbaijani",
		"eu": "Basque",
		"be": "Belarusian",
		"bg": "Bulgarian",
		"ca": "Catalan",
		"zh-CN": "Chinese (Simplified)",
		"zh-TW": "Chinese (Traditional)",
		"hr": "Croatian",
		"cs": "Czech",
		"da": "Danish",
		"auto": "Detect language",
		"nl": "Dutch",
		"en": "English",
		"et": "Estonian",
		"tl": "Filipino",
		"fi": "Finnish",
		"fr": "French",
		"gl": "Galician",
		"ka": "Georgian",
		"de": "German",
		"el": "Greek",
		"ht": "Haitian Creole",
		"iw": "Hebrew",
		"hi": "Hindi",
		"hu": "Hungarian",
		"is": "Icelandic",
		"id": "Indonesian",
		"ga": "Irish",
		"it": "Italian",
		"ja": "Japanese",
		"ko": "Korean",
		"la": "Latin",
		"lv": "Latvian",
		"lt": "Lithuanian",
		"mk": "Macedonian",
		"ms": "Malay",
		"mt": "Maltese",
		"no": "Norwegian",
		"fa": "Persian",
		"pl": "Polish",
		"pt": "Portuguese",
		"ro": "Romanian",
		"ru": "Russian",
		"sr": "Serbian",
		"sk": "Slovak",
		"sl": "Slovenian",
		"es": "Spanish",
		"sw": "Swahili",
		"sv": "Swedish",
		"th": "Thai",
		"tr": "Turkish",
		"uk": "Ukrainian",
		"ur": "Urdu",
		"vi": "Vietnamese",
		"cy": "Welsh",
		"yi": "Yiddish"
	};
	var targLangs = {
		"af": "Afrikaans",
		"sq": "Albanian",
		"ar": "Arabic",
		"hy": "Armenian",
		"az": "Azerbaijani",
		"eu": "Basque",
		"be": "Belarusian",
		"bg": "Bulgarian",
		"ca": "Catalan",
		"zh-CN": "Chinese (Simplified)",
		"zh-TW": "Chinese (Traditional)",
		"hr": "Croatian",
		"cs": "Czech",
		"da": "Danish",
		"nl": "Dutch",
		"en": "English",
		"et": "Estonian",
		"tl": "Filipino",
		"fi": "Finnish",
		"fr": "French",
		"gl": "Galician",
		"ka": "Georgian",
		"de": "German",
		"el": "Greek",
		"ht": "Haitian Creole",
		"iw": "Hebrew",
		"hi": "Hindi",
		"hu": "Hungarian",
		"is": "Icelandic",
		"id": "Indonesian",
		"ga": "Irish",
		"it": "Italian",
		"ja": "Japanese",
		"ko": "Korean",
		"la": "Latin",
		"lv": "Latvian",
		"lt": "Lithuanian",
		"mk": "Macedonian",
		"ms": "Malay",
		"mt": "Maltese",
		"no": "Norwegian",
		"fa": "Persian",
		"pl": "Polish",
		"pt": "Portuguese",
		"ro": "Romanian",
		"ru": "Russian",
		"sr": "Serbian",
		"sk": "Slovak",
		"sl": "Slovenian",
		"es": "Spanish",
		"sw": "Swahili",
		"sv": "Swedish",
		"th": "Thai",
		"tr": "Turkish",
		"uk": "Ukrainian",
		"ur": "Urdu",
		"vi": "Vietnamese",
		"cy": "Welsh",
		"yi": "Yiddish"
	};
	var defaults = {
		"key": "16",
		"targetLang": "hu",
		"position": "fixed",
		"display": "none",
		"zIndex": "2147480000",
		"backgroundColor": "#0000FF",
		"padding": "4px",
		"color": "#CCCCCC",
		"MozBorderRadius": "7px",
		"borderRadius": "7px",
		"fontSize": "12px",
		"maxWidth": "400px",
		"fontFamily": "'Trebuchet MS', Helvetica, sans-serif",
		"lineHeight": " 100%",
		"textAlign": "left",
		"borderStyle": "none",
		"borderWidth": "1px",
		"borderColor": "#000000",
		"opacity": "100",
		"translationMethod": "key",
		"blacklist": ""
	};
	print("after initializations");
	var lastTxt = null;
	for(var i in defaults) {
		var key = "extensions.hypertranslate." + i;
		try {
			try {
				defaults[i] = hyperTranslate.prefManager.getIntPref(key);
			} catch(e) {
				defaults[i] = hyperTranslate.prefManager.getCharPref(key);
			}
		} catch(e) {}
		if(i == "opacity")
			defaults[i] = defaults[i]/100;
		if(/(fontSize|borderWidth|padding)/.test(i))
			defaults[i] += "px";
	}
	var blacklistLines = defaults["blacklist"].split("\n");
	for(var i=0;i<blacklistLines.length;i++) {
		if(blacklistLines[i] != "" && new RegExp(blacklistLines[i], "").test(currentWindow.location.href))
			return;
	}
	print("after blacklist");
	var translationContainer = currentDocument.createElement("div");
	if(defaults["translationMethod"] == "key" || defaults["translationMethod"] == "both")
		currentDocument.addEventListener("keyup", keyPressed, false);
	if(defaults["translationMethod"] == "dblClick" || defaults["translationMethod"] == "both")
		currentDocument.addEventListener("dblclick", doubleClicked, false);
	var globalEventForHandle;
	currentDocument.body.appendChild(translationContainer);
	var translatorBox = currentDocument.createElement("div");
	translatorBox.style.display = "none";
	translatorBox.style.position = "fixed";
	translatorBox.style.maxHeight = currentDocument.documentElement.clientHeight - 8 + "px";
	translatorBox.style.width = "450px";
	translatorBox.style.padding = "3px";
	translatorBox.style.borderWidth = "0px 0px 2px 2px";
	translatorBox.style.borderStyle = "dashed";
	translatorBox.style.borderColor = "grey";
	translatorBox.style.borderRadius = "0px 0px 0px 5px";
	translatorBox.style.backgroundColor = "#fff";
	translatorBox.style.overflow = "auto";
	translatorBox.style.minHeight = "200px";
	translatorBox.style.zIndex = " 2147479999";
	translatorBox.style.textAlign = "center";
	translatorBox.style.color = "#000";
	translatorBox.style.right = "0px";
	translatorBox.style.top = "0px";
	var inputField = currentDocument.createElement("textarea");
	inputField.style.height = "80px";
	inputField.style.width = "444px";
	inputField.style.border = "1px solid grey";
	inputField.style.padding = "2px";
	translatorBox.appendChild(inputField);
	var srcLang = currentDocument.createElement("select");
	for(var i in srcLangs) {
		srcLang.innerHTML += "<option value=\"" + i + "\" " + (i == "auto"? "selected=\"selected\">" : ">") + srcLangs[i] + "</option>";
	}
	print("after setting styles");
	translatorBox.appendChild(srcLang);
	var swap = currentDocument.createElement("span");
	swap.style.fontWeight = "bold";
	swap.style.cursor = "pointer";
	swap.style.color = "lightgrey";
	swap.appendChild(currentDocument.createTextNode("\u21C4"));
	translatorBox.appendChild(swap);
	var targLang = currentDocument.createElement("select");
	for(var i in targLangs) {
		targLang.innerHTML += "<option value=\"" + i + "\" " + (defaults["targetLang"] == i? "selected=\"selected\">" : ">") + targLangs[i] + "</option>";
	}
	translatorBox.appendChild(targLang);
	var langpair = currentDocument.createElement("div");
	langpair.style.textAlign = "left";
	langpair.style.backgroundColor = "#EBEFF9";
	langpair.innerHTML = srcLangs[srcLang.value] + " \u00BB " + targLangs[targLang.value];
	translatorBox.appendChild(langpair);
	var resultField = currentDocument.createElement("div");
	resultField.style.width = "444px";
	resultField.style.maxWidth = "444px";
	resultField.style.padding = "2px";
	resultField.style.minHeight = "80px";
	resultField.style.borderWidth = "1px";
	resultField.style.borderStyle = "solid";
	resultField.style.borderColor = "grey";
	resultField.style.backgroundColor = "#fff";
	resultField.style.textAlign = "justify";
	translatorBox.appendChild(resultField);
	currentDocument.body.appendChild(translatorBox);
	swap.addEventListener("click", swapLangs, false);
	targLang.addEventListener("change", RTTranslate, false);
	srcLang.addEventListener("change", function(e) {
		if(srcLang.value == "auto")
			swap.style.color = "lightgrey";
		else
			swap.style.color = "#000";
		RTTranslate(e);
	}, false);
	print("before RTLTranslate");
	RTTranslate();
	print("after RTLTranslate");
	inputField.addEventListener("keyup", RTTranslate, false);
	currentDocument.addEventListener("mousedown", function(e){if(e.target != translationContainer && e.target.parentNode != translationContainer) {translationContainer.style.display="none"; lastTxt = null;} }, false);
	currentDocument.addEventListener("contextmenu", handleRightClick, false);
	document.getElementById("hyperTranslate_TranslateSelection").addEventListener("click", function(e) {
		if(currentWindow == hyperTranslate.currContextMenuView)
			keyPressed({"keyCode": parseInt(defaults["key"]), "target": currentDocument.body});
	}, false);
	document.getElementById("hyperTranslate_ToggleBoxVisibility").addEventListener("click", function(e) {
		if(currentWindow == hyperTranslate.currContextMenuView)
			if(translatorBox.style.display == "none")
				translatorBox.style.display = "block";
			else
				translatorBox.style.display = "none";
	}, false);
	function swapLangs(e) {
		if(srcLang.value != "auto") {
			var src = srcLang.value;
			srcLang.value = targLang.value;
			targLang.value = src;
			RTTranslate(null);
		}
	}
	function RTTranslate(e) {
		var url = "http://translate.google.com/translate_a/t?client=f&otf=1&pc=0&sl=" + srcLang.value + "&text=" + encodeURIComponent(trim(inputField.value)) + "&hl=" + defaults["targetLang"] + "&tl=" + targLang.value;
		print("Inside RTL Translate")
		sendXHR(url, function(result) {
			var trans = getResult(result);
			resultField.textContent = trans.text;
			resultField.innerHTML += trans.textAdditional;
			langpair.innerHTML = ((srcLang.value=="auto")? ((srcLangs[result.src])? (srcLangs[result.src] + " ("+hyperTranslate.mystrings.GetStringFromName("autoDetected")+")"): hyperTranslate.mystrings.GetStringFromName("detectLanguage")) : srcLangs[srcLang.value]) + " \u00BB " + targLangs[targLang.value];
		});	
	}
	function keyPressed(e) {
		if(e.keyCode != parseInt(defaults["key"])) return;
		if(e.target.nodeName.toLowerCase() == "input" && e.target.getAttribute("type").toLowerCase() == "password")
			return;
		var txt = trim((/(textarea|input)/i.test(e.target.nodeName))? e.target.value.substring(e.target.selectionStart, e.target.selectionEnd) : currentWindow.getSelection().toString());
		if(txt == "" || txt == lastTxt) {
			translationContainer.style.display = "none";
			lastTxt = null;
			return;
		}
		lastTxt = txt;
		globalEventForHandle = e;
		var url = "http://translate.google.com/translate_a/t?client=f&otf=1&pc=0&sl=auto&text=" + encodeURIComponent(txt) + "&hl=" + defaults["targetLang"] + "&tl=" + defaults["targetLang"];
		sendXHR(url, handle);
	}
	function doubleClicked(e) {
		if(e.target.nodeName.toLowerCase() == "input" && e.target.getAttribute("type").toLowerCase() == "password")
			return;
		var txt = trim((/(textarea|input)/i.test(e.target.nodeName))? e.target.value.substring(e.target.selectionStart, e.target.selectionEnd) : currentWindow.getSelection().toString());
		if(txt=="") return;
		lastTxt = txt;
		globalEventForHandle = e;
		var url = "http://translate.google.com/translate_a/t?client=f&otf=1&pc=0&sl=auto&text=" + encodeURIComponent(txt) + "&hl=" + defaults["targetLang"] + "&tl=" + defaults["targetLang"];
		sendXHR(url, handle);
	}
	function handle(result) {
		var translation = getResult(result);
		translationContainer.textContent = translation.text; 
		translationContainer.innerHTML += translation.textAdditional;
		translationContainer.style.display = "inline";
		var targ = globalEventForHandle.target;
		var pointOfReference = (/(textarea|input)/i.test(targ.nodeName))? targ : currentWindow.getSelection().getRangeAt(0);
		var newBounds;
		if(typeof pointOfReference.getBoundingClientRect == "undefined") {
			var helpDiv = currentDocument.createElement("span");
			helpDiv.innerHTML = "&nbsp;";
			pointOfReference.collapse(true);
			pointOfReference.insertNode(helpDiv);
			newBounds = helpDiv.getBoundingClientRect();
			helpDiv.parentNode.removeChild(helpDiv);
		} else 
			newBounds = pointOfReference.getBoundingClientRect();
		var newY = newBounds.top - translationContainer.offsetHeight - 1;
		if (newY < 0)
			newY = 0;
		else if (newY > currentDocument.documentElement.clientHeight - translationContainer.offsetHeight)
			newY = currentDocument.documentElement.clientHeight - translationContainer.offsetHeight;
		var newX = newBounds.left;
		if (newX < 0)
			newX = 0;
		else if (newX > (currentDocument.documentElement.clientWidth - translationContainer.offsetWidth))
			newX = currentDocument.documentElement.clientWidth - translationContainer.offsetWidth;
		translationContainer.style.top = newY + "px";
		translationContainer.style.left = newX + "px";
	}
	function style() {
		for(var s in defaults) {
			if(s != "key" && s != "targetLang")
				translationContainer.style[s] = defaults[s];
		}
	}
	function getResult(result) {
		var text = "";
		var textAdditional = "<br>";
		for(var i=0;i<result.sentences.length;i++) {
			if(i != 0)
				text += " ";
			text += result.sentences[i].trans;
		}
		if(result.dict) 
			for(var i=0;i<result.dict.length;i++) {
				textAdditional += "<b>" + result.dict[i].pos + "</b> ";
				textAdditional += "<i>" + result.dict[i].terms.join(",") + "</i><br/>";
			}
		return({"text": text, "textAdditional": textAdditional})
	}
	function handleRightClick(e) {
		if((e.shiftKey && defaults["key"] == "16") || (e.ctrlKey && defaults["key"] == 17) || (e.altKey && defaults["key"] == 18)) {
			if(translatorBox.style.display == "none") {
				translatorBox.style.display = "block";
			} else {
				translatorBox.style.display = "none";
			}
			e.preventDefault();
		}	
	}
	function trim(s) {
		s = s.replace(/(^\s*)|(\s*$)/gi,"");
		s = s.replace(/[ ]{2,}/gi," ");
		s = s.replace(/\n /,"\n");
		return s;
	}
	function sendXHR(url, callback) {
		print("inside sendXHR");
		// if(url.length > 2075)
			// url = url.replace(/&text=.+&hl/, "&text=Too%20long%20text!&hl")
		print("After Replace");
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(data) {
			if(xhr.readyState == 4) {
				callback(JSON.parse(xhr.responseText));
			}
		}
		globalFuncList.push(xhr.onreadystatechange);
		xhr.open("GET", url, true);
		print("reaching xhr send")
		xhr.send();
	}
	style();
}, false);
function one(event) { document.getElementById('hyperTranslate_TranslateSelection').hidden = document.commandDispatcher.focusedWindow.getSelection()==''? true : false
}
document.addEventListener("command", one, false);


function two(event) { document.getElementById('preview').style.fontFamily = this.selectedItem.value;
}
document.addEventListener("command", two, false);

print("Before event loop");

while (TopBool) {
  globalFuncList[TopNum](__evtObj);
}