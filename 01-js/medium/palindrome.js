/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const regex = /[^a-zA-Z]/g; //this means any char that is not a-z or A-Z

  // Use the replace method to remove special characters
  const cleanedString = str.replace(regex, "").toLowerCase();

  let n = cleanedString.length;

  for (let i = 0; i < n / 2; i++) {
    if (cleanedString[i] != cleanedString[n - i - 1]) return false;
  }

  return true;
}

module.exports = isPalindrome;
