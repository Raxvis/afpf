/* eslint no-await-in-loop: off */

const pipe = (...funcs) => async (param, ...rest) => {
	let response = await funcs[0](param, ...rest);

	for (let i = 1; i < funcs.length; i += 1) {
		response = await funcs[i](response, ...rest);
	}

	return response;
};

module.exports = pipe;
