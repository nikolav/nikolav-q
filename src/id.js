const vars_ = require("./vars_");
const byid_ = require("./byid_");

const REGEX_GET_ID = vars_.regex["get.id"];

const id = (id_) => {
  return byid_(id_.replace(REGEX_GET_ID, (...args) => args[1])) || null;
};

module.exports = id;
