// STATEMENT
// You are given a string that contains only characters and parenthesis as an argument.
// Return a string that has the parenthesis removed and contains only the characters.

// REQUIREMENTS
// - Must return a string

// EXAMPLES
// solve("(a)(b)((c))(((d)))") -> "abcd"
// solve("((ab)(cd)()()df)") -> "abcddf"

const solve = str => {
	return str.replace(/[^\w]/g, '');
};

module.exports = solve;
