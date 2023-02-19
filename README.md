# Advanced Random Password Generator
 
   ## Table of Contents

   * [Description](#description)
   * [Technologies](#technologies)
   * [Links](#links)
   * [Installation](#installation)
   * [WireFraming](#wireframing)
   * [UserStory](#userstory)
   * [Development](#development)
   * [Usage](#usage)
   * [Screenshots](#screenshots)
   * [Tests](#tests)
   * [Evolution](#evolution)
   * [Credits](#credits)
   * [References](#references)
   * [Contributing](#contributing)
   * [License](#license)
   
   
   ## Description

   The creation of a advanced random password generator that will allow a user to define a password of between 10 and 64 characters containing should the user select the lowercase letters, uppercase letters, special symbols and numbers.
   
   The following is a gif that demonstrates the application in operation:
   * ![advanced random password generator gif](https://user-images.githubusercontent.com/120601739/219956376-07c5565b-d7a7-411f-90ba-27e43651f115.gif)

   ## Technologies

   HTML, CSS, FlexBox, JavaScript, Node JS (Readme Generator) , ES6

   ## Links

   ### Link for [Deployed Application](https://ianmilli.github.io/Advanced-Random-Password-Generator--Web-Application/)
   
   ### Link for [Repository For Deployed Application](https://github.com/IanMilli/Advanced-Random-Password-Generator--Web-Application)
   
   ## Installation 

   To use the web application a user must go to the deployed application using the link in [Links](#links)


   ## UserStory

   User Story - As a programmer i want a web application that allows me to generate random passwords that may contain different parameters to more securely  protect my work

   ## Development

   After first creating a basic random password generator that created a password of a defined length without requiring a user input, I evolved the project by developing it further by adding prompts and if else statements in the javascript to allow a user to define the parameters of their password.

   ## Usage

   The user should access the project via the link for the deployed application in [Links](#links) and then click on the Red Generate Password button and make selections based on the prompts, this will lead to the production of the required password at the required length and with the required content.

  *  For a video that gives an example of how to use the application please refer to the following [video link](https://drive.google.com/file/d/1k3Ag5q_0v0_j3Z16LaDDxEFVml-N_EZe/view).
  *or scan the following QR code:
  ![qr-code ](https://user-images.githubusercontent.com/120601739/219956317-60f973d9-6f40-4baf-ae6a-e939ab28a193.png)

   

   ## Screenshots
   
   Screenshots taken on a mobile device to demonstrate the responsiveness of the application

   * Screenshot to show the first page the user sees 
![IMG_0527](https://user-images.githubusercontent.com/120601739/219956430-0c475d9e-734e-4f24-a6ee-e65e5f52adb7.PNG)

* Screenshot to show the first thing the user sees when they click the "generate password" button
![IMG_0528](https://user-images.githubusercontent.com/120601739/219956485-4c79a184-b247-400e-bbf8-69ffde030d4d.PNG)

* Screenshot to show a users input
![IMG_0529](https://user-images.githubusercontent.com/120601739/219956568-8facfc55-3436-4833-b304-b03b6e390504.PNG)

* Screenshot to show a prompt confirming the users input
![IMG_0530](https://user-images.githubusercontent.com/120601739/219956597-7580cd4e-6eb7-4fa2-8f91-b440b72a02bf.PNG)

* Screenshots to show following selection prompts
![IMG_0531](https://user-images.githubusercontent.com/120601739/219956646-e602dc6f-1c6e-469e-b718-fbed54a90fd1.PNG)
![IMG_0532](https://user-images.githubusercontent.com/120601739/219956653-59d91228-4bf5-498c-969e-d37cb2aeb874.PNG)
![IMG_0533](https://user-images.githubusercontent.com/120601739/219956663-766a993a-749f-4849-9290-eb40bce51f40.PNG)

* Screenshot to show the copy button confirmation
![IMG_0534](https://user-images.githubusercontent.com/120601739/219956712-c7276df6-6348-4600-961a-9b9a30987d62.PNG)

* Screenshot to show the user pasting the new password from their clipboard
![IMG_0535](https://user-images.githubusercontent.com/120601739/219956726-bfa3fa35-e496-490c-894a-e3fb5d827c49.PNG)

   ## Tests


   produced passwords of multiple lengths and parameters produced by the random password generator
- NKaUXhzltmpwLVnNFgKcxDD - 23 characters, uppercase, lowercase only
- PUA=uv-Fkv}T - 12 characters, uppercase and symbols only
- 5277776331617756996677182217849924141664356043340965708 - 55 number only


   ## Evolution

   During my research i discovered that the use of math.random is no longer viewed as the most secure method for generating a randomised password so this could be altered. Secondly i could add code to protect the prompt box that requests the length of the password to limit a users input so a hacker would be unable to use the box to add their own code into. I could replace the prompts with modals allowing me to create a more user friendly buttons for choosing options. I could make the ui interface differently so a user could use a slide bar to define their password options without having to loop through a series of prompts. 

   ## Credits

   * Main Author:                   Ian Millichamp
   * Main Author Email:             ianmillichamp.2@gmail.com
   * Main Author GitHub User Name:  IanMilli

  

   ## References

   Credit to
* Tutorial with Suresh S Kumar 3pm 10/01/23
   pod 7 question to Scott Nelson -TA regards final bug that meant that the promptForCharacterTypes function was returning previous values confusing future generated passwords. - solution resetting variable validCharacters to a empty string at the start rather than the end of the function.
   Reference 
   Week 1, 2 and 3  Trilogy EDX Bootcamp classes - HTML and CSS code
   Week 4 and 5 Bootcamp classes Javascript usage
   MDN Documents
   W3 School
   Dev.to - random password generator using javascript
   git hub - https://github.com/TiffanyCasey/Password-Generator - Tiffany Casey
   webdesign.tuts.com/tutorial/random-password-generator-with javascript



   ## Questions

   If you have further questions, you can reach me at ianmillichamp.2@gmail.com. For more of my work, see [my GitHub](https://github.com/https://github.com/IanMilli).
  
   ## License
   MIT License

   Copyright (c) 2023 IanMilli

   Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

   The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

   ![License badge](https://img.shields.io/badge/license-MIT-brightgreen).
 


