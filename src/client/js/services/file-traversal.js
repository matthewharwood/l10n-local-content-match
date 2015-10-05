(function () {
  "use strict";
  var fs = require('fs');
  var glob = require("glob");
  angular
      .module('divkick.services', [])
      .factory('FileTraversal', FileTraversal);


  /* @ngInject */
  function FileTraversal() {
    var service = {
      stuff: {},
      check: check
    };

    return service;

    ////////////////

    function check(filePath, name) {
      glob(filePath + '/**/*{.png,.jpg,.gif}', function (er, files) {
        if (er) return er;
        if (name === 'Needle') {
          service.stuff.Needle = files.map(function (entry) {
            var newEntry = entry.regexLastIndexOf(/[a-z]{2}-[a-z]{2}|[a-z]{2}_[a-z]{2}/g);
            var sliceEntry = entry.slice(newEntry)
            var fileArr = sliceEntry.split('/');
            var newFileArr = {
                locale: fileArr[0],
                path: ''
            };
            fileArr.shift();
            newFileArr.path = fileArr.join('/');
            return newFileArr;
          });
          console.log(service.stuff);
        } else {
          service.stuff.Haystack = files.map(function (entry) {
            var newEntry = entry.regexLastIndexOf(/images/g);
            var sliceEntry = entry.slice(newEntry)
            var fileArr = sliceEntry.split('/');
            fileArr.shift();
            return fileArr.join('/');
          });
          console.log(service.stuff.Haystack)
        }

      });
    }
  }
})();


