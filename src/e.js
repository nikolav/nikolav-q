const e_ = require("./e_");
const type = require("./type");

const defaults = {
  config: {
    name: "div",
  },
};

/**
 *
 * @param Object config
 * @returns Element
 */
const e = (config = {}) => {
  if (type.object !== type(config)) {
    config = { name: config };
  }
  config = { ...defaults.config, ...config };

  const node = e_(config.name);

  /**
   * todo attributes
   */

  return node;
};

e.defaults = defaults;

module.exports = e;
