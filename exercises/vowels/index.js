// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//My Solution
// function vowels(str) {
//   let vowelsCounter = 0;
//   // const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
//   const vowelsArr = 'aeiou';

//   for (let char of str.toLowerCase()) {
//     // if (vowelsArr.indexOf(char) !== -1) {
//     //   vowelsCounter++;
//     // }
//     if (vowelsArr.includes(char)) {
//       vowelsCounter++;
//     }
//   }
//   return vowelsCounter;
// }

//Second Solution (Regex)
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
