// Assignment Code
var generateBtn = document.querySelector("#generate");

var chars = ["a", "b", "c", "d", "e", "f", "g",]
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var sChars = ["$", "%", "*", "&", "!"]
var emojis = ["😁", "😎", "😲", "🤓", "😉"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
