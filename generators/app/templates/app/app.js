// require app styles
require('./sass/main.scss');

// require vendor dependencies
let angular = require('angular');
require('angular-local-storage');
require('angular-ui-router');

var app = angular.module('<%= appName %>', [

  // vendor dependencies
  'LocalStorageModule',
  'ui.router'

]);

// app components
require('./filters')(app);
require('./services')(app);
require('./core')(app);
require('./components')(app);
require('./pages')(app);
