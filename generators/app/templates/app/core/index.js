module.exports = function(app) {
  app.config(require('./app-config'));
  app.run(require('./app-run'));
};
