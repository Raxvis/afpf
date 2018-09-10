/* global test, expect */

const fn = require('./../src');
const requestObj = { foo: 'bar' };
const sleep = (params) =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(params);
		}, 10);
	});
const update = (params, replace) => {
	params.foo = replace;

	return params;
};

test('pipe handles multiple functions', async () => {
	await expect(
		fn.pipe(
			fn.log,
			fn.constant((output) => console.log(output)),
			sleep,
		)(requestObj),
	).resolves.toEqual(requestObj);
});

test('pipe handles multiple params', async () => {
	await expect(
		fn.pipe(
			fn.log,
			fn.constant((output) => console.log(output)),
			sleep,
			update,
		)(requestObj, 'baz'),
	).resolves.toEqual({ foo: 'baz' });
});
