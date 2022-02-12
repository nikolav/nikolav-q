const text_ = (el, text = null) => {
  const { nodeType } = el;

  if (null == text)
    return nodeType === 1 || nodeType === 9 || nodeType === 11
      ? el.textContent
      : el.nodeValue;

  if (nodeType === 1 || nodeType === 11 || nodeType === 9) {
    el.textContent = text;
  }

  return text;
};

module.exports = text_;
