const solve = require('./index');

test('solve function exists', () => {
	expect(solve).toBeDefined();
});

test("Result of ('apples\nmilk\nbread\nfish\n', 2) must be 'milk'", () => {
	expect(solve('apples\nmilk\nbread\nfish\n', 2)).toEqual('milk');
});

test("Result of ('Beverly Hills\nSagaponack\nSanta Monica\n', 1) must be 'Beverly Hills'", () => {
	expect(solve('Beverly Hills\nSagaponack\nSanta Monica\n', 1)).toEqual('Beverly Hills');
});
