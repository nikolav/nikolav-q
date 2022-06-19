//
module.exports = function arrayDivide(array, numOfParts = 2) {
  let res = [];
  for (
    let 
      i = numOfParts, 
      a = [...array]; 
    i > 0; 
    i--) {
    res.push(a.splice(0, Math.ceil(a.length / i)));
  }
  return res;
};
