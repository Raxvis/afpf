const constant = (func) => async (params) => {
	await func(params);

	return params;
};

module.exports = constant;
