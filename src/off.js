module.exports = (config) => {
  return config.node.removeEventListener(
    config.e || "click",
    config.run,
  );
};
