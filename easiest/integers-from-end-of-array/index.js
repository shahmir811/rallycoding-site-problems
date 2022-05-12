// STATEMENT
// You are given an array of integers and an integer K as arguments.
// Return a new array containing only integers that are K elements from the end of the array.
// Assume that the argument array will always be at least integer K in size.

// REQUIREMENTS
// - Must return an array of integers
// - Must handle both negative and positive integers

// EXAMPLES
// solve([1, 2, 3, 4], 2); -> [3, 4]
// solve([10, 20, 30, 40, 50, 60], 4); -> [30, 40, 50, 60]
// solve([1, -2, 3, -4], 1); -> [-4]

const solve = (array, k) => {
	const result = [];
	const startingIndex = array.length - k;

	for (let i = startingIndex; i < array.length; i++) {
		result.push(array[i]);
	}

	console.log(result);
	return result;
};

module.exports = solve;
