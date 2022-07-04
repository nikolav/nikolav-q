const init_ = require("./init_");
const type = Function.prototype.call.bind(Object.prototype.toString);

init_(type, {
  object: type(Object.prototype), 
  string: type("."),
});

module.exports = type;
