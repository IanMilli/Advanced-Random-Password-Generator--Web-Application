/*create Javascript to enable random password generator to work and complies with the project requirement of variable passwords between 10 and 64 
characters in length and optional choices of lowercase, uppercase, numbers and symbols*/

* /create a variable that connects to the inputs id - password
let password = document.getElementById("password");
console.log(password);


/*This section will be used to define the required global variables defaulting passwordLength to 0, the booleans  to false and to create variables
that incorporate the four types of input for the password*/
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
/* note had to remove some symbols as they have effect on javascript such as $;'.*/

/* created a function that operates by equating the variable passwordLength to the response from the user - by using parseINT 
the response from the user is returned as a number rather than a string*/

function promptForLength() {
    passwordLength = parseInt(prompt("Please define number of required Characters( Minimum 10, Maximum 64"));
/*create an expression so if the user inputs a number less than ten or greater than 64 they will be asked to try again
 then recall the function to return the user to the beginning so they don't get trapped in a logic loop.

The password is required to be at least 10 characters long and no more than 64 characters long hence the values in the below expression.


 On first try bug occurred where loop allocated the out of range number to passwordLength even after going through the loop again (the new
 response from the user was ignored so reset the variable passwordLength to 0 before recalling the function to prevent this happening- bug resolved*/
    if (passwordLength <= 10 || passwordLength >= 64 || Number.isNaN(passwordLength)) {
        alert("Password length must be between 10-64 characters, Please Try again");
        passwordLength = 0;
        promptForLength();
    }
}
/* next a series of functions are required that will ask the user if they want their password to include lowercase, uppercase, special or whole number characters.
each function works the same way by first asking the user to confirm a yes/no answer - if yes = true, if no = false.
next we add an if statement asking if the response equates to true. if it does then we concat the string attached to the variable attributed to the question
to a new variable called validCharacters to create a string incorporating the user required characters.
Once all prompts have been responded to assuming at least one is returned as true the validCharacters variable should now equal a
string element that can be iterated through using a for loop. */

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
/*If the user says no to all options we need an alert to say at least one option must be selected by clicking ok. Once the alert is given
we will then restart the function by recalling it. when adding the if statement we do not need to separate the options of the four
variables, includeLC,includeUC, includeNum,includeSym but can combine them into a single expression */
    if (includeLC === false &&
        includeUC === false &&
        includeNum === false &&
        includeSym === false) {
        alert("At least one character type needs to be selected");

        promptForCharacterTypes();
    }

}
/* we can now create a function to generate the random password having used the above functions to determine the length of the password and the required characters of the password*/

function generatePassword() {


    /*define a variable for password in the function to equal the symbols from the string in the variable characters*/
    let password = "";
    console.log(password);

/*create the random pass word using a for loop and the Math.random function
    1) change all uses of the word index to i
    2) set index to be less than or equal to the variable password length to ensure the generated password has no more than 12 characters
    3) i ++ means that the loop will continue to go from 1 - 12 to grab a symbol as the statement i <=passwordLength is true (once the expression becomes false by reaching 13 or above the loop will cease to funbction.)
    4) make a variable - random characters that is equal to the Math.floor function which is composed of the math.random function picking any character from along the length of the characters variable string element.
    5) finish the for loop by using the += operator to add the value of characters substring to the password variable
*/
    console.log("password Length = ", passwordLength);
    console.log("lowercase = ", includeLC);
    console.log("uppercase = ", includeUC);
    console.log("password numbers = ", includeNum);
    console.log("password symbols = ", includeSym);
    for (let i = 0; i <= passwordLength - 1; i++) {
        let randomCharacter = Math.floor(Math.random() * validCharacters.length);
        password += validCharacters.substring(randomCharacter, randomCharacter + 1);

    }
/*assign the password to the input box . This will allow the pass word to be seen in it.*/
    document.getElementById("password").value = password;
}
/*lastly create a function to allow the copy button to copy the random generated password on to the clipboard for the user.*/
function copyPassword() {
/*then Get the text field8*/
    let copyText = document.getElementById("password");
  
/*Select the text field*/
    copyText.select();
    copyText.setSelectionRange(0, 99999); * / For mobile devices

/*Copy the text inside the text field*/
    navigator.clipboard.writeText(copyText.value);
  
/*Alert the copied text*/
    alert("Copied the password: " + copyText.value);
}
/*function for copy button and understanding of process from w3school*/
/*functions to determine passwords length and contents of password produced with collaboration with tutor Suresh M Kumar. */