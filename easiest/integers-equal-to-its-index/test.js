const solve = require('./index');

test('solve function exists', () => {
	expect(solve).toBeDefined();
});

test('Result of ([10, 20, 11, 12, 4]) must be 4', () => {
	expect(solve([10, 20, 11, 12, 4])).toEqual(4);
});

test('Result of ([2, 1, 11, 12, 4]) must be 1', () => {
	expect(solve([2, 1, 11, 12, 4])).toEqual(1);
});
