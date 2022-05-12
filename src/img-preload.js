const cache_ = {};

module.exports = (src) =>
  new Promise((resolve, reject) => {
    if (src in cache_) return src;

    const image = new Image();

    image.onload = (evt) => {
      cache_[src] = 1;
      resolve(evt);
    };
    image.onerror = (error) => {
      cache_[src] = 1;
      reject(error);
    };

    image.src = src;
    //
    return src;
  });
