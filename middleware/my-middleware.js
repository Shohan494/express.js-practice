module.exports = function(options) {
  return function(req, res, next) {
    return options;
    next()
  }
}