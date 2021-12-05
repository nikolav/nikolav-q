const doc = require("./doc_");
const slice_ = require("./slice_");
const qsa__ = doc.querySelectorAll.bind(doc);
module.exports = (...args) => slice_(qsa__(...args));
