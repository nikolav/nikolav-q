const type = require("../type");
const isString = (node) => type.string === type(node);
//
module.exports = isString;
