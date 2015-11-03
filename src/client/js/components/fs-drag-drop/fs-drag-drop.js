(function () {
  'use strict';
  /**
   * @desc order directive that is specific to the order module at a company named Acme
   * @example <div acme-order-calendar-range></div>
   */

  angular
      .module('divkick.components', [])
      .directive('fsDragDrop', dragAndDrop);

  dragAndDrop.$inject = ['FileTraversal'];
  function dragAndDrop(FileTraversal) {

    function link(scope, el, attrs) {

      el.bind('drop', function (e) {
        e.preventDefault();
        FileTraversal[scope.dropName](e.dataTransfer.files[0].path, scope.dropName);
        return false;
      });
      el.bind('dragenter', function (e) {
        el.addClass('hover');
        return false;
      });
      el.bind('dragleave', function (e) {
        el.removeClass('hover');
        return false;
      })
    }

    return {
      restrict: 'A',
      link: link,
      templateUrl: './js/components/fs-drag-drop/fs-drag-drop.html',
      scope: {
        'dropName': '@',
        'dropData': '&'
      }
    };
  };
})();