// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# ' n=2, row=0,
//       '##' n=2, row=1
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//recursion method
function steps(n, row = 0) {
	if (n === row) {
		return;
	}

	// let stair = ''; << recurse this too??? and add stair inside parameters
	// for (let i = 0; i < n; i++) {
	// 	if (i <= row) {
	// 		stair += '#';
	// 	} else {
	// 		stair += ' ';
	// 	}
	// }

	console.log('#'.repeat(row + 1) + ' '.repeat(n - row - 1));
	steps(n, row + 1);
}

module.exports = steps;

// first attempt
// function steps(n) {
// 	for (var i = 1; i <= n; i++) {
// 		console.log('#'.repeat(i) + ' '.repeat(n - i));
// 	}
// }
