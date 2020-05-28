// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '  row 0 #=1 012 n-row-1 = 1
//       '###'  row 1 #=3 012 n-row-1 = 0
//   pyramid(4)
//      '   #   ' row 0 1 3
//      '  ###  ' row 1 3 234
//      ' ##### ' row 2 5 12345
//      '#######' row 3 7 01234567

//another math way is take midpoint and add row #s infront and behind it
//remove another for loop
function pyramid(n, row = 0, stair = '') {
	if (n === row) {
		return;
	}

	if (stair.length === 2 * n - 1) {
		console.log(stair);
		return pyramid(n, row + 1);
	}

	let mid = Math.floor((2 * n - 1) / 2);
	let add;
	if (stair.length >= mid - row && stair.length <= mid + row) {
		add = '#';
	} else {
		add = ' ';
	}
	pyramid(n, row, stair + add);
}

module.exports = pyramid;

// //recursion version, with some math
// function pyramid(n, row = 0, stair = '') {
// 	if (n === row) {
// 		return;
// 	}

// 	for (let i = 0; i < 2 * n - 1; i++) {
// 		if (i >= n - row - 1 && i <= n + row - 1) {
// 			stair += '#';
// 		} else {
// 			stair += ' ';
// 		}
// 	}
// 	console.log(stair);
// 	pyramid(n, row + 1, (stair = ''));
// }
//math method
// function pyramid(n) {
// 	for (let i = 1; i <= n; i++) {
// 		let m = 2 * i - 1;
// 		let s = n - i;
// 		console.log(' '.repeat(s) + '#'.repeat(m) + ' '.repeat(s));
// 	}
// }
