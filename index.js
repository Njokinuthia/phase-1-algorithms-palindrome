function isPalindrome(word) {
  // Write your algorithm here
  // function isPalindrome
  // takes in string (input)
  //checks if letters forward make the same string reversed - return true
  //returns boolean - true for same comparison , false for otherwise
  
}

/* 
  Add your pseudocode here
  // function palindrome(string) {
    convert string to array
  checks characters going forwwards 
  checks reversed characters
  compares the two strings
  returns boolean 
  }
*/

/*
  Add written explanation of your solution here
*/

function isPalindrome(string){
  let reversedString = string.split('').reverse().join("")  
  // console.log(reversedString)
  return string === reversedString
  // console.log(string === reversedString)
 
}
isPalindrome("racecar")
isPalindrome("robot")


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
