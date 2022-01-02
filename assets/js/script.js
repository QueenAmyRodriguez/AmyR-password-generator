// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// arrays to hold the character values
var randomLowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomUpperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var randomNumericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var randomSymbol = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "?", "@", "^", "~"];

var generatePassword = function() {
  // password length variable
  var passwordLength = window.prompt("How long do you want the password? Please enter a number between 8 and 128.");
  // passwordLength = parseInt(passwordLength); // changes input from string to integer

  //validate a number between 8 and 128 is chosen
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password needs to be within 8 and 128 characters. Please enter a number between 8 and 128.");
    generatePassword();
  }
  // include lowercase letters
  var lowerCase = window.confirm("Do you want to include lowercase letters?");

  // include uppercase letters
  var upperCase = window.confirm("Do you want to include uppercase letters?");

  // include numeric values
  var numbers = window.confirm("Do you want to include numbers?");

  // include special characters
  var specialChar = window.confirm("Do you want to include special characters?");

  while (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
    window.alert("You need to include at least one set of characters.");
    var lowerCase = window.confirm("Do you want to include lowercase letters?");
    var upperCase = window.confirm("Do you want to include uppercase letters?");
    var numbers = window.confirm("Do you want to include numbers?");
    var specialChar = window.confirm("Do you want to include special characters?");
  }

  //gather prompt criteria to create password
  var finalPasswordArray = [];
  if (lowerCase) {
    finalPasswordArray = finalPasswordArray.concat(randomLowerChar);
  }
  if (upperCase) {
    finalPasswordArray = finalPasswordArray.concat(randomUpperChar);
  }
  if (numbers) {
    finalPasswordArray = finalPasswordArray.concat(randomNumericChar);
  }
  if (specialChar) {
    finalPasswordArray = finalPasswordArray.concat(randomSymbol);
  }

  // create final password with for loop 
  var finalPassword = " ";
  for (var i = 0; i < passwordLength; i++) {
    finalPassword = finalPassword + finalPasswordArray[Math.floor(Math.random() * finalPasswordArray.length)];
  }
return finalPassword;
}

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


