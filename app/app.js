angular.module('App',['ui.router'])
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  //Setup states (aka routes)
  $stateProvider
  .state('homeState', {
    url: '/',
    component: 'homeComp'
  })
  .state('browseState', {
    url: '/browse',
    component: 'browseList'
  })
  .state('profileState', {
    url: '/profile',
    component: 'profileComp'
  })

  // // Removes # symbol for our routes
  // $locationProvider.html5Mode(true);

  }
]);
