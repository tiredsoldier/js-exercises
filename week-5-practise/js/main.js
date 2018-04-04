var blueBtn = document.querySelector("#blueBtn");

blueBtn.addEventListener("click", function() {
  var blueChange = document.querySelector(".jumbotron");
  blueChange.style.backgroundColor = "#588fbd";
  var donateBike = document.querySelector("#donateBike");
  donateBike.style.backgroundColor = "#ffa500";
  var volunteerBtn = document.querySelector("#volunteerBtn");
  volunteerBtn.style.backgroundColor = "black";
  volunteerBtn.style.color = "white";
});

var orangeBtn = document.querySelector("#orangeBtn");

orangeBtn.addEventListener("click", function() {
  var blueChange = document.querySelector(".jumbotron");
  blueChange.style.backgroundColor = "#f0ad4e";
  var donateBike = document.querySelector("#donateBike");
  donateBike.style.backgroundColor = "#5751fd";
  var volunteerBtn = document.querySelector("#volunteerBtn");
  volunteerBtn.style.backgroundColor = "#31b0d5";
  volunteerBtn.style.color = "white";
});
var greenBtn = document.querySelector("#greenBtn");

greenBtn.addEventListener("click", function() {
  var blueChange = document.querySelector(".jumbotron");
  blueChange.style.backgroundColor = "#87ca8a";
  var donateBike = document.querySelector("#donateBike");
  donateBike.style.backgroundColor = "black";
  var volunteerBtn = document.querySelector("#volunteerBtn");
  volunteerBtn.style.backgroundColor = "#8c9c08";
});

var submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", function(btn) {
  btn.preventDefault();
  var emailMsg = "";
  var emailMsg2 = "";
  var nameMsg = "";
  var textMsg = "";
  var email = document.querySelector("#exampleInputEmail1");
  var name = document.querySelector("#example-text-input");
  var text = document.querySelector("#exampleTextarea");
  if (email.value === "") {
    emailMsg = "e-mail address, ";
    email.style.backgroundColor = "pink";
  }
  if (name.value === "") {
    nameMsg = "name, ";
    name.style.backgroundColor = "pink";
  }
  if (text.value === "") {
    textMsg = "message, ";
    text.style.backgroundColor = "pink";
  }
  if (!email.value.includes("@")) {
    emailMsg2 = "Your e-mail address was wrong typed.";
    email.style.backgroundColor = "pink";
  }
  if (emailMsg !== "" || nameMsg !== "" || textMsg !== "" || emailMsg2 !== "") {
    if (emailMsg !== "" || nameMsg !== "" || textMsg !== "") {
      alert(
        "You didn't type your " +
          emailMsg +
          nameMsg +
          textMsg +
          "and " +
          emailMsg2
      );
    } else {
      alert(emailMsg2);
    }
  }
  email.value = "";
  name.value = "";
  text.value = "";
});
