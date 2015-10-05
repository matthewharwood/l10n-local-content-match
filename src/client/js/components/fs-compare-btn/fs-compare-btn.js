(function () {
  'use strict';
  /**
   * @desc order directive that is specific to the order module at a company named Acme
   * @example <div acme-order-calendar-range></div>
   */

  angular
      .module('divkick.components')
      .directive('fsCompareBtn', fsCompareBtn);

  fsCompareBtn.$inject = ['FileTraversal', '$timeout'];
  function fsCompareBtn(FileTraversal,$timeout) {

    function link(scope, el) {
      var errorLog = [];


      scope.compare = function(){

        errorLog = FileTraversal.stuff.Needle.filter(function(item){
          return !~FileTraversal.stuff.Haystack.indexOf(item.path);
        });
        console.log(errorLog);
      }
    }

    return {
      restrict: 'A',
      link: link,
      templateUrl: './js/components/fs-compare-btn/fs-compare-btn.html',
    };
  }
})();