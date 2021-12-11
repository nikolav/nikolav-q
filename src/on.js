module.exports = (config) => {
  // config: {target:'element', type|on:'event', callback|run: 'function', useCapture|capture|options: boolean|object}
  // q.on({
  //     target             : 'element',
  //     type|on            : 'click',
  //     callback|run       : (evt) => {},
  //     options            : boolean|object
  // });
  return config.target.addEventListener(
    config.type || config.on || "click",
    config.callback || config.run,
    config.options || config.useCapture || config.capture || false
  );
};
