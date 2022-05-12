const solve = require('./index');

test('solve function exists', () => {
	expect(solve).toBeDefined();
});

test('Result of ([1, 2, 3, 4], 2) must be [3, 4]', () => {
	expect(solve([1, 2, 3, 4], 2)).toEqual([3, 4]);
});

test('Result of ([10, 20, 30, 40, 50, 60], 4) must be [30, 40, 50, 60]', () => {
	expect(solve([10, 20, 30, 40, 50, 60], 4)).toEqual([30, 40, 50, 60]);
});

test('Result of ([1, -2, 3, -4], 1) must be [-4]', () => {
	expect(solve([1, -2, 3, -4], 1)).toEqual([-4]);
});
