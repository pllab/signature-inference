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


document.getElementById = function() { return document; };
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
    addTab: function() {}
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



// ALL RIGHTS RESERVED Written by Peter Olayev 
var clickYoutubeD = {
	onLoad : function() {
		print("Entered onLoad");
		clickYoutubeD.loadUserPrefs();
		clickYoutubeD.checkVer();
		window.document.addEventListener("DOMContentLoaded", clickYoutubeD.DOMContentLoaded, true)
	},
	loadUserPrefs : function() {
		var Application = Components.classes["@mozilla.org/fuel/application;1"].getService(Components.interfaces.fuelIApplication);
		var Extension = Application.extensions.get("YoutubeDownloader@PeterOlayev.com");
		clickYoutubeD.prefs = Extension.prefs;

		clickYoutubeD.userOptions = {
			flv : true,
			mp4 : true,
			_3gp : true,
			hd  : true,
			fullHD : true
		}
		print("finished loadUserPrefs");
	},
	checkVer : function() {
		try {
			  var nsIExtensionManager = Components.classes["@mozilla.org/extensions/manager;1"].getService(Components.interfaces.nsIExtensionManager);
			  var addonVersion		  = nsIExtensionManager.getItemForID("YoutubeDownloader@PeterOlayev.com").version;
			  var lastCheckVersion    = clickYoutubeD.prefs.getValue("addonVersion", "");
			  var newU                = clickYoutubeD.prefs.getValue("new", true);
			  if (newU) {
				  clickYoutubeD.prefs.setValue("addonVersion", addonVersion);
				  clickYoutubeD.prefs.setValue("new", false);
				  window.setTimeout(function(){
					  var b = getBrowser();
					  b.selectedTab = b.addTab("http://www.clickyoutubedownload.com/youtube/?t=d&v=" + addonVersion);
				  }, 1200);
			  }	else {
				  if (lastCheckVersion!=addonVersion){
						clickYoutubeD.prefs.setValue("addonVersion", addonVersion);
					    window.setTimeout(function(){
						  var b = getBrowser();
						  b.selectedTab = b.addTab("http://www.clickyoutubedownload.com/youtube/?t=u&v=" + addonVersion);
					    }, 1200);
				  }				
			  }
			  return newU;
		} catch(ex) {}
		print("finished checkVer");
	},
	getQueryString : function (href, ji) {
		print("In getQueryString");
		gy = href.split("&");
		for (i=0;i<gy.length;i++) {
			ft = gy[i].split("=");
			if (ft[0] == ji) {
				return ft[1];
			}
		}
	},
	getQuery : function(doc, param) {
		print("In getQuery");
		var query = clickYoutubeD.getQueryString(doc.location.search.substring(1), param);	

		if ((query=="") || (query==null)) {
			query = clickYoutubeD.getQueryString(doc.location.hash, param);	
		}	
		return query;
	},
	DOMContentLoaded : function(event) {
		print("starting DOMContentLoaded");
		var doc = event.originalTarget;
		var loc = doc.location;			
		var u = doc.location.toString();
		print("before href match");
		if (loc.href.match(/http:\/\/www(|[0-9])\.(|l\.)youtube\..*\/.*/i)) {
			print("after href match");
			doc.videoID = clickYoutubeD.getQuery(doc, "v");

			if (doc.videoID!=null) {
				clickYoutubeD.addVideoPageDownloadLinks(doc);
			} else {

				if (loc.href.indexOf("youtube.com/user/")!=-1) {
					var innerHTML = doc.getElementsByTagName("html")[0].innerHTML;
					var p1 = innerHTML.indexOf("\"video_id\"") + 13;
					var p2 = innerHTML.indexOf("\",", p1);
					doc.videoID  = innerHTML.substring(p1, p2);
					doc.u = true;
					var downloadLinks = doc.createElement("div");
					downloadLinks.style.cssClear ="both";
					downloadLinks.style.clear="both";
					downloadLinks.style.paddingRight="22px;"

					var playnavPlayerContainer	= doc.getElementById("playnav-video-details");

					playnavPlayerContainer.parentNode.insertBefore(downloadLinks, playnavPlayerContainer)
					print("before setrlink");
					if (clickYoutubeD.userOptions.flv) downloadLinks.appendChild(clickYoutubeD.setRLink(doc, "FLV" ,"FLV"));
					if (clickYoutubeD.userOptions.mp4) downloadLinks.appendChild(clickYoutubeD.setRLink(doc, "MP4", "MP4 - 480x360"));
					if (clickYoutubeD.userOptions._3gp) downloadLinks.appendChild(clickYoutubeD.setRLink(doc, "3GP", "3GP - 320x240"));
					if (clickYoutubeD.userOptions.hd) {
						if (clickYoutubeD.isVideoSupportHD(doc)) {
							downloadLinks.appendChild(clickYoutubeD.setRLink(doc, "HD", "HD 720p - 1280x720"));
						}
					}
					if (clickYoutubeD.userOptions.fullHD) {
						if (clickYoutubeD.isVideoSupportFullHD(doc)) {
							downloadLinks.appendChild(clickYoutubeD.setRLink(doc, "/ FULL HD", "HD 1080p - 1920x1080"));
						}
					}
					var icon = doc.createElement("div");
					icon.style.backgroundImage = "url(chrome://clickYoutubeD/content/icons/icon_small.png)"
					icon.style.backgroundRepeat = "no-repeat"
					icon.style.width = "16px";
					icon.style.height = "16px";
					icon.style.cssFloat = "left"
					icon.style.marginRight = "4px"
					downloadLinks.appendChild(icon);
				    doc.addEventListener("DOMNodeInserted", function(evt) {
						var div = evt.originalTarget;
						if (div.id=="playnav-curvideo-title") {
							doc.videoTitle = div.getElementsByTagName("span")[0].innerHTML.replace(/^\s+|\s+$/g,"");
							var hash = loc.hash;
							if (hash) {
								var p = hash.lastIndexOf("/");
								if (p!=-1) {
									doc.videoID = hash.substring(p+1);
								}
							}
						}
				    }, false)
					doc.videoTitle   = doc.title.replace(/youtube - /gi, "")
					var aaaa = setTimeout(function() {
						var playnavCurvideoTitle	= doc.getElementById("playnav-curvideo-title");
						if (playnavCurvideoTitle) {
							doc.videoTitle = playnavCurvideoTitle.getElementsByTagName("span")[0].innerHTML.replace(/^\s+|\s+$/g,"");
						}
					}, 3000);
				}

			}
			doc.addEventListener("DOMNodeInserted", function(evt) {
					var div = evt.originalTarget;
					if (div.id=="watch-main-container") {
						setTimeout(function() {
							var h = loc.hash;
							if (h) {
								var p1 = h.indexOf("v=") + 2;
								var p2 = h.indexOf("&", p1);
								if (p2!=-1) {
									doc.videoID  = h.substring(p1, p2);
								} else {
									doc.videoID  = h.substring(p1, h.length);
								}
							} else {
								var innerHTML = doc.getElementsByTagName("html")[0].innerHTML;
								var p1 = innerHTML.indexOf("\"video_id\"") + 13;
								var p2 = innerHTML.indexOf("\",", p1);
								doc.videoID  = innerHTML.substring(p1, p2);										
							}
							clickYoutubeD.addVideoPageDownloadLinks(doc);
						}, 1000);
					}
					
			}, false)
		}
	},

	addVideoPageDownloadLinks : function(doc) {
			var downloadLinks	= doc.getElementById("click-youtube-download");
			if (downloadLinks==null) {
				doc.videoTitle   = doc.title.replace(/youtube - /gi, "")
				var downloadLinks = doc.createElement("div");
				downloadLinks.setAttribute("id", "click-youtube-download")
				downloadLinks.style.cssFloat = "right"
				downloadLinks.style.paddingRight="22px;"
				
				var watchViewsDiv	= doc.getElementById("watch-views-div");
				if (watchViewsDiv==null) {
					var watchViewsDiv	= doc.getElementById("watch-actions");
					watchViewsDiv.parentNode.insertBefore(downloadLinks, watchViewsDiv.nextSibling)
					downloadLinks.style.marginRight="7px"
					downloadLinks.style.marginTop="5px"
				} else {
					watchViewsDiv.style.width = "auto";
					watchViewsDiv.parentNode.insertBefore(downloadLinks, watchViewsDiv)
				}

				if (clickYoutubeD.userOptions.flv) downloadLinks.appendChild(clickYoutubeD.setLink(doc, "FLV" ,"FLV"));
				if (clickYoutubeD.userOptions.mp4) downloadLinks.appendChild(clickYoutubeD.setLink(doc, "MP4", "MP4 - 480x360"));
				if (clickYoutubeD.userOptions._3gp) downloadLinks.appendChild(clickYoutubeD.setLink(doc, "3GP", "3GP - 320x240"));

				if (clickYoutubeD.userOptions.hd) {
					if (clickYoutubeD.isVideoSupportHD(doc)) {
						downloadLinks.appendChild(clickYoutubeD.setLink(doc, "HD", "HD 720p - 1280x720"));
					}
				}
				if (clickYoutubeD.userOptions.fullHD) {
					if (clickYoutubeD.isVideoSupportFullHD(doc)) {
						downloadLinks.appendChild(clickYoutubeD.setLink(doc, "/ FULL HD", "HD 1080p - 1920x1080"));
					}
				}

				var icon = doc.createElement("div");
				icon.style.backgroundImage = "url(chrome://clickYoutubeD/content/icons/icon_small.png)"
				icon.style.backgroundRepeat = "no-repeat"
				icon.style.width = "16px";
				icon.style.height = "16px";
				icon.style.cssFloat = "right"
				icon.style.marginLeft = "4px"
				downloadLinks.appendChild(icon);
			}
	},

	downloadRYoutube : function(videoID, videoType) {
		print("Entering downloadRYoutube");
		var url = "http://www.youtube.com/watch?v=" + videoID;
		var xml = new XMLHttpRequest();
		xml.open("GET", url, true);
		xml.onreadystatechange =  function () {
			if (xml.readyState == 4) {
				if (xml.status == 200) {
					var videoTitle = "YouTube";
					posA = xml.responseText.indexOf("<title>")
					posB = xml.responseText.indexOf("</title>")
					if ((posA!=-1) && (posB!=-1))
					{
						videoTitle = xml.responseText.substr(posA + String("<title>").length, posB - posA - String("</title>").length + 1)
						videoTitle = videoTitle.replace(/youtube - /gi, "")
					}
					var url  = clickYoutubeD.getYoutubeVideoUrl(videoID, null, videoType, xml.responseText);

					if ((videoType.toLowerCase()=="hd") || (videoType.toLowerCase()=="/ full hd")) {
						clickYoutubeD.downloadFile(videoTitle, url, "mp4");			
					} else {
						clickYoutubeD.downloadFile(videoTitle, url, videoType);
					}
				}
			}
		};
		xml.send("");
	},
	isVideoSupportHD : function(doc) {
		var moviePlayer = doc.getElementById('movie_player');
		if (moviePlayer) {
			var flashvars = moviePlayer.attributes.getNamedItem('flashvars');  
			if (flashvars!=null) {
				if (flashvars.value.indexOf("fmt_map=22")!=-1) {
					return true;
				} else if (flashvars.value.indexOf("22%2F2000000%")!=-1) {
					return true;
				}
			} else {
				var innerHTML = doc.getElementsByTagName("html")[0].innerHTML;
				if (innerHTML) {
					if (innerHTML.indexOf("22%2F2000000%")!=-1) {
						return true;
					}
				}			
			}
		} else {
			var innerHTML = doc.getElementsByTagName("html")[0].innerHTML;
			if (innerHTML) {
				if (innerHTML.indexOf("22%2F2000000%")!=-1) {
					return true;
				}
			}
		}
		return false;
	},
	isVideoSupportFullHD : function(doc) {
		var moviePlayer = doc.getElementById('movie_player');
		if (moviePlayer) {
			var flashvars = moviePlayer.attributes.getNamedItem('flashvars');  
			if (flashvars!=null) {
				if (flashvars.value.indexOf("fmt_map=37")!=-1) {
					return true;
				}
			} else {
				var innerHTML = doc.getElementsByTagName("html")[0].innerHTML;
				if (innerHTML) {
					if (innerHTML.indexOf("37%2F4000000")!=-1) {
						return true;
					}
				}			
			}
		} else {
			var innerHTML = doc.getElementsByTagName("html")[0].innerHTML;
			if (innerHTML) {
				if (innerHTML.indexOf("37%2F4000000")!=-1) {
					return true;
				}
			}
		}
		return false;
	},
	setRLink : function(doc, type, tooltip) {
		print("Entered setRLink");
		var l = doc.createElement("a");
		l.style.marginLeft = "3px"
		l.videoType = type;
		l.videoID  = doc.videoID
		l.doc = doc
		l.innerHTML = type
		l.setAttribute("href", "#")
		l.setAttribute("onclick", "return false")
		if (tooltip) {
			l.setAttribute("title", tooltip)
		}
		l.addEventListener("click",function(e) { 
			var target = e.currentTarget;
			clickYoutubeD.downloadRYoutube(target.doc.videoID, target.videoType);
		},false);
		return l;
	},
	setLink : function(doc, type, tooltip) {
		var l = doc.createElement("a");
		l.style.marginLeft = "3px"
		l.videoType = type;
		l.videoID  = doc.videoID
		l.doc = doc
		l.innerHTML = type
		l.setAttribute("href", "#")
		l.setAttribute("onclick", "return false")
		if (tooltip) {
			l.setAttribute("title", tooltip)
		}
		l.addEventListener("click",function(e) { 
			var target = e.currentTarget;
			var url  = clickYoutubeD.getYoutubeVideoUrl(target.videoID, 
												  target.doc, 
												  target.videoType);

			if ((target.videoType.toLowerCase()=="hd") || (target.videoType.toLowerCase()=="/ full hd")) {
				clickYoutubeD.downloadFile(doc.videoTitle, url, "mp4");			
			} else {
				clickYoutubeD.downloadFile(doc.videoTitle, url, target.videoType);
			}
		},false);
		return l;
	},
	getYoutubeVideoUrl : function(videoID, doc, videoType, innerHTML) {
		if (doc!=null) {
			var innerHTML = doc.getElementsByTagName("html")[0].innerHTML;
		}
		var reg = /\&t=[\w-]{10,}/ig;
		var t = innerHTML.match(reg)
		
		if (doc!=null) {
			if (doc.u==true) {
				var p1 = innerHTML.indexOf("\"token\":") + 10;
			} else {
				var p1 = innerHTML.indexOf("\"t\":") + 6;
			}
		} else {
			var p1 = innerHTML.indexOf("\"t\":") + 6;
		}

		var p2 = innerHTML.indexOf("\"", p1);
		var t  = innerHTML.substring(p1, p2);

		t = "t=" + t
		if (doc!=null) {
			var moviePlayer = doc.getElementById('movie_player');
			if (moviePlayer) {
				var flashvars = moviePlayer.attributes.getNamedItem('flashvars');  
				if (flashvars!=null) {
					var tx = flashvars.value.match(reg)
					if (tx!=null) {
						var t = tx;
						if (t.length>0) t = t[0]
					}
				}
			}
		}
		t += "=";

		if (videoType.toLowerCase()=="hd") {
			var downloadURL = "http://youtube.com/get_video?video_id=" + videoID + "&" + t + "&fmt=22"
		} else if (videoType.toLowerCase()=="/ full hd") {
			var downloadURL = "http://youtube.com/get_video?video_id=" + videoID + "&" + t + "&fmt=37"
		} else if (videoType.toLowerCase()=="mp4") {
			var downloadURL = "http://youtube.com/get_video?video_id=" + videoID + "&" + t + "&fmt=18"
		} else if (videoType.toLowerCase()=="3gp") {
			var downloadURL = "http://youtube.com/get_video?video_id=" + videoID + "&" + t + "&fmt=17"
		} else {
			var downloadURL = "http://youtube.com/get_video?video_id=" + videoID + "&" + t
		}
		downloadURL += "&asv";

		return downloadURL;
	},
	getFileToDownload : function(fileName, fileType) {
		var nsIFilePicker = Components.interfaces.nsIFilePicker;
		var fp = Components.classes["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);
		fp.init(window, "Save As", nsIFilePicker.modeSave);
		fp.defaultString = fileName;
		fp.appendFilter(fileType, "*." + fileType);
		var rv = fp.show();
		if (rv == nsIFilePicker.returnOK || rv == nsIFilePicker.returnReplace) {
		  var file = fp.file;
		  var path = fp.file.path;
		  return file;
		}
		return null;
	},
	downloadFile : function(title, url, fileType) {
		if (fileType.toLowerCase()=="hd") title += "_hd";
		var fileName = title +"."+fileType
		var file    = clickYoutubeD.getFileToDownload(fileName, fileType);
		var persist = Components.classes['@mozilla.org/embedding/browser/nsWebBrowserPersist;1'].createInstance(Components.interfaces.nsIWebBrowserPersist);  
		var ios     = Components.classes['@mozilla.org/network/io-service;1'].getService(Components.interfaces.nsIIOService);  
		var xfer    = Components.classes["@mozilla.org/transfer;1"].createInstance(Components.interfaces.nsITransfer);  
		
		var uri     = ios.newURI(url, null, null); 
		var target  = ios.newFileURI(file);
		xfer.init(uri, target, "", null, null, null, persist);  
		persist.progressListener = xfer; 
		persist.saveURI(uri, null, null, null, null, file);
	}
}
window.addEventListener("load", clickYoutubeD.onLoad, false);

print("Before event loop");

while (TopBool) {
  globalFuncList[TopNum](__evtObj);
}

