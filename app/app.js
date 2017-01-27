angular.module('App',['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  //Setup states (aka routes)
  $stateProvider
  .state('homeState', {
    url: '/',
    component: 'browseList'
  })
  .state('browseState', {
    url: '/browse',
    component: 'browseList'
  })
  .state('profileShowState', {
    url: '/profile/:index',
    component: 'profileComp'
  })

  // // Removes # symbol for our routes
  $locationProvider.html5Mode(true);

  }
]);
