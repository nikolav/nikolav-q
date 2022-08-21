const { has } = require("../object/has");
const paste = require("../init_");
//
const DEFAULT_EVENTS_CONFIG = { one: false };
//
const eventListener = (node = {}, config = {}) => {
  let e = {};
  config = { ...DEFAULT_EVENTS_CONFIG, ...config };

  return paste(node, {
    addEventListener: (eType, callback) => {
      if (true === config.one && (!has(e, eType) || 0 === e[eType].length)) {
        e[eType] = [callback];
        return;
      }
      //
      if (has(e, eType)) {
        e[eType] = [...e[eType], callback];
      } else {
        e[eType] = [callback];
      }
    },
    removeEventListener: (...args) => {
      let eType;
      let callback;
      //
      if (0 === args.length) {
        e = {};
        return;
      }
      //
      eType = args[0];
      if (1 === args.length) {
        if (has(e, eType)) {
          e[eType] = [];
        }
        return;
      }
      if (has(e, eType)) {
        callback = args[1];
        e[eType] = e[eType].filter((f) => f !== callback);
      }
    },
    triggerEvent: (eType, ...rest) => {
      if (has(e, eType)) e[eType].forEach((f) => f.apply(null, rest));
    },
  });
};

module.exports = {
  eventListener,
};
