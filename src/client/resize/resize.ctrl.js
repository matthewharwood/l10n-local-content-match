(function () {
  'use strict';

  angular
      .module('divkick.resize', [])
      .controller('ResizeCtrl', ResizeCtrl);

  ResizeCtrl.$inject = ['FileTraversal', '$scope'];

  /* @ngInject */
  function ResizeCtrl(FileTraversal, $scope) {
    /* jshint validthis: true */
    var resize = this;
    console.log(resize, 'resize', FileTraversal);
    resize.activate = activate;
    resize.title = 'ResizeCtrl';
    resize.haystack = 'Base';
    resize.needle = 'Refactor';

    activate();

    ////////////////

    function activate() {
      $scope.$watchCollection(function () {
        return FileTraversal.stuff;
      }, function (newValue, oldValue) {
          console.log("check");
        if (newValue !== oldValue) {
          console.log(newValue);
        } else {
          console.log('nope');
        }
      });
    }


  }
})();

