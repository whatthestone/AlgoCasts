// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//impressive version
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;

// function reverse(str) {
//   var string = str.split("");
//   var reverseArray = string.reverse();
//   return string.join("");
// }

// *** avoid using for loops as it is easily mistakable ***
// function reverse(str) {
//   var string = [];
//   str = str.split("");
//   for (i=str.length-1; i>=0; i--){
//     string.push(str[i]);
//   }
//   return string.join("")
// }


// function reverse(str) {
//   var string = '';
//   for (let letter of str) {
//     string = letter + string;
//   }
//   return string
// }
