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
const text = require("./src/text_");
const prevent = require("./src/prevent");
const preload = require("./src/preload");
//
const arrayDivide = require("./src/array/divide");
const sortByTimestampDesc = require("./src/object/sortByTimestampDesc");
//
// import classes module
const classadd = require("./src/classes/add");
const classremove = require("./src/classes/rm");
const classtoggle = require("./src/classes/toggle");
const classlist = require("./src/classes/ls");
const classhas = require("./src/classes/has");
const classcount = require("./src/classes/len");
const classtostring = require("./src/classes/string");
const classeach = require("./src/classes/each");
//
const idGen = require("./src/id-gen");

// functions
const { debounce, noop } = require("./src/func");

// objects
const { has } = require("./src/object");

// test
const { isEmail, isString } = require("./src/test");

// array
const { rand } = require("./src/array");

// str
const stripEndSlashes = require("./src/str/stripEndSlashes");

//
const { eventListener } = require("./src/event-listener");
//
//
module.exports = init_(qsa_, {
  s,
  id,
  on,
  off,
  ready,
  e,
  eventListener,
  prevent,
  preload,
  idGen,
  class: {
    add: classadd,
    rm: classremove,
    toggle: classtoggle,
    ls: classlist,
    has: classhas,
    len: classcount,
    string: classtostring,
    each: classeach,
  },
  to: {
    array: slice_,
  },
  func: {
    noop,
    debounce,
  },
  object: {
    has,
    paste: init_,
  },
  array: {
    rand,
    divide: arrayDivide,
    sortByTimestampDesc,
  },
  type,
  text,
  test: {
    isEmail,
    isString,
  },
  str: {
    stripEndSlashes,
  },
});
