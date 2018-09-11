/* eslint no-await-in-loop: off */

/**
 * A function to execute a list of functions in order, passing the response to each function as the initial parameter
 *
 * @function
 * @since 0.0.1
 * @param {Function} func Functions to be executed syncronously with their results passing to the next function
 * @returns {Function} Function that will execute each function in order while passing the parameters to each function
 * @example
 *
 * const pipe = require('afpf/pipe');
 *
 * const fn1 = (message) => `New Message: ${message}`;
 * const fn2 = (message, date) => `${date} | ${message}`;
 * const fn3 = (message, date, prefix) => `${prefix} === ${message}`;
 *
 * const output = pipe(fn1, fn2, fn3)('Hello World', '01-01-2018', 'FooBar');
 * // => 'FooBar === 01-01-2018 | New Message: Hello World'
 *
 */

const pipe = (...funcs) => async (param, ...rest) => {
	let response = await funcs[0](param, ...rest);

	for (let i = 1; i < funcs.length; i += 1) {
		response = await funcs[i](response, ...rest);
	}

	return response;
};

module.exports = pipe;
