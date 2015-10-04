(function () {
  'use strict';
  /**
   * @desc order directive that is specific to the order module at a company named Acme
   * @example <div acme-order-calendar-range></div>
   */
  angular
      .module('divkick.components', [])
      .directive('fsDragDrop', dragAndDrop);


  function dragAndDrop() {

    function link(scope, el) {

      el.bind('drop', function (e) {
        e.preventDefault();

        for (var i = 0; i < e.dataTransfer.files.length; ++i) {
          console.log(e.dataTransfer.files[i].path);
        }
        return false;
      });
      el.bind('dragenter', function (e) {
        el.addClass('hover');
        var file = e.dataTransfer.files[0],
            reader = new FileReader();
        reader.onload = function (event) {
          console.log(event.target);
        };
        console.log(file);
        reader.readAsDataURL(file);

        return false;
      });
      el.bind('dragleave', function (e) {
        el.removeClass('hover');
        console.log('released');
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