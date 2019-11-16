
var upper = ["ABCEDFGHIJKLMNOPQRSTUVWXYZ"];
var lower = ["abcdefghijklmnopqrstuvwxyz"];
var alpha = ["0123456789"];
var special = ["!,#$%^&*()~+=<>|?"];
var charSet = "";

var confAlpha = document.getElementById("numbers");
var confLower = document.getElementById("lowers");
var confUpper = document.getElementById("uppers");
var confSpecials = document.getElementById("specials");
var password ="";

var charNo = document.getElementById("charBox");

// Below are if statements used to select the types of characters that will be used based on user input //
function generate() {

// If the numbers box is checked, numbers will be added to the string for random selection.//
  if (confAlpha.checked == true) {
    charSet += alpha;
    console.log(charSet);
  }

// If the lower case box is checked, lower case numbers will be added to the string for random selection//
  if (confLower.checked == true) {
    charSet += lower;
    console.log(charSet);
  }

// If the upper case box is checked, upper case numbers will be added to the string for random selection//
  if (confUpper.checked == true) {
    charSet += upper;
    console.log(charSet);
  }

  // if the special characters box is checked, special characters will be added to the string for random selection //
  if (confSpecials.checked == true) {
    charSet += special;
    console.log(charSet);
  } 
  // if none of the boxes are checked the use will receive the message below letting them know that they must select at least one option. //
  if (confLower.checked !== true && confUpper.checked !== true && confAlpha !== true && confSpecials !== true) {
    alert("You must select at least one character type")
  }

// this loop will use the password lenght entered by the user to deterimine how many times a random number will be selected from the total character set based on the selected criteria.//

    for (var i = 0; i < charNo.value; i++) {

      password += charSet.charAt(Math.floor(Math.random() * charSet.length));
      console.log(password);
    }
  // This allows for the new password to be displayed in the lower text box//
  return document.getElementById("password").innerText = password;
  }


  var copyText = document.getElementById("copy");
  
  copyText.addEventListener("click" , copy);

  function copy(e) {
    document.querySelector("#password").select();
    document.execCommand("Copy");
    e.preventDefault();
  }









