/* global test, expect */

const fn = require('./../src');
const requestObj = { foo: 'bar' };

test('log returns params', async () => {
	await expect(fn.log(requestObj)).resolves.toEqual(requestObj);
});
