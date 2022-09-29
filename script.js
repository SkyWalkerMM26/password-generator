// Assignment code here
// If user clicks on Generate Password, a prompt should pop up. 
// The prompt should ask how long the password should be with a min of 8 and a max of 128 characters.
// If user input is x >= 8 && x=<128, then document the data. 
// the User is going to confirma all the other features by pressing Okay or cancel. 
// If any of the data collected doesn't match the options available, tell user invalid input.
// if all data matches, generate a password for the user.


// Get references to the #generate element. (document.createElement() method creates the HTML element specified by tagName or unk). The querySelector() method returns the first element that matches a CSS selector.
// selecting 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var specialCharacters = "!@#$%^&*()";


// A prompt to pop up and have the user select/confirm the criteria generate password.
function generatePassword(){
  var length = prompt("Please enter the number of characters for password. Minimum = 8 Characters. Maximum = 128 Characters");
  if ((length < 7) && (length > 129)){
    alert ("Please enter a valid value within range.");
    generateBtn();
  }
  var lowerCase = confirm("Should there be any lowercase character in your password?");
  var upperCase = confirm("Should there be any UPPERCASE character in your password?");
  var numbers = confirm("Should there be a number character in your password?");
  var specialCharacter = confirm("Should there be any special characters in your password?");

  function validate(){
    let x = document.forms
  }
 
  //setting the mimimum for the variables listed below.
  var startcount = 0;
  var minNumbers = "";
  var minLowerCase = "";
  var minUpperCase = "";
  var minSpecialCharacter = "";
  var randomPasswordGenerated = "";

  randomPasswordGenerated += minNumbers;
  randomPasswordGenerated += minLowerCase;
  randomPasswordGenerated += minUpperCase;
  randomPasswordGenerated += minSpecialCharacter;

  var array = {
    getNumbers: function({
      return String.fromCharCode(Math.floor(Math.random() * minNumbers.length + ii));
    }
    getLowerCases: function
  }


};
 generateBtn();



