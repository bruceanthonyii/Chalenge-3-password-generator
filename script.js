// Assignment code here

var generatePassword = function() {

  window.alert("Please provide password criteria");

  window.alert("Please choose a password length.");

  var passLength = function() {

    var lengthNumber = window.prompt("Please enter a number between 8 and 128");

    if (lengthNumber === "" || lengthNumber === null || lengthNumber <= 7 || lengthNumber >=129 ) {
      window.alert("Please enter a valid number");
      return passLength();
    }

  }

  passLength();

  window.alert("Please choose character type(s)");

  var passChar = function() {

    var charType = window.prompt("Choose type(s): 1 for lowercase, 2 for uppercase, 3 for numeric, and/or 4 for special characters");

    
      
        
      
  
  }


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

