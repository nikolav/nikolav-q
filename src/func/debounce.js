const debounce = (callback, timeout = 1234) => {
  let int_ = null;

  return (...args) => {
    // cancel function for manual calls
    clearInterval_();

    // schedule to run if no activity in `timeout` ms
    int_ = setTimeout(callback.bind(null, ...args), timeout);
  };

  function clearInterval_() {
    if (int_) {
      clearInterval(int_);
      int_ = null;
    }
  }
};

module.exports = { debounce };
