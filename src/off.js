module.exports = (config) => {
  return config.target.removeEventListener(
    config.type || "click",
    config.callback,
    config.useCapture || false
  );
};
