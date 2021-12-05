const doc = require("./src/doc_");
const slice_ = require("./src/slice_");
const init_ = require("./src/init_");
const qsa_ = require("./src/qsa_");
const s = require("./src/qs_");
const id = require("./src/id");
const on = require("./src/on");
const off = require("./src/off");
const ready = require("./src/ready");
const type = require("./src/type");
const e = require("./src/e");

module.exports = init_(qsa_, {
  s,
  id,
  on,
  off,
  ready,
  e,
  class: {},
  to: {
    array: slice_,
  },
  type,
});
