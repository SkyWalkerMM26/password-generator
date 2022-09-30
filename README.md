# Password Generator
The purpose of this project is to create a randonly password generator that meets certain criterias to provide a strong password for security purposes. 🚨

[Password-generator-video.webm](https://user-images.githubusercontent.com/113512061/193195351-6438ef56-399f-4fee-9dda-1e705ef304b2.webm)


## How do we generate a password?

**Steps**
1. Click on the red Generate Password button.
2. This is going to take the user through some prompts. 
3. Please read carefully as there are some criterias that should be met.

    **Hint**
    * By clicking "OK", it will translate to yes.
    * By clicking "cancel", it will translate to no.
    * The password length criteria should be 8 characters to 128 characters long.
    * There has to be at least one character type.

4. If there is an invalid input from the user, an alert prompt will pop up.
5. Any error will take you back to the beginning to restart the process. 
6. After following all the prompts, a password should be displayed within the box. 
7. Feel free to start the process again to generate another password.



**CODE Snippet**
    This is part of the javascript. I want to share this snippet as I thought how interesting it is. This section right here determines the criterias of the password generator almost like how a writer determining how the story goes. 

```
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
  var numbers = confirm("Should there be a number character in your password?")'
  var specialCharacter = confirm("Should there be any special characters in your password?")
  ```


**Technologies Used** 
* HTML5
* CSS
* Git
* GitHub

Author: Mai Moua 
[GitHub Profile](https://github.com/SkyWalkerMM26)
[LinkedIn](https://www.linkedin.com/in/mai-moua-69a50517a/)
[Portfolio Website]()