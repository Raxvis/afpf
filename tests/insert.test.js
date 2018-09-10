/* global test, expect */

const fn = require('./../src');
const requestObj = { foo: 'bar' };
const insertObj = {
	baz: 'bar',
	foo: 'bar',
};
const sleep = (params) =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(params);
		}, 10);
	});

test('insert handles arrays', async () => {
	await expect(fn.insert(3, () => 'x')([1, 2, 3, 4])).resolves.toEqual([1, 2, 'x', 3, 4]);
});

test('insert handles arrays with promise', async () => {
	await expect(fn.insert(3, () => sleep('x'))([1, 2, 3, 4])).resolves.toEqual([1, 2, 'x', 3, 4]);
});

test('insert handles objects', async () => {
	await expect(fn.insert('baz', () => 'bar')(requestObj)).resolves.toEqual(insertObj);
});

test('insert handles objects with promise', async () => {
	await expect(fn.insert('baz', () => sleep('bar'))(requestObj)).resolves.toEqual(insertObj);
});
