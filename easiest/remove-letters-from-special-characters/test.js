const solve = require('./index');

test('solve function exists', () => {
	expect(solve).toBeDefined();
});

test("Result of ('((ab)(cd)()()df)') must be 'abcddf'", () => {
	expect(solve('((ab)(cd)()()df)')).toEqual('abcddf');
});
