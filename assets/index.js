//create Javascript to enable password generator to work
//create a variable that connects to the inputs id - password
let password = document.getElementById("password");
console.log(password)
//create a variable that contains all letters/special symbols/ numbers that the random password can be made from
let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!£%^&*()_+-={}[]:@~#<>?,./|";
console.log(characters)
// note had to remove some symbols as they have effect on javascript such as $;'.