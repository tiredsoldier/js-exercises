var myButton = document.querySelector("#bgrChangeBtn");
myButton.addEventListener("click", function() {
  var bgrChangeBtn = document.querySelector(".jumbotron");
  bgrChangeBtn.style.backgroundColor = "pink";
});
var alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", function() {
  alert("Hello World! It is my first js alert code");
});

var addTextBtnV = document.querySelector("#addTextBtn");

addTextBtnV.addEventListener("click", function() {
  var container = document.querySelector("#jumbotron-text");
  var newParagraf = document.createElement("p");
  newParagraf.innerText = "Hey Look at here I can write somethings here!!";
  container.appendChild(newParagraf);
});
var largerLinksBtn = document.querySelector("#largerLinksBtn");

largerLinksBtn.addEventListener("click", function() {
  var large = document.querySelectorAll("a");

  large.forEach(function(largeElement) {
    largeElement.style.fontSize = "1.5em";
  });
});
