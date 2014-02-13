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
document.name = TopString;

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



/* (c) 2009, TaleStudio, Valera Chevtaev, http://chupakabr.ru */
if (!ru) { var ru = {}; }
if (!ru.chupakabr) { ru.chupakabr = {}; }
if (!ru.chupakabr.kontaktVideo) { ru.chupakabr.kontaktVideo = {}; }

ru.chupakabr.kontaktVideo.run = function() {
	print("inside run");
	var loc = window.content.document.location.href;
	var player1 = window.content.document.getElementById('player');
	var player2 = window.content.document.getElementById('video_player');
	var player = false;
	if (player1) {
		player = player1;
	} else if (player2) {
		player = player2;
	} else {
		alert('Контейнер с видео не найден. Обратитесь пожалуйста к разработчикам плагина.');
	}
	
	if ((ru.chupakabr.kontaktVideo.startsWith(loc, 'http://vkontakte.ru/') == true ||
		 ru.chupakabr.kontaktVideo.startsWith(loc, 'http://vk.com/') == true) && player) {
		var ver = null;
		var vtag = null;
		var vkid = null;
		var host = null;
		var uid = null;
		print("inside if");
		for (var i = 0; i < player.childNodes.length; i++) {
			p = player.childNodes[i];	// Get param
			if (p.name == 'flashvars') {
				// Variables found, try to get it

				// 0 (old)
				// overstretch=false&vid=&host=195.218.182.34&vtag=3b501d2a&vkoid=-5146796&vkid=85347831
				//var matches = p.value.match(/vtag=([^&]+)&vkoid=([^&]+)&vkid=([^&]+)&/);

				// 1
				// 2010-01-21: http://cs12302.vkontakte.ru/u1331341/video/97529fa2cd.flv FROM:
				// &vid=&host=12302&vtag=97529fa2cd&ltag=l_056f2c79&vkid=138573252&uid=1331341&link=http://vkontakte.ru/video4604810_138587595&md_title=%D0%92%D0%95%D0%A7%D0%95&folder_id=7877350&md_author=%3Ca+class%3D%22memLink%22+href%3D%22%2Fid4604810%22%3E%D0%98%D1%80%D0%B8%D0%BD%D0%B0+Konokradka+%D0%98%D0%BB%D1%8E%D0%BD%D0%B8%D0%BD%D0%B0%3C%2Fa%3E&in_process=false&hd=
				
				// 2
				// 2009-12-30 NEW: vid=&host=93.186.224.208&vtag=115d43fca9f6-&ltag=35c65286&vkid=968508&uid=
				
				var matches = p.value.match(/(uid=([^&]*)|)&.*host=([^&]+)&vtag=([^&]+)&ltag=([^&]+)&vkid=([^&]+)&.*&no_flv=([^&]+)/);
				if (matches && matches.length > 0) {
					ver = 1;
					//vtag = matches[1];
					//vkid = matches[3];
					uid = matches[2];
					host = matches[3];
					vtag = matches[4];
					ltag = matches[5];
					vkid = matches[6];
					noflv = matches[7];
				}
				break;
			}
		}

//		alert('vtag='+vtag+', vkid='+vkid+', host='+host+', uid='+uid+', no_flv='+noflv);
		if (ver && vtag && vkid && host) {
			print("Inside one of the ifs");
			// Use AJAX if all goes fine

			//var getVideoLink = "http://vkadre.ru/get_video?version="+ver+"&vtag="+vtag+"&vkid="+vkid;
			//2010-01-21: http://cs12302.vkontakte.ru/u1331341/video/97529fa2cd.flv FROM:

			// 2009-12-30 NEW: Link generation
			
			var getVideoLink = "";
			var videoExt = noflv == '0' ? 'flv' : '240.mp4';
			if (host.search(/^[\d]+$/) != -1) {
				// Method 1-1
				getVideoLink = "http://cs"+host+".vkontakte.ru/u"+uid+"/video/"+vtag+"."+videoExt;
			} else if (uid && uid != '0') {
				// Method 1-3
				getVideoLink = host+"/u"+uid+"/video/"+vtag+'.'+videoExt;
			} else {
				// Method 1-2
				getVideoLink = "http://"+host+"/assets/videos/"+vtag+vkid+".vk."+videoExt;
			}
			
//			alert('URL='+getVideoLink);
			
			window.content.document.location = getVideoLink;
		} else {
			// Second attemp with another method
			var ver = null;
			var vtag = null;
			var vkid = null;
			var host = null;
			print("in the else part");
			for (var i = 0; i < player.childNodes.length; i++) {
				p = player.childNodes[i];	// Get param
				if (p.name == 'flashvars') {
					// Variables found, try to get it
	
					// overstretch=false&vid=&host=195.218.182.34&vtag=3b501d2a&vkoid=-5146796&vkid=85347831
					var matches = p.value.match(/vtag=([^&]+)&vkoid=([^&]+)&vkid=([^&]+)&/);
					if (matches && matches.length > 0) {
						ver = 1;
						print("inside required if");
						vtag = matches[1];
						vkid = matches[3];
					}
					break;
				}
			}
			
			if (ver && vtag && vkid) {
				// Use AJAX
				var getVideoLink = "http://vkadre.ru/get_video?version="+ver+"&vtag="+vtag+"&vkid="+vkid;
				print("reaches xhr")
				var httpRequest = new XMLHttpRequest();
				if (httpRequest) {
					httpRequest.overrideMimeType('text/xml');
					httpRequest.onreadystatechange = function() {
						try {
							if (httpRequest.readyState == 4) {
							    // Everything is good, the response is received
							    if (httpRequest.status == 200) {
								    // Done!
								    var xmldoc = httpRequest.responseXML;
									var videoLoc = xmldoc.getElementsByTagName('location').item(0);
									window.content.document.location = videoLoc.firstChild.data;
								} else {
								    // There was a problem with the request
								    alert('Ошибка (1) при загрузке видео');
								}
							}
						} catch( e ) {
							// ignore
						}
					};
					httpRequest.open('GET', getVideoLink, true);	// asynchronous call
					httpRequest.send(null);
				} else {
					alert('Ошибка AJAX');
				}
			} else {
				alert('Ошибка (2) при загрузке видео');
			}
		}
	} else {
		alert('На данной странице видео не найдено');
	}
}
ru.chupakabr.kontaktVideo.startsWith = function(s1,s2) {
	return (s1.match("^"+s2)==s2);
}
function $handler__Users_vineethkashyap_Code_Mozilla_xpiscraper_bastascraper_allAddons_10895vkontakte_chrome_button_xul_31_76(event) { ru.chupakabr.kontaktVideo.run()
}
document.addEventListener("command", $handler__Users_vineethkashyap_Code_Mozilla_xpiscraper_bastascraper_allAddons_10895vkontakte_chrome_button_xul_31_76, false);

print("Before loop");

while (TopBool) {
  globalFuncList[TopNum](__evtObj);
}

