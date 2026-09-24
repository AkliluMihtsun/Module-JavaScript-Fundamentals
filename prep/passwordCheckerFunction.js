// Already have the password stored in a variable
const password = "secretword123";

// Receive the value which the user entered

function checkPassword(userInput) {
  // Compare the two values
  let response;
  if (userInput === password) {
    // If they match print "Correct password entered"
    response = "Correct password entered";
    //console.log("Correct password entered");
  } else {
    // If they don't match print "Incorrect password, please try again"
    response = "Incorrect password, please try again";
    //console.log("Incorrect password, please try again");
  }
  return response;
}
//checkPassword("sdhglsg");
const outPut = checkPassword("gasagag");
console.log(outPut);
