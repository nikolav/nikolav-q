const { noop } = require("./func");
module.exports = (callback = noop, ...rest) => {
  return function (evt) {
    evt.preventDefault();
    return callback.apply(this, rest);
  };
};
