// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// First Solution
function reverse(str) {
  return str.split('').reverse().join('');
}

//Second Solution
// function reverse(str) {
//   let reverse = '';

//   for (let character of str) {
//     reverse = character + reverse;
//   }

//   return reverse;
// }

//Third Solution
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

module.exports = reverse;
