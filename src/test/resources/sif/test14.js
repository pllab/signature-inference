
document.popupNode = document;
document.ownerDocument = document;

var message = document.popupNode.ownerDocument.location.toString().match(/^about/g);

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://www.foo.com");
// // if (document.location.toString().match(/^about/g))
// xhr.send(message);

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.foo.com/");
if (document.popupNode.ownerDocument.location.toString().match(/^about/g)) {
  xhr.send(null);
}
