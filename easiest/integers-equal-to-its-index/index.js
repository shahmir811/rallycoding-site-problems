// STATEMENT
// You are given an array of non-negative integers as an argument.
// Return the first element found in the array whose index is equal to its value.

// REQUIREMENTS
// - Must return a single integer
// - If there are multiple integers found must return only the first occurrence.

// EXAMPLES
// solve([10, 20, 11, 12, 4]); -> 4
// solve([2, 1, 11, 12, 4]); -> 1

const solve = array => {
	for (let index = 0; index < array.length; index++) {
		if (index === array[index]) {
			return index;
		}
	}
};

module.exports = solve;
