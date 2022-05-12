const has_ = Function.prototype.call.bind(Object.prototype.hasOwnProperty);

module.exports = {
  has: (node, key) => has_(node, key),
};
