var bunyan = require('bunyan-lite');
var logger;

module.exports = function getLogger() {
  if (!logger) {
    logger = bunyan.createLogger({name: "fh-reporting"});
  }
  return logger;
};