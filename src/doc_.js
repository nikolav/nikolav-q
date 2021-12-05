const noop = require("./noop");

module.exports =
  typeof document !== "undefined"
    ? document
    : {
        querySelectorAll: noop,
        querySelector: noop,
        getElementById: noop,
        addEventListener: noop,
        removeEventListener: noop,
        createElement: noop,
        readyState: "complete",
      };
