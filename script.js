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

//set variables
var specialCharacters = "!@#$%^&*()";
var length = "";
var numbers = "1234567890";
var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var minLength = "";
var minNumbers = "";
var minLowerCase = "";
var minUpperCase = "";
var minSpecialCharacter = "";
var randomPasswordGenerated = "";
var passwordBlank = [];



// A prompt to pop up and have the user select/confirm the criteria generate password.
function generatePassword(){
  var length = prompt("Please enter the number of characters for password. Minimum = 8 Characters. Maximum = 128 Characters");
  if ((length < 7) && (length > 129)){
    alert ("Please enter a valid value within range.");
      generateBtn();}
  var lowerCase = confirm("Should there be lowercase character in your password?");
  var upperCase = confirm("Should there be UPPERCASE character in your password?");
  if ((lowerCase !== true) && (upperCase !== true)){
    alert ("There must be at least one character type.");
    generatePassword();}
  var numbers = confirm("Should there be a number character in your password?");
  var specialCharacter = confirm("Should there be any special characters in your password?");
   



  // Generator loop for random password
  for (let i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * length);
    randomPasswordGenerated += minLength;
    randomPasswordGenerated += minLowerCase;
    randomPasswordGenerated += minUpperCase;
    randomPasswordGenerated += minNumbers;
    randomPasswordGenerated += minSpecialCharacter;

  }

  var password = passwordBlank.join("generatePassword");
  console.log(password);
  return password;
  
  
  writePassword();

}





