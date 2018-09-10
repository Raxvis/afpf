const insertArray = (index, func) => async (params) => [
	...params.slice(0, index - 1),
	await func(params),
	...params.slice(index - 1),
];

const insertObject = (index, func) => async (params) => Object.assign(params, { [index]: await func(params) });

const insert = (index, func) => (params) =>
	Array.isArray(params) ? insertArray(index, func)(params) : insertObject(index, func)(params);

module.exports = insert;
