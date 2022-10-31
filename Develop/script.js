// Assignment code here

// Criteria Arrays
var lowerChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var allChars = [];

function generatePassword() {
  // Getting user input
  howMany = prompt(
    "How many characters long will your password be? Choose a number between 8 and 128."
  );
  if (howMany <= 8 || howMany >= 128) {
    return "Please choose a number between 8 and 128.";
  } else if (isNaN(howMany)) {
    howMany = prompt("Please choose a number between 8 and 128. ");
  } else {
    alert(`Your password will be ${howMany} characters long`);
  }

  //Confirming user criteria
  criteriaLower = confirm("Should your password have lowercase characters?");
  if (criteriaLower) {
    alert("Your password will include lowercase characters!");
  } else {
    alert("Your password will NOT include lowercase characters!");
  }

  criteriaUpper = confirm("Should your password have uppercase characters?");
  if (criteriaUpper) {
    alert("Your password will include uppercase characters!");
  } else {
    alert("Your password will NOT include uppercase characters!");
  }

  criteriaNum = confirm("Should your password have numbers?");
  if (criteriaNum) {
    alert("Your password will include numbers!");
  } else {
    alert("Your password will NOT include numbers!");
  }

  criteriaSpecial = confirm("Should your password have special characters?");
  if (criteriaSpecial) {
    alert("Your password will include special characters!");
  } else {
    alert("Your password will NOT include special characters!");
  }

  // In case of no criteria
  if (
    criteriaLower === false &&
    criteriaUpper === false &&
    criteriaNum === false &&
    criteriaSpecial === false
  ) {
    return "Please select at least one type of character for your password.";
  }

  // Make final list of characters
  if (criteriaLower) {
    allChars = allChars.concat(lowerChars);
  }

  if (criteriaUpper) {
    allChars = allChars.concat(upperChars);
  }

  if (criteriaNum) {
    allChars = allChars.concat(numChars);
  }

  if (criteriaSpecial) {
    allChars = allChars.concat(specialChars);
  }

  // Combining all criteria for final password
  var finalPass = "";
  for (var i = 0; i < howMany; i++) {
    finalPass =
      finalPass + allChars[Math.floor(Math.random() * allChars.length)];
  }
  return finalPass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);