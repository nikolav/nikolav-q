module.exports = (target, setup) => {
  Object.keys(setup).forEach(paste_, { target, setup });
  return target;
};

function paste_(prop) {
  this.target[prop] = this.setup[prop];
}
