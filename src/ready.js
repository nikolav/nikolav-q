const doc = require("./doc_");
const vars_ = require("./vars_");
const Event_ = require("./event_");

const DOMContentLoaded = vars_.events.dom.ready;


module.exports = new Promise((resolve, reject) => {
  if ("complete" === doc.readyState) {
    resolve(new Event_(DOMContentLoaded));
  } else {
    doc.addEventListener(DOMContentLoaded, ready_);
  }

  //helpers
  function ready_(evt) {
    doc.removeEventListener(DOMContentLoaded, ready_);
    resolve(evt);
  }
});
