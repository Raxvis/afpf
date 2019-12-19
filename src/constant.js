/**
 * Wraps a function and allows you to execute said function without changing the initial parameter
 *
 * Useful for wrapping loggers, timers and other no-op functions
 *
 * @function
 * @since 0.0.1
 * @param {Function} func The function to be wrapped
 * @returns {Function} The wrapped function which returns the first parameter
 * @example
 *
 * const { constant } = require('afpf');
 *
 * const log = (message) => console.log(message);
 * const wrappedLog = constant(log);
 * const output = wrappedLog('test');
 * // => 'test'
 *
 */

const constant = (func) => async (params, ...rest) => {
	await func(params, ...rest);

	return params;
};

module.exports = constant;
