const reIsEmail = /^[^@]+@[^@]+\.[^@]+$/;
module.exports = {
  isEmail: (email) => reIsEmail.test(email),
};
