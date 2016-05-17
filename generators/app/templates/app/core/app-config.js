module.exports = function($urlRouterProvider, $locationProvider, localStorageServiceProvider) {
  "ngInject";

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
	localStorageServiceProvider.setStorageType('localStorage');

};
