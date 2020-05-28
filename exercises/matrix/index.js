// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
	let results = new Array(n).fill(0).map(() => new Array(n).fill(0));
	let startCol = 0;
	let endCol = n - 1;
	let startRow = 0;
	let endRow = n - 1;
	let value = 1;

	while (startCol <= endCol && startRow <= endCol) {
		// for using value <= n*n as a while loop
		// if (value === n) {
		// 	results[startRow][i] = value;
		// 	break;
		// }
		//going L->R
		for (let i = startCol; i <= endCol; i++) {
			results[startRow][i] = value;
			value++;
		}
		startRow += 1;

		//going U->D
		for (let j = startRow; j <= endRow; j++) {
			results[j][endCol] = value;
			value++;
		}
		endCol -= 1;

		//going R->L
		for (let k = endCol; k >= startCol; k--) {
			results[endRow][k] = value;
			value++;
		}
		endRow -= 1;

		//going D->U
		for (let l = endRow; l >= startRow; l--) {
			results[l][startCol] = value;
			value++;
		}
		startCol += 1;
	}
	return results;
}

module.exports = matrix;
