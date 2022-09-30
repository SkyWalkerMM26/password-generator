// Assignment code here
// Set all the variables the appropiate characters.
// If user clicks on Generate Password button, a prompt should pop up. 
// The prompt should ask how long the password should be with a min of 8 and a max of 128 characters.
// If user input is x < 8 || x>128, then give out an alert.
// the User is going to confirms all the other features by pressing Okay or cancel. 
// Make an if statement to where the User has to pick a type of character.
// If any of the data collected doesn't match the options available, tell user invalid input with a message.
// If all data matches, generate an iteration of a random selector.
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
var numberList = ["0", "1", "2", "3","4","5", "6", "7", "8", "9"]
var specialList = ["!", "@", "#", "$", "%", "&"]
var lowerCaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCaseList =["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]


// A prompt to pop up and have the user select/confirm the criteria generate password. 
//This will determine what the random password will be. If anything a true, then we will have to refer to the variable list.

function generatePassword(){
  var Choice = prompt("Please enter the number of characters for password. Minimum = 8 Characters. Maximum = 128 Characters");
  var passwordLength = parseInt(Choice)
  if (passwordLength < 8 || passwordLength > 128){
    alert ("Please enter a valid value within range.")
    return
    }
  var lowerCase = confirm("Should there be lowercase character in your password?")
  var upperCase = confirm("Should there be UPPERCASE character in your password?")
  if (lowerCase !== true && upperCase !== true){
    alert ("There must be at least one character type.")
    return
    }
  var numbers = confirm("Should there be a number character in your password?")
  var specialCharacter = confirm("Should there be any special characters in your password?")

  
//  This is an array list. Are using the variables that are define above to be consolidated into here but this is what the user has selected so we want to reference to this list.
var options = []

if (numbers == true) {
  options.push(numberList)
}
if (specialCharacter == true){
  options.push(specialList)
}
if (lowerCase == true){
  options.push(lowerCaseList)
}
if (upperCase == true){
  options.push(upperCaseList)
}


//we are making the system pick a random number from the a function that will generate a random list.
function randomNumber(min, max){
  if (!max){
    max = min
    min = 0
  }
  var randMinandMax = Math.random()
  return Math.floor(min*(1 - randMinandMax) + randMinandMax*max)
}
function getRandom(list) {
  return list[randomNumber(list.length)]
}

var generatePassword = ""


// This section is setting an iternation of a function that was defined earlier, which is getting random characters from the options Array list that is related to the variable lists that was defined in the beginning of this script.  
for (var i = 0; i < passwordLength; i++){
  var randomList = getRandom(options)
  var randomCharacter = getRandom(randomList)
  generatePassword += randomCharacter
}
 return generatePassword


}





