module.exports = (config) => {
  // config: {target|e:'element', type|on:'event', callback|run: 'function', useCapture|capture|options: boolean|object}
  // q.on({
  //     target|e           : 'element',
  //     type|on            : 'click',
  //     callback|run       : (evt) => {},
  //     options            : boolean|object
  // });
  return (config.target || config.e).addEventListener(
    config.type || config.on || "click",
    config.callback || config.run,
    config.options || config.useCapture || config.capture || false
  );
};
