(function () {
  "use strict";
  angular.module('divkick', [
    'ui.router',
    'divkick.services',
    'divkick.components',
    'divkick.container',
    'divkick.home',
    'divkick.resize'
  ])
      .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        var rename = {
          name: 'rename',
          url: '/rename',
          templateUrl: './rename/rename.html',
          controller: 'ContainerCtrl',
          controllerAs: 'container'
        };
        var home = {
          name: 'home',
          url: '/home',
          templateUrl: './home/home.html',
          controller: 'HomeCtrl',
          controllerAs: 'home'
        };
        var resize = {
          name: 'resize',
          url: '/resize',
          templateUrl: './resize/resize.html',
          controller: 'ResizeCtrl',
          controllerAs: 'resize'
        };
        $stateProvider
            .state(rename)
            .state(home)
            .state(resize);
      }])
      .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }]);
})();


