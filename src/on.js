module.exports = (config) => {
  // config: {target:'element', type|on:'event', callback|run: 'function', useCapture|capture: 'boolean'}
  // q.on({
  //     target             : 'element',
  //     type|on            : 'click',
  //     callback|run       : (evt) => {},
  //     useCapture|capture : false,
  // });
  return config.target.addEventListener(
    config.type || config.on || "click",
    config.callback || config.run,
    config.useCapture || config.capture || false
  );
};
