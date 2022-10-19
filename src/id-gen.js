let ID = 1;
// 
module.exports = () => {
  const s = parseInt(Math.random() * Date.now() * ID++, 10);
  return s.toString(32).slice(2);
};
