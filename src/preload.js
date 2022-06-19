//
module.exports = (...images) =>
  Promise.all(
    images.map(
      (src) =>
        new Promise((resolve, _reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onabort = resolve;
          img.onerror = resolve;
          img.src = src;
        })
    )
  );

//   "http://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/2000px-Flag_of_the_United_Nations.svg.png",
//   "http://upload.wikimedia.org/wikipedia/commons/e/e5/IBM_Port-A-Punch.jpg",
//   "http://upload.wikimedia.org/wikipedia/commons/7/7e/Tim_Berners-Lee_CP_2.jpg",
//   "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/2000px-NewTux.svg.png",
//   "http://upload.wikimedia.org/wikipedia/commons/4/4c/Beekeeper_keeping_bees.jpg",
//   "http://upload.wikimedia.org/wikipedia/commons/9/9a/100607-F-1234S-004.jpg"
