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
var userNumbers = ["0", "1", "2", "3","4","5", "6", "7", "8", "9"]
var specialCharacter = ["!", "@", "#", "$", "%", "&"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase =["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]


// A prompt to pop up and have the user select/confirm the criteria generate password.
function generatePassword(){
  var Choice = prompt("Please enter the number of characters for password. Minimum = 8 Characters. Maximum = 128 Characters");
  var passwordLength = parseInt(Choice)
  if (passwordLength < 8 || passwordLength > 128){
    alert ("Please enter a valid value within range.")
    generateBtn();
    }
  var lowerCase = confirm("Should there be lowercase character in your password?");
  var upperCase = confirm("Should there be UPPERCASE character in your password?");
  if (lowerCase !== true || upperCase !== true){
    alert ("There must be at least one character type.")
    return
    }
  
  var userNumbers = confirm("Should there be a number character in your password?");
  var specialCharacter = confirm("Should there be any special characters in your password?");
   
  answer = console.log(length);
  answer = console.log(lowerCase);
  answer = console.log(upperCase);
  answer = console.log(numbers);
  answer = console.log(specialCharacter);


  // Generator loop for random password
  for (let i = 0; i < length; i++) {
    var allanswers = answer[Math.floor(Math.random() * answer.length)];
    passwordBlank.push(allanswers);
    console.log(allanswers);
  }

  var password = passwordBlank.join("generatePassword");
  console.log(password);
  return password;
  
  

}





