angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.discover', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/discover.html',
        controller: 'discoverCtrl'
      }
    }
  })

  .state('tabsController.categories', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/categories.html',
        controller: 'categoriesCtrl'
      }
    }
  })

  .state('tabsController.me', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/me.html',
        controller: 'meCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('page5', {
    url: '/page5',
    templateUrl: 'templates/page5.html',
    controller: 'page5Ctrl'
  })

  .state('registerUser', {
    url: '/page6',
    templateUrl: 'templates/registerUser.html',
    controller: 'registerUserCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});