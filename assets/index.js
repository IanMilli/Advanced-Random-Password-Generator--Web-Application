//create Javascript to enable password generator to work
//create a variable that connects to the inputs id - password
let password = document.getElementById("password");

//create a function for generating the password

function generatePassword() {
 //create a variable that contains all letters/special symbols/ numbers that the random password can be made from   
    let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!£%^&*()_+-={}[]:@~#<>?,./|";
console.log(characters)
// note had to remove some symbols as they have effect on javascript such as $;'.
// we have been asked to give the password a length of 12 characters therefore i will create a variable equal to 12.
let passwordLength = 12;
console.log(passwordLength)

//define a variable for password in the function to equal the symbols from the string in the variable characters
let password = "";
}

// create the random pass word using a for loop and the Math.random function
/*  1) change all uses of the word index to i
    2) set index to be less than or equal to the variable password length to ensure the generated password has no more than 12 characters
    3) i ++ means that the loop will continue to go from 1 - 12 to grab a symbol as the statement i <=passwordLength is true (once the expression becomes false by reaching 13 or above the loop will cease to funbction.)
    4) make a variable - random characters that is equal to the Math.floor function which is composed of the math.random function picking any character from along the length of the characters variable string element.
    5) finish the for loop by using the += operator to add the value of characters substring to the password variable
*/
for (let i = 0; i < passwordLength.length; i++) {
    let  randomCharacter = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomCharacter,randomCharacter +1);
    
}
// assign the password to the input box . This will allow the pass word to be seen in it.
document.getElementById("password").value = password