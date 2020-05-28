// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  })
}

module.exports = palindrome;


//best way
// function palindrome(str) {
//   reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

//omg i am so dumb
// function palindrome(str) {
//   middleIndex = str.length % 2 ? (str.length - 1) / 2 : null;
//
//   if (middleIndex) {
//     str = str.split("");
//     str1 = str.splice(0, middleIndex); //remove middle characters
//     str2 = str.splice(1, middleIndex).reverse();
//     if (str1.join("") == str2.join("")) {
//       return true;
//     }
//   } else {
//     half = str.length / 2;
//     str = str.split("");
//     str1 = str.splice(0, half); //remove middle characters
//     str2 = str.reverse();
//     if (str1.join("") == str2.join("")) {
//       return true;
//     }
//   }
//   return false;
// }

// function palindrome(str) {
//
//   str = str.split("");
//   if (str.length % 2) {
//     str.splice(((str.length-1)/2), 1)
//   }
//
//   str1 = str.splice(0, str.length / 2);
//   str2 = str.reverse();
//   if (str1.join("") == str2.join("")) {
//     return true;
//   } else {
//     return false;
//   }
// }
