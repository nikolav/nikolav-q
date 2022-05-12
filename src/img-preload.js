const cache_ = {};
const { noop } = require("./func");
const { has } = require("./object");
//

module.exports = (callback = noop, ...images) => {
  // counter/flag to signal the download end
  let n = 0;
  // array to hold Image objects
  const P = [];
  //
  images = images.filter((img) => !has(cache_, img));

  // abort if no images provided; run passed function anyway
  if (0 === images.length) {
    callback.apply(null, images);
    return images;
  }

  // starts download
  for (let i = 0, len = images.length, src; i < len; i++) {
    src = images[i];
    //
    P[i] = new Image();
    P[i].onabort = load_handler;
    P[i].onerror = load_handler;
    P[i].onload = load_handler;
    //
    cache_[src] = Date.now();
    P[i].src = src;
    //
  }

  // images to download
  return images;
  //
  // keep track of number of 'load-handler' calls
  function load_handler(e) {
    console.log(e.type, " -- > ", this.src);
    ++n === images.length && callback.apply(null, images);
  }
};
//
//
// use:
//
// imgPreload(
//
//   // run callback when download completes
//   function (...args) {
//     console.log("done -> ", args);
//   },
//   // 
//   "http://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/2000px-Flag_of_the_United_Nations.svg.png",
//   "http://upload.wikimedia.org/wikipedia/commons/e/e5/IBM_Port-A-Punch.jpg",
//   "http://upload.wikimedia.org/wikipedia/commons/7/7e/Tim_Berners-Lee_CP_2.jpg",
//   "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/2000px-NewTux.svg.png",
//   "http://upload.wikimedia.org/wikipedia/commons/4/4c/Beekeeper_keeping_bees.jpg",
//   "http://upload.wikimedia.org/wikipedia/commons/9/9a/100607-F-1234S-004.jpg"
// );

//
