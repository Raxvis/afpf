const constant = require('./constant');

const log = constant((params) => console.log(JSON.stringify(params, 4, null)));

module.exports = log;
