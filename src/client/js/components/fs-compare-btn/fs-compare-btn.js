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

    function link(scope, el, attrs, ctrl) {
      var errorLog = [];


      scope.compare = function(){

        errorLog = FileTraversal.stuff.Needle.filter(function(item){
          return !~FileTraversal.stuff.Haystack.indexOf(item.path);
        });
        ctrl.pipeUp(errorLog);
      }
    }

    return {
      restrict: 'A',
      link: link,
      templateUrl: './js/components/fs-compare-btn/fs-compare-btn.html',
      require: '^fsComparePanel'
    };
  }

})();
(function(){
  "use strict";
  angular
      .module('divkick.components')
      .directive('fsComparePanel', fsComparePanel);
  
  function fsComparePanel() {
    function controller($scope) {
      this.pipeUp = function(errorLog){
        $scope.errlog = errorLog;
      };
    }

    return {
      restrict: 'A',
      controller: controller,
      template: '<p>{{errlog}}</p><div ng-transclude></div>',
      transclude: true
    };
  }
})()