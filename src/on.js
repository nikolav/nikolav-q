module.exports = (config) => {
  return config.node.addEventListener(
    config.e || "click",
    config.run,
  );
};
