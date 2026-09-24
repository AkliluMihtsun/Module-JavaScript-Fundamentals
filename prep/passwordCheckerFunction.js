// Already have the password stored in a variable
const password = "secretword123";

// Receive the value which the user entered

function checkPassword(userInput) {
  // Compare the two values
  return userInput === password;
}
const outPut = checkPassword("jhkhkj");

console.log(outPut);
