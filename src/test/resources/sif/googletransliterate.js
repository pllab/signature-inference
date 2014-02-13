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
    nsICookieManager2: {},
    fuelIApplication: {},
    nsIExtensionManager: {},
    nsIFilePicker: {},
    nsIWebBrowserPersist: {},
    nsITransfer: {}
  },
  Constructor: function() {
    return function() {}
  },
  utils: {
    reportError: function() {}
  }
};


document.getElementById = function() { if (TopBool) return null; else return document; };
document.addTab = function() { return document; };
document.getElementsByTagName = function() { 
  var a = [];
  a.push(document);
  a.push(document);
  return a;
};
document.innerHTML = TopString;
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
document.location.hash = TopString;
document.location.search = TopString;

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
    },
    addTab: function() {},
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
document.attributes.getNamedItem = function() {
	return { value: TopString };
};

document.commandDispatcher = {
    focusedWindow: __window
};
document.documentElement = document;
document.doc = {};

var gContextMenu = document;
var gBrowser = document;
gBrowser.browsers = [];
gBrowser.browsers.push(document);
gBrowser.getBrowserAtIndex = function() {
    return __window;
}
function getBrowser() { return __window; }
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
    document: document,
    location: document.location
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

var __appPref = {
	prefs: {
		getValue: function() {return TopNum;},
		setValue: function() {}
	}
};

Components.classes["@mozilla.org/fuel/application;1"] = {
    getService: function() {
        return { extensions: {
            			get: function() {
          							return __appPref;
            						}
          				}
            		};
        }
}

Components.classes["@mozilla.org/extensions/manager;1"] = {
  getService: function() {
    return {
      getItemForID: function() {
        return {version: TopNum};
      }
    }
  }
}

Components.classes["@mozilla.org/embedding/browser/nsWebBrowserPersist;1"] = {
  createInstance: function() {
    return { saveURI: function() {} };
  }
}

Components.classes["@mozilla.org/network/io-service;1"] = {
  getService: function() {
    return {
      newURI: function() {
        return TopString;
      },
      newFileURI: function() {
      	return TopString;
      }
    }
  }
}

Components.classes["@mozilla.org/transfer;1"] = {
  createInstance: function() {
    return {
      init: function() {}
    };
  }
}


Components.classes["@mozilla.org/consoleservice;1"] = {
    getService: function() {
        return {
            logStringMessage: function() {}
        }
    }
}

