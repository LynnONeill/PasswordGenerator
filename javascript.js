
var upper = ["ABCEDFGHIJKLMNOPQRSTUVWXYZ"];
var lower = ["abcdefghijklmnopqrstuvwxyz"];
var alpha = ["0123456789"];
var special = ["!,#$%^&*()~+=<>|?"];
var charSet = "";
// var fullPass = "Your password is ";

var confAlpha = document.getElementById("numbers");
var confLower = document.getElementById("lowers");
var confUpper = document.getElementById("uppers");
var confSpecials = document.getElementById("specials");
var password ="";

var charNo = document.getElementById("charBox");
console.log(confUpper.checked);
console.log(confSpecials.checked);
function generate() {

  if (confAlpha.checked == true) {
    charSet += alpha;
    console.log(charSet);
  }
  if (confLower.checked == true) {
    charSet += lower;
    console.log(charSet);
  }

  if (confUpper.checked == true) {
    charSet += upper;
    console.log(charSet);
  }

  if (confSpecials.checked == true) {
    charSet += special;
    console.log(charSet);
  }
    for (var i = 0; i < charNo.value; i++) {

      password += charSet.charAt(Math.floor(Math.random() * charSet.length));
      console.log(password);
    }

  return document.getElementById("password").innerText = password;
  }
  var copyText = document.getElementById("copy");
  copyText.addEventListener("click" , copy);

  function copy(e) {
    document.querySelector("#password").select();
    document.execCommand("Copy");
    e.preventDefault();
  }









