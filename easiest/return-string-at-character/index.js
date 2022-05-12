// STATEMENT
// You are given a string containing multiple newline characters \n and a positive integer K,
// representing the line number, as arguments. Return the line of text at integer K.
// Newline character should be omitted from the returned string

// REQUIREMENTS
// - Must return a string
// - Must work with spaces separating words in the string
// - Must work with lower and uppercase characters.

// EXAMPLES
// solve("apples\nmilk\nbread\nfish\n", 2) -> milk
// solve("Beverly Hills\nSagaponack\nSanta Monica\n", 1) -> Beverly Hills

const solve = (str, k) => {
	const result = str.split('\n');
	return result[k - 1];
};

module.exports = solve;
