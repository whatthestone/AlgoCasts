// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  stringA.replace(/[^\w]/g, "").toLowerCase;
  stringB.replace(/[^\w]/g, "").toLowerCase;

  map = {};
  //adding stringA to map
  for (char of stringA) {
    map[char] ? (map[char] = map[char] + 1) : (map[char] = 1);
  }

  //removing from stringA using stringB
  for (char of stringB) {
    //if last one just remove the item
    if (map[char] === 1) {
      delete map[char];
    } else if (map[char]) {
      map[char] = map[char] - 1;
    } else {
      return false;
    }
  }

  return map.length ? false : true;
}

module.exports = anagrams;
