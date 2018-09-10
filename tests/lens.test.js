/* global test, expect */

const fn = require('./../src');
const requestObj = { foo: 'bar' };
const sleep = (params) =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(params);
		}, 10);
	});

test('lens handles arrays', async () => {
	await expect(fn.lens((value) => value + 1)([1, 2, 3, 4])).resolves.toEqual([2, 3, 4, 5]);
});

test('lens handles arrays with promise', async () => {
	await expect(fn.lens((value) => value + 1)([1, 2, 3, 4])).resolves.toEqual([2, 3, 4, 5]);
});

test('lens handles objects', async () => {
	await expect(fn.lens(() => 'baz')(requestObj)).resolves.toEqual({ foo: 'baz' });
});

test('lens handles objects with promise', async () => {
	await expect(fn.lens((value) => sleep(value))(requestObj)).resolves.toEqual(requestObj);
});

test('lens handles multiple params', async () => {
	await expect(fn.lens((value, update) => update)(requestObj, 'baz')).resolves.toEqual({ foo: 'baz' });
});
