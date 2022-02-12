const defaults = (...args) => {
  // object[]
  const config = {};
  for (let len = args.length; 0 < len; defaults_.call(config, args[--len]));

  return config;
};

module.exports = defaults;

function defaults_(setup) {
  const config = this;
}
