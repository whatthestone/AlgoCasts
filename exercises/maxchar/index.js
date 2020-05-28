// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};
  for (var char of str) {
    chars[char] ? chars[char]++ : (chars[char] = 1);
  }

  let maxlen = 0;
  let maxchar = null;
  for (var char in chars) {
    if (chars[char] > maxchar) {
      maxlen = chars[char];
      maxchar = char;
    }
  }

  return maxchar;
}

module.exports = maxChar;
