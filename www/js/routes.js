angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.tartalom', {
      url: '/tartalom',
      views: {
        'tab1': {
          templateUrl: 'templates/tartalom.html',
          controller: 'tartalomCtrl'
        }
      }
    })
        
      
    
      
        
    .state('cameraTabDefaultPage', {
      url: '/page3',
      templateUrl: 'templates/cameraTabDefaultPage.html',
      controller: 'cameraTabDefaultPageCtrl'
    })
        
      
    
      
        
    .state('tabsController.cartTabDefaultPage', {
      url: '/page4',
      views: {
        'tab2': {
          templateUrl: 'templates/cartTabDefaultPage.html',
          controller: 'cartTabDefaultPageCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.cloudTabDefaultPage', {
      url: '/page5',
      views: {
        'tab3': {
          templateUrl: 'templates/cloudTabDefaultPage.html',
          controller: 'cloudTabDefaultPageCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page2',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page2/tartalom');

});