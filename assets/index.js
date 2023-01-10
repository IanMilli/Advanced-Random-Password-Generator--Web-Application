/*create Javascript to enable random password generator to work and complies with the project requirement of variable passwords between 10 and 64 
characters in length and optional choices of lowercase, uppercase, numbers and symbols

create a variable that connects to the inputs id - password*/

let password = document.getElementById("password");
console.log(password);
//create a function for generating the password

//in order to adapt password generator based on project requirements I have edited out the original variable array and will create a new one
//for characters using math.floor and math random. but first we need to set up the password length field which will be adjusted by user input.
let passwordLength = 0;
let includeLC = false;
let includeUC = false;
let includeSym = false;
let includeNum = false;
let validCharacters = "";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "!£%^&*()_+-={}[]:@~#<>?,./|";

/* created a function that operates by equating the variable passwordLength to the response from the user - by using parseINT 
the response from the user is returned as a number rather than a string*/

function promptForLength() {
    passwordLength = parseInt (prompt("Please define number of required Characters( Minimum 10, Maximum 64"));
    if (passwordLength <= 10 || passwordLength >= 64 || Number.isNaN(passwordLength)){
        alert("Password length must be between 10-64 characters, Please Try again");
        passwordLength = 0;
        promptForLength();
    }
}

function promptForCharacterTypes() {
    includeLC = confirm("Press OK to include lowercase characters in the password");
    if (includeLC === true) {
        validCharacters += lowerCase;
    }
    includeUC = confirm("Press OK to include uppercase characters in the password");
    if (includeUC === true) {
        validCharacters += upperCase;
    }
    includeNum = confirm("Press OK to include numbers in the password");
    if (includeNum === true) {
        validCharacters += numbers;
    }
    includeSym = confirm("Press OK to include special symbols in the password");
    if (includeSym === true) {
        validCharacters += symbols;
    }
    if (includeLC === false && 
        includeUC === false &&
        includeNum === false &&
        includeSym === false) {
        alert("At least one character type needs to be selected");
      
        promptForCharacterTypes();
    }

}
/* we can now create a function to generate the random password having used the above functions to determine the length of the password and the required characters of the password*/

/*If the user says no to all options we need an alert to say at least one option must be selected by clicking ok. Once the alert is given
we will then restart the function by recalling it. when adding the if statement we do not need to separate the options of the four
variables, includeLC,includeUC, includeNum,includeSym but can combine them into a single expression */

/* we can now create a function to generate the random password having used the above functions to determine the length of the password and the required characters of the password*/
function generatePassword() {

promptForLength();
console.log(passwordLength);
// Loop if answer is outside the parameters 

    // Repeat back how many characters the user will have  
    alert(`Your password will have ${passwordLength} characters`);

    promptForCharacterTypes();    //define a variable for password in the function to equal the symbols from the string in the variable characters
let password = "";
console.log(password);

// create the random pass word using a for loop and the Math.random function
/*  1) change all uses of the word index to i
    2) set index to be less than or equal to the variable password length to ensure the generated password has no more than 12 characters
    3) i ++ means that the loop will continue to go from 1 - 12 to grab a symbol as the statement i <=passwordLength is true (once the expression becomes false by reaching 13 or above the loop will cease to function.)
    4) make a variable - random characters that is equal to the Math.floor function which is composed of the math.random function picking any character from along the length of the characters variable string element.
    5) finish the for loop by using the += operator to add the value of characters substring to the password variable
*/
console.log("password Length = ", passwordLength);
console.log("lowercase = ", includeLC);
console.log("uppercase = ", includeUC);
console.log("password numbers = ", includeNum);
console.log("password symbols = ", includeSym);
for (let i = 0; i <= passwordLength - 1; i++) {
    let  randomCharacter = Math.floor(Math.random() * validCharacters.length);
    password += validCharacters.substring(randomCharacter,randomCharacter +1);
    
}
// assign the password to the input box . This will allow the pass word to be seen in it.
        document.getElementById("password").value = password;
}
/*lastly create a function to allow the copy button to copy the random generated password on to the clipboard for the user.*/
function copyPassword() {
/*then Get the text field8*/
    let copyText = document.getElementById("password");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the password: " + copyText.value);
  }
  // function for copy button and understanding of process from w3school