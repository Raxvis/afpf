const insertArray = (index, func) => async (params, ...rest) => [
	...params.slice(0, index - 1),
	await func(params, ...rest),
	...params.slice(index - 1),
];

const insertObject = (index, func) => async (params, ...rest) =>
	Object.assign(params, { [index]: await func(params, ...rest) });

/**
 * Wraps a function and allows you to execute said function without changing the initial parameter.
 *
 * Useful for composing objects or arrays
 *
 * @function
 * @since 0.0.1
 * @param {String|Int} index The index on the array or object that is being inserted
 * @param {Function} func The function to be executed and inserted into the array or object
 * @returns {Function} A function which accepts an array or object and returns the array or object with the inserted value
 * @example
 *
 * const insert = require('afpf/insert');
 *
 * const addFoo = () => 'bar';
 * const wrappedFn = insert('foo', addFoo);
 * const output = wrappedFn({});
 * // => { foo: 'bar' }
 *
 */

const insert = (index, func) => (params) =>
	Array.isArray(params) ? insertArray(index, func)(params) : insertObject(index, func)(params);

module.exports = insert;
