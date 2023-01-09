//create Javascript to enable password generator to work
//create a variable that connects to the inputs id - password
let password = document.getElementById("password");
console.log(password)
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