// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//regex
//[x] -> inclues chars in x
//g -> dont stop when found
//i -> case insensitive
function vowels(str) {
	const matches = str.match(/[aeiou]/gi);
	if (matches) {
		return matches.length;
	} else {
		return 0;
	}
}

module.exports = vowels;

//first method

// function vowels(str) {
// 	let count = 0;
// 	let checker = ['a', 'e', 'i', 'o', 'u'];
// 	for (char of str.toLowerCase()) {
// 		if (checker.includes(char)) {
// 			count++;
// 		}
// 	}
// 	return count;
// }
