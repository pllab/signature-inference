
// STUB begin
var TopString = (45).toString(12);
var TopNum = Date.now();
var TopBool = !TopNum;

var Components = {
  classes: {},
  interfaces: {
    nsIPrefService: {},
    nsIPrefBranch2: {}
  }
};

var globalFuncList = [];

var __prefObj = {
  QueryInterface: function() {},
  
  addObserver: function(a, obj, ignore) {
    globalFuncList.push(obj.observe);
  },

  removeObserver: function() {},
  
  getCharPref: function() { return TopString; },

  setCharPref: function() {}  
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

window.setInterval = function(fun, time) {
  globalFuncList.push(fun);
}

document.getElementById = function() { return document; };
document.addTab = function() {};
document.getElementsByTagName = function() { 
  var a = [];
  a.push(document);
  a.push(document);
  return a;
};
document.textContent = TopString;
// STUB end

var jobwatcherodesk = {
	prefs: null,
	jobType: "",
  myUrl: "",
	
	// Initialize the extension
	
	startup: function()
	{
		// Register to receive notifications of preference changes
		
		this.prefs = Components.classes["@mozilla.org/preferences-service;1"]
				.getService(Components.interfaces.nsIPrefService)
				.getBranch("jobwatcher.");
		this.prefs.QueryInterface(Components.interfaces.nsIPrefBranch2);
		this.prefs.addObserver("", this, false);
		
		this.jobType = this.prefs.getCharPref("type");

		this.refreshInformation();		
		window.setInterval(this.refreshInformation, 10*60*500);
    print("finishing startup");
	},
	
	// Clean up after ourselves and save the prefs
	
	shutdown: function()
	{
		this.prefs.removeObserver("", this);
    print("finishing shutdown");
	},
	
	// Called when events occur on the preferences
	
	observe: function(subject, topic, data)
	{
    print("observing");
		if (topic != "nsPref:changed")
		{
			return;
		}

		switch(data)
		{
			case "type":
				this.jobType = this.prefs.getCharPref("type");
				this.refreshInformation();
				break;
		}
	},
	
	// Switches to watch a different job type
	
	watchjobType: function(newType)
	{
		this.prefs.setCharPref("type", newType);
	},
	
	// Refresh the information
	
	refreshInformation: function()
	{
    var type = jobwatcherodesk.jobType;
		var xmlHttp = null;
    odUrl = "https://my.odesk.com/console/feeds/jobs.php";
    function GotJob()
    {
      if(xmlHttp.readyState==4)
      {
        if (xmlHttp.status == 200) 
        {
          var myconnect = xmlHttp.responseXML;
          var x = 2;
          mytitles = new Array();
          while (x < 13)
          {
            mytitles[x] = myconnect.getElementsByTagName("title")[x].textContent;
            var matchPos1 = mytitles[x].search(type);
            if(matchPos1 != -1)
            {
              y = x;
              var title = mytitles[y];
              x = 13;
            }
            else
            {
              x++;
            }
          }
          title = title.replace(/\s+/g,' ');
          var publishedNode=myconnect.getElementsByTagName("pubDate")[y].textContent;
          myUrl=myconnect.getElementsByTagName("link")[y].textContent;
          var published = publishedNode.replace(/T/,' ');
          var ptitle='Published: ';
          var button=document.getElementById('jobwatcher');
          button.label=title + ptitle + published;
          print("Finishing refreshInformation");
        }
      }
    }

    xmlHttp = new XMLHttpRequest(); 
    xmlHttp.open('GET',odUrl,true);
    xmlHttp.overrideMimeType('text/xml');
    xmlHttp.onload = GotJob
    // STUB
    globalFuncList.push(GotJob);
    xmlHttp.send(null);
  },

        LoadJob: function() 
        {
          var tBrowser = document.getElementById('content');
          var tab = tBrowser.addTab(myUrl);
          tBrowser.selectedTab = tab;
          print("Finishing LoadJob");
        }
}

globalFuncList.push(function() { jobwatcherodesk.startup(); } );
globalFuncList.push(function() { jobwatcherodesk.shutdown(); } );
globalFuncList.push(function() { jobwatcherodesk.LoadJob(); } );

while (TopBool) {
  globalFuncList[TopNum]();
  // if (TopBool)
  //   break;
}