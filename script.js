// Assignment code here
// Set the variables: Yes = Y and No = N
// If user clicks on Generate Password, a prompt should pop up. 
// The prompt should ask how long the password should be with a min of 8 and a max of 128 characters.
// If user input is x >= 8 && x=<128, then document the data. 
// Another prompt should appear to ask user to reply Y or N if they want lowercase characters to be included.
// Another prompt should appear to ask the user to enter Y or N if they want UPPERCASE letters in their password.
// Another prompt should pop up asking user Y or N if they want their password to include numeric characters.
// Another prompt should pop up asking user Y or N if they want special characters in their password.
// If any of the data collected doesn't match the options available, tell user invalid input.


// Get references to the #generate element. (document.createElement() method creates the HTML element specified by tagName or unk). The querySelector() method returns the first element that matches a CSS selector.
// selecting 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // we dont have it. we need to create funtion
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// A prompt to pop up and have the user select/confirm the criteria generate password.
function generatePassword(){
  var length = prompt("Please enter the number of characters for password. Minimum = 8 Characters. Maximum = 128 Characters");
  var lowercase = confirm("Should there be any lowercase character in your password?");
  var uppercase = confirm("Should there be any UPPERCASE character in your password?");
  var number = confirm("Should there be a number character in your password?");
  var specialCharacter = confirm("Should there be any special characters in your password?");
 
  //setting the mimimum for the variables listed below.
  var startcount = 0;

  var minNumbers = "";
  var minLowerCases = "";
  var minUpperCases = "";
  var minSpecialCharacters = "";

  var 

generateBtn();