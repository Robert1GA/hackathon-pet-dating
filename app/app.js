angular.module('App',['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  //Setup states (aka routes)
  $stateProvider
  .state('homeState', {
    url: '/',
    component: 'homeComp'
  })
  .state('browseState', {
    url: '/browseState',
    component: 'browseComp'
  })
  .state('profileState', {
    url: '/profile',
    component: 'profileComp'
  })

  //Removes # symbol for our routes
  $locationProvider.html5Mode(true);

  }
]);
