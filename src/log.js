const constant = require('./constant');

/**
 * A simple wrapper that console.logs all parameters sent to it
 *
 * @function
 * @since 0.0.1
 * @param {Any} params The parameter to be logged and returned
 * @returns {Any} First parameter passed to it
 * @example
 *
 * const { log } = require('afpf');
 *
 * const output = log(['foo']);
 * // => console.log(["foo"]);
 * // => output = ['foo'];
 *
 */

const log = constant((...params) => console.log(JSON.stringify(params, 4, null)));

module.exports = log;
