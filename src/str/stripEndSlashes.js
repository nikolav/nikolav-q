const reSlashes = /^(.*?)(\/*)$/;
const strip = (_$0, $1, _$2) => $1;
//
module.exports = function stripEndSlashes(str = "") {
  return str.replace(reSlashes, strip);
};
