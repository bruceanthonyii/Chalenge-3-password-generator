// Assignment code here

var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var numbers = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
];

var special = [
  '!',
  '#',
  '$',
  '%',
  '&',
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
  '[',
  '^',
  '{',
  '|',
  '}',
  '~'
];

function getPassChar() {

  //alert("Please choose a password length.");

  var passLength = parseInt(
    prompt("Please enter a number between 8 and 128.")
  );

  if (isNaN(passLength) === true || passLength === "" || passLength === null || passLength <= 7 || passLength >=129 ) {
    alert('Please enter a valid number.');
    return getPassChar();
  }

  console.log(passLength);
  /*window.alert("You have chosen a/an " + passLength + " character length.");*/

  //debugger;

  //alert("Please choose character type(s).");

  var charLowerCase = confirm('Click OK to include lower case.');
  console.log(charLowerCase);
  /*if (charLowerCase) {
    window.alert("You have chosen lower case characters.");
  } else {
    window.alert("You have chosen no lowercase characters.");
  }*/ 

  var charUpperCase = confirm('Click OK to include upper case.');
  console.log(charUpperCase);
  /*if (charUpperCase) {
    window.alert("You have chosen upper case characters.");
  } else {
    window.alert("You have chosen no upper case characters.");
  }*/
  
  var charNumber = confirm('Click OK to include numbers.');
  console.log(charNumber);
  /*if (charNumber) {
    window.alert("You have chosen numbers.");
  } else {
    window.alert("You have chosen no numbers.");
  }*/

  var charSpecial = confirm('Click OK to include special characters.');
  console.log(charSpecial);
  /*if (charSpecial) {
    window.alert("You have chosen special characters.");
  } else {
    window.alert("You have chosen no special characters.");
  }*/

  if (
    charLowerCase === false &&
    charUpperCase === false &&
    charNumber === false &&
    charSpecial === false
  ) {
    alert("Please select at least one character type.");
    return;
  }

  var passCharacters = {
    passLength: passLength,
    charSpecial: charSpecial,
    charLowerCase: charLowerCase,
    charUpperCase: charUpperCase,
    charNumber: charNumber
  };
  //debugger;

  console.log(passCharacters);
  return passCharacters;
}

function getRandomPass(arr) {
  var randomArray = Math.floor(Math.random() * arr.passLength);
  var randomChar = arr[randomArray];

  return randomChar;
}

function generatePassword() {
  var characters = getPassChar();
  var result = [];
  var passVariables = [];
  var selectedVariables = [];

console.log(characters);

  if (characters.charLowerCase) {
    passVariables = passVariables.concat(lowerCase);
    selectedVariables.push(getRandomPass(lowerCase));
  }

  if (characters.charUpperCase) {
    passVariables = passVariables.concat(upperCase);
    selectedVariables.push(getRandomPass(upperCase));
  }

  if (characters.charSpecial) {
    passVariables = passVariables.concat(special);
    selectedVariables.push(getRandomPass(special));
  }

  if (characters.charNumber) {
    passVariables = passVariables.concat(numbers);
    selectedVariables.push(getRandomPass(numbers));
  }

  for (var i = 0; i < characters.passLength; ++i) {
    var passVariable = getRandomPass(passVariables);

    result.push(passVariable);
  }

  for (var i = 0; i < selectedVariables.passLength; ++i) {
    result[i] = selectedVariables[i];
  }
  //debugger;
  return result.join('');
  
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

