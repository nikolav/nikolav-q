module.exports = (node, callback) => {
  return node.classList.forEach(each_, { callback, node });
};

// helpers
function each_(className, i, clsList) {
  return this.callback.call(this.node, className);
}
