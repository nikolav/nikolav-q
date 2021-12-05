const doc = require("./doc_");
const vars_ = require("./vars_");
const noop = require("./noop");

const DOMContentLoaded = vars_.events.dom.ready;

const Evt = typeof Event !== "undefined" ? Event : noop;

module.exports = new Promise((resolve, reject) => {
  if ("complete" === doc.readyState) {
    resolve(new Evt(DOMContentLoaded));
  } else {
    doc.addEventListener(DOMContentLoaded, ready_);
  }

  //helpers
  function ready_(evt) {
    doc.removeEventListener(DOMContentLoaded, ready_);
    resolve(evt);
  }
});
