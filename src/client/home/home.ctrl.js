(function () {
  'use strict';

  angular
      .module('divkick.home', [])
      .controller('HomeCtrl', HomeCtrl);

  //HomeCtrl.$inject = [''];

  /* @ngInject */
  function HomeCtrl() {
    console.log('sdfsdf')
    /* jshint validthis: true */
    var home = this;

    home.activate = activate;
    home.title = 'HomeCtrl';

    activate();

    ////////////////

    function activate() {
      console.log('yao')
    }


  }
})();

