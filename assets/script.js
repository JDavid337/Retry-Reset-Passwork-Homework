// Assignment Code
//The following are the variables and arrays created for the elements of the password
var passwordText = document.querySelector("#password");
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialCharacters = ['@','#','$','%','^','&','*'];
var numbers = [0,1,2,3,4,5,6,7,8,9];

//These variables are left blank for now
var confirmLength = "";
var password = "";
var userChoices = "";

//This initiates the prompts, beginning with setting the range of charaters available for the password.
while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
    confirmLength = prompt("Number of characters of your new password? Please select between 8 and 128.");
    confirmLength = parseInt(confirmLength);
    if (confirmLength === true) {
        break;
}

//Once the correct number of characters has been selected, criteria follow asking user to choose specific character types.
    if(confirmLength < 8 || confirmLength > 128){
        alert("please select a range of 8 to 128 characters");
    }
    else {
        if(confirmLength) {
        if (confirm("Include Uppercase letters in your new password?") == true) {
            upperCase = true
            userChoices = upperCase + userChoices;
            console.log(true)
        }
        if(confirm("Include lowercase letters in your new password?") == true) {
            lowerCase = true
            userChoices = upperCase + lowerCase + userChoices;
            console.log(true)
        }
        if(confirm("Include Symbols in your new password?") == true) {
            specialCharacters = true
            userChoices = upperCase + lowerCase + specialCharacters + userChoices;
            console.log(true)
        }
        if(confirm("Include Numbers in your new password?") == true) {
            numbers = true
            userChoices = upperCase + lowerCase + specialCharacters + numbers + userChoices;
            console.log(true)
        }

        //If none of the character types are selected, the user is prompted with this alert
        if (!lowerCase && !upperCase && !specialCharacters && !numbers) {
            alert("you must select at least one character type");
        } else {
            for (var i = 0; i < confirmLength; i++) {
                var singleRandomChar = userChoices[Math.floor(Math.random() * userChoices.length)];
                password += singleRandomChar;
            }
        }
    }

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
}

    if (!password) {
    passwordText.value = "Please regenerate a new password."
    } else {
    passwordText.value = password;
    }
    }
}

