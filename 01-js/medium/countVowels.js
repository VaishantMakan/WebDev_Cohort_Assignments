/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  // first we create a set containing vovels
  const set = new Set(["a", "e", "i", "o", "u"]);

  let total = 0;

  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();
    if (set.has(letter)) total += 1;
  }

  return total;
}

module.exports = countVowels;
