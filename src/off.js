
// config.options: boolean|object
module.exports = (config) => {
  return config.target.removeEventListener(
    config.type || "click",
    config.callback,
    config.options || config.useCapture || config.capture || false
  );
};
