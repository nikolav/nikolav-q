const noop = require("./noop");
module.exports = typeof Event !== "undefined" ? Event : noop;
