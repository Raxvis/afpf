/* global test, expect */

const fn = require('./../src');
const requestObj = { foo: 'bar' };

test('constant returns params', async () => {
	await expect(fn.constant((output) => console.log(output))(requestObj)).resolves.toEqual(requestObj);
});

test('constant handles multiple params', async () => {
	await expect(fn.constant((output) => console.log(output))(requestObj, 'baz')).resolves.toEqual(requestObj);
});
