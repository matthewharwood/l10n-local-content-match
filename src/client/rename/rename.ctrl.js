(function () {
  'use strict';
  angular
      .module('divkick.container', [])
      .controller('ContainerCtrl', ContainerCtrl);

  ContainerCtrl.$inject = ['FileTraversal', '$scope'];
  /* @ngInject */
  function ContainerCtrl(FileTraversal, $scope) {
    /* jshint validthis: true */
    var main = this;
    activate();

    ////////////////

    function activate() {
      $scope.$watchCollection(function () {
        return FileTraversal.stuff;
      }, function (newValue, oldValue) {
        console.log("check")
        if (newValue !== oldValue) {
          console.log(newValue);
        } else {
          console.log('nope');
        }
      });
    }
  }
})();

