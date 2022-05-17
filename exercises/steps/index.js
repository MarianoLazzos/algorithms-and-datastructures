// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//My Solution
// function steps(n) {
//   let stair = '';

//   for (let i = 1; i <= n; i++) {
//     stair = '#'.repeat(i) + ' '.repeat(n - i);
//     console.log(stair);
//   }
// }

//First Solution
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }

//Second Solution (Recursion)
function steps(n, row = 0, stair = '') {
  if (n === row) return;

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  // if (stair.length <= row) {
  //   stair += '#';
  // } else {
  //   stair += ' ';
  // }
  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

module.exports = steps;
