const lensArray = (func) => (params) => Promise.all(params.map((value) => func(value)));

const lensObject = (func) => async (params) =>
	(await Promise.all(Object.keys(params).map((key) => func(params[key])))).reduce(
		(result, value, index) => Object.assign(result, { [Object.keys(params)[index]]: value }),
		{},
	);

const lens = (func) => (params) => (Array.isArray(params) ? lensArray(func)(params) : lensObject(func)(params));

module.exports = lens;
