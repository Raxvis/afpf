const lensArray = (func) => (params, ...rest) => Promise.all(params.map((value) => func(value, ...rest)));

const lensObject = (func) => async (params, ...rest) => {
	const records = await Promise.all(Object.keys(params).map((key) => func(params[key], ...rest)));

	return records.reduce((result, value, index) => Object.assign(result, { [Object.keys(params)[index]]: value }), {});
};

/**
 * Wraps a function and allows you to execute said function on each element in an object or array.
 *
 * Useful for complex / async mappings of arrays or objects
 *
 * @function
 * @since 0.0.1
 * @param {Function} func The function to be executed and inserted into the array or object
 * @returns {Function} A function which accepts an array or object and returns the array or object with each key processed by the initial function
 * @example
 *
 * const { lens } = require('afpf');
 *
 * const addBar = (el) => `${el}Bar`;
 * const wrappedFn = lens(addBar);
 * const output = wrappedFn(['foo']);
 * // => [ 'fooBar' ]
 *
 */

const lens = (func) => (params, ...rest) =>
	Array.isArray(params) ? lensArray(func)(params, ...rest) : lensObject(func)(params, ...rest);

module.exports = lens;