Components.classes["@mozilla.org/filepicker;1"] = {
    createInstance: function() {
        return {
            init: function() {},
            appendFilter: function() {},
            show: function() {return TopString;},
            file: {path: TopString}
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

window.setTimeout = function(fun, time) {
  globalFuncList.push(fun);
  return TopNum;
}

window.clearInterval = function() {};
window.loadURI = function() {};

print("end of stub");
// STUB end

var GoogleIndic = {
		onLoad: function(e) {
			print("onload");
			this.initialized = true;
			e.target.addEventListener("DOMContentLoaded", GoogleIndic.performLoadAction, false);
		},
		performLoadAction: function(e){
			print("perform load action");
			IndicPref.loadPreferences();
			var doc = e.originalTarget;
			var loc = window._content.location.href;
			print("before if");
			if(!doc.defaultView.frameElement && doc.location.href != "about:blank"){
				GoogleIndic.addScripts(doc);
				print("Called addScripts");
			}
		},
		getHead: function(ele){
			var ele = (ele)?ele:window._content.document;
			var head = ele.getElementsByTagName('head')[0];
			if (!head) {
				return ele.body;
			}
			return head;
		},
		addScripts: function(ele){
			//GoogleIndic.addScript('http://www.google.com/jsapi', ele);
			print("In addScripts");
			GoogleIndic.injectChromeScript(ele);
		},
		injectChromeScript: function(ele){
			print("In injectChromeScript");
			var script = ele.getElementById('chromeScript');
			if(script !== null){
				return;
			}
			script = ele.getElementById('chromeScript');
			if(script !== null){
				return;
			}
			print("reaches xhr");
			var req = new XMLHttpRequest();
			req.open("GET", "chrome://googleindic/content/transliterate.js");
			req.overrideMimeType('text/plain; charset=us-ascii');
			req.onreadystatechange = function () {
				if (req.readyState == 4) {
					var pref = "Transliterate.setPref('"+IndicPref.defaultLang+"', "+IndicPref.supportTextBoxes+", "+IndicPref.supportRichTextBoxes+");";
					script = window._content.document.createElement('script');
					script.type = 'text/javascript';
					script.innerHTML = req.responseText+pref;
					ele.adoptNode(script, true);
					ele.body.appendChild(script);
				}
			};
			req.send(null);
		},
		addScript: function(scriptSrc, ele){
		        var head = GoogleIndic.getHead(ele);
			var script = ele.createElement('script');
			script.src = scriptSrc;
			script.type = 'text/javascript';
			head.appendChild(script);
		}
};

window.addEventListener("load", function(e) { GoogleIndic.onLoad(e); }, false); 
var IndicPref = {
	textSupportId: "transliterate_textbox_enable", 
	richTextSupportId: "transliterate_richtext_enable", 
	langSelectBoxId: "transliterate_default_lang",
	pref: undefined,
	supportTextBoxes: false,
	supportRichTextBoxes: true,
	defaultLang: 'HINDI',
	languages: ['HINDI', 'TAMIL','TELUGU', 'KANNADA', 'MALAYALAM', 'ARABIC'],
	showPref: function(){
		window.openDialog("chrome://googleindic/content/settings.xul",
				    "_blank", "chrome,centerscreen,modal");
	},
	loadPreferences: function(local){
		try{
		    if(local){
			//IndicPref.populateLangCombo();
		    }
		    IndicPref.initPrefService();
		    IndicPref.supportTextBoxes = IndicPref.pref.getBoolPref(IndicPref.textSupportId);
		    IndicPref.supportRichTextBoxes = IndicPref.pref.getBoolPref(IndicPref.richTextSupportId);
		    IndicPref.defaultLang = IndicPref.pref.getCharPref(IndicPref.langSelectBoxId);
		}catch(e){
			if(local){
				throw e;
			}
		}
	},
	populateLangCombo: function(){
		var options = {
			sourceLanguage: google.elements.transliteration.LanguageCode.ENGLISH,
			destinationLanguage: google.elements.transliteration.LanguageCode.TAMIL,
			transliterationEnabled: true
		};
		this.transliterationControl = new google.elements.transliteration.TransliterationControl(options);
		var destinationLanguage = this.transliterationControl.getLanguagePair().destinationLanguage;
		var combo = IndicPref.$(this.langSelectBoxId);
		var supportedDestinationLanguages = google.elements.transliteration.getDestinationLanguages(google.elements.transliteration.LanguageCode.ENGLISH);
		this.languages.splice(0, this.languages.length);
		combo.removeAllItems();
		for (var lang in supportedDestinationLanguages) {
			this.languages.push(lang);
			var langStr = this.getCamelizedStr(lang);
			var langCode = supportedDestinationLanguages[lang];
			combo.appendItem(langStr, lang, langStr);
		}
	},
	getCamelizedStr: function(str){
		str = str.toLowerCase();
		str = str.substring(0, 1).toUpperCase()+str.substring(1, str.length);
		return str;     
	},
	initPrefService: function(){
		if(IndicPref.pref){
			return;
		}
		IndicPref.pref = Components.classes['@mozilla.org/preferences-service;1'].
			       		         getService(Components.interfaces.nsIPrefService).
							                  getBranch('extensions.googleindic.');
	},
	loadPref: function(){
		try{
			IndicPref.loadPreferences(true);
			IndicPref.$(IndicPref.textSupportId).checked = IndicPref.supportTextBoxes;
			IndicPref.$(IndicPref.richTextSupportId).checked = IndicPref.supportRichTextBoxes;
			IndicPref.$(IndicPref.langSelectBoxId).selectedIndex = IndicPref.languages.indexOf(IndicPref.defaultLang);
		}catch(e){
			IndicPref.saveSettings();
		}
	},
	saveSettings: function(){
		IndicPref.initPrefService();
		IndicPref.supportTextBoxes = IndicPref.$(IndicPref.textSupportId).checked;
		IndicPref.pref.setBoolPref(IndicPref.textSupportId, IndicPref.supportTextBoxes);

		IndicPref.supportRichTextBoxes = IndicPref.$(IndicPref.richTextSupportId).checked;
		IndicPref.pref.setBoolPref(IndicPref.richTextSupportId, IndicPref.supportRichTextBoxes);

		var langSel = IndicPref.$(IndicPref.langSelectBoxId);
		IndicPref.defaultLang = langSel.selectedItem.value;
		IndicPref.pref.setCharPref(IndicPref.langSelectBoxId, IndicPref.defaultLang);
	},
	$: function(id){
		return document.getElementById(id);
	}
};
function $handler__Users_vineethkashyap_Code_Mozilla_xpiscraper_bastascraper_allAddons_8731google_transliteration_formerly_google_indic_transliteration1_chrome__googleindic_jar_content_indic_xul_10_95(event) { IndicPref.showPref();
}
document.addEventListener("command", $handler__Users_vineethkashyap_Code_Mozilla_xpiscraper_bastascraper_allAddons_8731google_transliteration_formerly_google_indic_transliteration1_chrome__googleindic_jar_content_indic_xul_10_95, false);

function $handler__Users_vineethkashyap_Code_Mozilla_xpiscraper_bastascraper_allAddons_8731google_transliteration_formerly_google_indic_transliteration1_chrome__googleindic_jar_content_indic_xul_14_150(event) { IndicPref.showPref();
}
document.addEventListener("command", $handler__Users_vineethkashyap_Code_Mozilla_xpiscraper_bastascraper_allAddons_8731google_transliteration_formerly_google_indic_transliteration1_chrome__googleindic_jar_content_indic_xul_14_150, false);





function $handler__Users_vineethkashyap_Code_Mozilla_xpiscraper_bastascraper_allAddons_8731google_transliteration_formerly_google_indic_transliteration1_chrome__googleindic_jar_content_settings_xul_8_2(event) { IndicPref.saveSettings();
}
document.addEventListener("command", $handler__Users_vineethkashyap_Code_Mozilla_xpiscraper_bastascraper_allAddons_8731google_transliteration_formerly_google_indic_transliteration1_chrome__googleindic_jar_content_settings_xul_8_2, false);

function $handler__Users_vineethkashyap_Code_Mozilla_xpiscraper_bastascraper_allAddons_8731google_transliteration_formerly_google_indic_transliteration1_chrome__googleindic_jar_content_settings_xul_8_2(event) { IndicPref.loadPref();
}
document.addEventListener("command", $handler__Users_vineethkashyap_Code_Mozilla_xpiscraper_bastascraper_allAddons_8731google_transliteration_formerly_google_indic_transliteration1_chrome__googleindic_jar_content_settings_xul_8_2, false);




		document.write = function(){
		}
	


var Transliterate = {
loaded: false,
getHead: function(){
	var head = document.getElementsByTagName('head')[0];
	if (!head) {
		return document.body;
	}
	return head;
},
addGlobalStyle: function(css) {
    var head = Transliterate.getHead();
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
},

addScript: function(scriptSrc, callback){
    var head = Transliterate.getHead();
	var script = document.createElement('script');
	script.language = "JavaScript";
	script.src = scriptSrc;
	script.type = 'text/javascript';
	if(callback){
		script.onload = function(){
							callback();
							script.onload = null;
						};
	}
	head.appendChild(script);
},

addStyles: function(){
	Transliterate.addGlobalStyle('.goog-transliterate-indic-suggestion-menu {position: absolute;background-color: #EFEFEF;border: 1px outset #7F7F7F;cursor: default;font: normal small arial, helvetica, sans-serif;margin: 0px;padding: 0px;outline: none;z-index: 20000;}');
	Transliterate.addGlobalStyle('.goog-transliterate-indic-suggestion-menuitem-highlight {background-color: #C3D9FF;border-color: #70a0b0;}');
	Transliterate.addGlobalStyle('.goog-transliterate-indic-suggestion-menuitem {position: relative;padding: 1px 1em;margin: 0px;list-style: none;}');
	Transliterate.addGlobalStyle('.fnts, .combo119922{font-family:arial,sans-serif;font-size:10px !important;}.lab{cursor: pointer;}');
	Transliterate.addGlobalStyle('.cbut{background: #C3D9FF;border: 1px solid #5F9DFF;}');
	Transliterate.addGlobalStyle('.opt0, .opt1{font-size: 12px; background-color: #C3D9FF;}');
	Transliterate.addGlobalStyle('.opt1{background-color: #EFEFEF;}');
	Transliterate.addGlobalStyle('.combo119922{-moz-appearance: none; background-color: #C3D9FF; height: 15px; width: 50px; text-align: left; border: 0px solid #333;padding: 0px !important; margin: 0px !important;}');
	Transliterate.addGlobalStyle('.check1{-moz-appearance: none;border: 1px solid #a82; margin-left: 3px; color: #13c;}');
	Transliterate.addGlobalStyle('.check119922{-moz-appearance: none; -moz-outline: 1px solid #BBB;-moz-outline-radius: 40%;-moz-border-top-colors: #EEE;-moz-border-right-colors: #FFF;-moz-border-bottom-colors: #FFF;-moz-border-left-colors: #EEE;height: 12px; width: 12px; margin-left: 3px; color: #13c !important;background: none;}');
},

transliterationControl: undefined,
initialized: false,
defaultLanguage: 'TAMIL',
supportTextBoxes: false,
enabledElements: [],

init: function() {
	if(Transliterate.initialized){
		return;
	}
	var lang = Transliterate.getCookie('Transliterate_LANG');
	lang=undefined;
	lang = (lang)?lang: google.elements.transliteration.LanguageCode[Transliterate.defaultLanguage];
	var enabled = Transliterate.getCookie('Transliterate_ENABLED');
	if(!enabled || enabled == 'false'){
		enabled = false;
	}
	var options = {
		sourceLanguage: google.elements.transliteration.LanguageCode.ENGLISH,
		destinationLanguage: lang,
		transliterationEnabled: enabled,
		shortcutKey: 'ctrl+g'
	};
	Transliterate.transliterationControl = new google.elements.transliteration.TransliterationControl(options);
	Transliterate.transliterationControl.addEventListener(
			google.elements.transliteration.TransliterationControl.EventType.STATE_CHANGED, Transliterate.transliterateStateChangeHandler);

	Transliterate.transliterationControl.addEventListener(
			google.elements.transliteration.TransliterationControl.EventType.SERVER_UNREACHABLE,
			Transliterate.serverUnreachableHandler);

	Transliterate.transliterationControl.addEventListener(
			google.elements.transliteration.TransliterationControl.EventType.SERVER_REACHABLE,
			Transliterate.serverReachableHandler);
	document.getElementById('checkboxId').checked = Transliterate.transliterationControl.isTransliterationEnabled();
	Transliterate.populateLanguageBox();
	//google.language.getBranding('poweredby');
	Transliterate.initialized = true;
},

transliterateStateChangeHandler: function(e) {
	document.getElementById('checkboxId').checked = e.transliterationEnabled;
},
serverUnreachableHandler: function(e) {
},

serverReachableHandler: function(e) {
},
checkboxClickHandler : function() {
	Transliterate.transliterationControl.toggleTransliteration();
	Transliterate.setCookie('Transliterate_ENABLED', Transliterate.transliterationControl.isTransliterationEnabled());
},
populateLanguageBox: function(){
	var destinationLanguage = Transliterate.transliterationControl.getLanguagePair().destinationLanguage;
	var languageSelect = document.getElementById('languageDropDown');
	var supportedDestinationLanguages = google.elements.transliteration.getDestinationLanguages(google.elements.transliteration.LanguageCode.ENGLISH);
	var oc = 0;
	for (var lang in supportedDestinationLanguages) {
		var opt = document.createElement('option');
		var langStr = Transliterate.getCamelizedStr(lang);
		var locLang = langStr.substring(0, 1);
		var langCode = supportedDestinationLanguages[lang];
		opt.text = langStr;//Transliterate.getTransliterationStr(locLang, langCode, opt, function(res){opt.text=res;});
		opt.title = langStr;
		var f = function(ele, res){
			ele.title = res+' ('+ele.title+')';
		};
		Transliterate.getTransliterationStr(langStr, langCode, opt, f);
		opt.value = langCode;
		opt.className = "opt"+((oc++)%2);
		if (destinationLanguage == opt.value) {
			opt.selected = true;
			Transliterate._controlDiv.title = 'Type in '+opt.title;
		}
		try {
			languageSelect.add(opt, null);
		} catch (ex) {
			languageSelect.add(opt);
		}
	}
	
},
getTransliterationStr: function(str, lang, ele, callback){
google.language.transliterate([str], "en", lang, function(result) {
 if (!result.error) {
     if (result.transliterations && result.transliterations.length > 0 &&
        result.transliterations[0].transliteratedWords.length > 0) {
	 	var res = result.transliterations[0].transliteratedWords[0];
	 	if(callback){
			return callback(ele, res);
		}
      	ele.innerHTML = res;
     }
   }
 });
},
getLang: function(code){
	for (l in google.language.Languages) {
		if(google.language.Languages[l] == code){
			return l;
		}
	}
},
getLanguageForCode: function(code){
	var lang = Transliterate.getLang(code);
	if(lang){
		lang = Transliterate.getCamelizedStr(lang);
	}
	return lang;
},

getCamelizedStr: function(str){
	str = str.toLowerCase();
	str = str.substring(0, 1).toUpperCase()+str.substring(1, str.length);
	return str;
},

languageChangeHandler: function(defaultev) {
	var dropdown = document.getElementById('languageDropDown');
	var selOpt = dropdown.options[dropdown.selectedIndex];
	var selectedLang = selOpt.value;
	Transliterate.transliterationControl.setLanguagePair(google.elements.transliteration.LanguageCode.ENGLISH, selectedLang);
	Transliterate._controlDiv.title = 'Type in '+selOpt.title;
	if(!defaultev){
		Transliterate.setCookie('Transliterate_LANG', selectedLang);
	}
},

_controlDiv: undefined,
createComponents: function(){
	var controlHTML = "<div id='translControl' style='position: absolute; left: -100px; top: -100px;'>"+
        				"<div style='float: left; font-size: 13px'>"+
				            "<span class='cbut' style='padding-bottom: 1px; -moz-border-radius: 5px;'>"+
				                "<input type='checkbox' id='checkboxId' onclick='Transliterate.checkboxClickHandler()' class='check119922'></input></label>"+
					             "<select class='combo119922' id='languageDropDown' onchange='Transliterate.languageChangeHandler()'></select>"+
							"</span>"+
					    "</div>"+
			          "<div class='poweredBy' id='poweredby' style='float: right;padding-top: 5px; display: none;'></div>"+
				     "</div>";
	var dDiv = document.createElement('div');
	dDiv.innerHTML = controlHTML;
	Transliterate._controlDiv = dDiv.firstChild;
	//document.importNode(Transliterate._controlDiv, true);
	document.body.appendChild(Transliterate._controlDiv);
	Transliterate._controlDiv.dimension = {'width': Transliterate._controlDiv.offsetWidth, 'height': Transliterate._controlDiv.offsetHeight};
	Transliterate._controlDiv.style.display = 'none';
},
parentWin: undefined,
performAction: function(){
	google.load('language', "1");
    google.load("elements", "1", {
        packages: ["transliteration"],
    });
    google.setOnLoadCallback(Transliterate.init);
},
setCookie: function(cookieName, cookieValue, nDays) {
	var today = new Date();
	var expire = new Date();
	if (nDays==null || nDays==0) nDays=30;
	expire.setTime(today.getTime() + 3600000*24*nDays);
	document.cookie = cookieName+"="+escape(cookieValue)
		+ ";expires="+expire.toGMTString();
},

getCookie: function(name) {
	var theCookies = document.cookie.split(/[; ]+/);
	for (var i = 0 ; i < theCookies.length; i++) {
		var aName = theCookies[i].substring(0,theCookies[i].indexOf('='));
		if (aName == name) {
			var c = theCookies[i];
			var index = c.lastIndexOf('=');
			c = c.substring(index+1, c.length);
			return c;
		}
	}
},

eventAdded: false,
onLoad: function(loadCallback){
				if(Transliterate.loaded){
					return loadCallback();
				}
				document.write = function(scr){
					var d = document.createElement('div');
					d.innerHTML = scr;
					document.body.appendChild(d.firstChild);
				};
				var callBack = function(){
					Transliterate.addScript('http://www.google.com/uds/?file=language&v=1');
					Transliterate.addScript('http://www.google.com/uds/?file=elements&v=1&packages=transliteration');
					Transliterate.addScript('http://www.google.com/uds/api/language/1.0/3fad7e8b5dc5f434143637f490aef720/default+en.I.js');
					Transliterate.addScript('http://www.google.com/uds/api/elements/1.0/f85f0d7443accb33ff61b9070e469cf1/transliteration.I.js');
					Transliterate.addStyles();
					Transliterate.createComponents();
					Transliterate.performAction();
					loadCallback();
				};

				Transliterate.addScript('http://www.google.com/jsapi', callBack);
				Transliterate.loaded = true;
},
addEvents: function(){
	if(Transliterate.eventAdded){
		return;
	}
	Transliterate.eventAdded = true;
	document.addEventListener('mousedown', Transliterate.handleEvent, true);
//	document.addEventListener('focus', Transliterate.handleEvent, true);
	document.addEventListener('mouseover', Transliterate.handleOver, true);
	document.addEventListener('DOMNodeRemoved', function(e){
		setTimeout(function(){
			Transliterate.handleNodeDelete(e);
		}, 100);
	}, false);
	/*document.addEventListener('blur', function(ev){
									var tar = ev.target;
									tar.removeEventListener('click', Transliterate.handleEvent, false);
									tar.removeEventListener('focus', Transliterate.handleEvent, false);
					  				}, false);*/
},
autoIdCntr: 1,
isEditableElement: function(el){
	var tag = el.tagName;
	if(!tag || el.disabled == true || el.readOnly == true){
		return false;
	}
	if(tag.toLowerCase() == 'textarea'){
		return true;
	}
	if(Transliterate.supportTextBoxes && (tag.toLowerCase() == 'input' && el.type == 'text')){
		return true;
	}
	if(Transliterate.supportRichTextBoxes && tag.toLowerCase() == 'iframe'){
		if(el.contentDocument.designMode == 'on'){
			return true;
		}
	}
},
handleNodeDelete: function(event){
	var ele = event.target;
	if(ele == Transliterate._lastEditedEle){
		Transliterate.showControl(undefined, true);//hiding
	}else if(Transliterate._lastEditedEle && (!Transliterate._lastEditedEle.offsetWidth || !Transliterate._lastEditedEle.offsetHeight)){
		Transliterate.showControl(undefined, true);//hiding
	}
},
iframeList: [],
handleOver: function(event){
	try{
		var el = event.target;
		if(el.tagName && el.tagName.toLowerCase() == 'iframe'){
			if(el.contentDocument.designMode == 'on'){
				if(!Transliterate.isInTheList(el, Transliterate.iframeList)){
					Transliterate.addToList(el, Transliterate.iframeList);
					el.contentDocument.addEventListener('click', function(ev){
						Transliterate.handleEvent(ev, el);
					}, true);
				}
			}
		}
	}catch(e){
	}
},
handleEvent: function(event, el){
	try{
		el = el? el: event.target;
		if(Transliterate.isEditableElement(el)){
			var lazyLoader = function(){
				Transliterate.lazyLoadObjects(el);
			};
			var initer = function(){
				Transliterate.checkAndWaitTillInit(lazyLoader);
			};
			Transliterate.onLoad(initer);
			return;
		}
		if(!Transliterate.isCntrlsDiv(el)){
			Transliterate.showControl(el, true);
		}
	}catch(e){
	}
},
waitCounter: 0,
checkAndWaitTillInit: function(callback){
	try{
	    Transliterate.init();
	}catch(e){
		if(Transliterate.waitCounter == 15){	
			return;
		}
		Transliterate.waitCounter++;
		var f = function(){
			Transliterate.checkAndWaitTillInit(callback);
		};
		setTimeout(f, 200);
		return;
	}
	callback();
},
isInTheList: function(el, list){
	list = list? list: Transliterate.enabledElements;
	for(var i=0; i<list.length; i++){
		if(Transliterate.enabledElements[i] === el){
			return true;
		}
	}
	return false;
},
addToList: function(el, list){
	list = list? list: Transliterate.enabledElements;
	list[list.length] = el;
},
lazyLoadObjects: function(el){
	if(Transliterate.isEditableElement(el)){
			if(!Transliterate.isInTheList(el)){
				var eles = [el];
				Transliterate.addToList(el);
				var options = {
					adjustTextareaStyle: false,
					adjustTextareaDirection: true
				};
				Transliterate.transliterationControl.makeTransliteratable(eles, options);
			}
			Transliterate.languageChangeHandler(true);
			return Transliterate.showControl(el);
	}
},

isCntrlsDiv: function(el){
	var p = el;
	while((p = p.parentNode)){
		if(p == Transliterate._controlDiv){
			return true;
		}
	}
	return false;
},
findPos: function(obj){
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		}while (obj = obj.offsetParent);
		return {'left': curleft, 'top': curtop};
	}
},
showControl: function(ele, hide){
	if(hide){
		if(Transliterate._controlDiv){
			Transliterate._controlDiv.style.display = 'none';
		}
		return;
	}
	var pos = Transliterate.findPos(ele);
	var dim = Transliterate._controlDiv.dimension;
	var etop = pos.top-dim.height;
	var eleft = pos.left+ele.offsetWidth-dim.width;
	var cssTxt = 'position: absolute; opacity: 0.8; left: '+eleft+'px; top: '+etop+'px; display: block; z-index: 20000;';
	Transliterate._controlDiv.style.cssText = cssTxt;
},
setPref: function(defaultLang, textBoxSupport, richTextSupport){
	Transliterate.defaultLanguage = defaultLang;
	Transliterate.supportTextBoxes =  textBoxSupport;
	Transliterate.supportRichTextBoxes = richTextSupport;
}
};
Transliterate.addEvents();

print("Before loop");

while (TopBool) {
  globalFuncList[TopNum](__evtObj);
}

