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
    var locale = [
      /ALL_bg/g,
      /ALL_br/g,
      /ALL_cn/g,
      /ALL_cz/g,
      /ALL_de/g,
      /ALL_dk/g,
      /ALL_es/g,
      /ALL_fi/g,
      /ALL_fr/g,
      /ALL_gr/g,
      /ALL_hr/g,
      /ALL_hu/g,
      /ALL_id/g,
      /ALL_il/g,
      /ALL_it/g,
      /ALL_jp/g,
      /ALL_kr/g,
      /ALL_lt/g,
      /ALL_lv/g,
      /ALL_nl/g,
      /ALL_no/g,
      /ALL_pl/g,
      /ALL_pt/g,
      /ALL_ro/g,
      /ALL_rs/g,
      /ALL_ru/g,
      /ALL_se/g,
      /ALL_sk/g,
      /ALL_th/g,
      /ALL_tr/g,
      /ALL_tw/g,
      /ALL_ua/g,
      /ALL_vn/g,
      /ar_ALL/g,
      /en-GB_ALL/g,
      /hi_in/g,
      /ms_ALL/g
    ];
    return service;

    ////////////////

    function check(filePath, name) {
      glob(filePath + '/**/*{.png,.jpg,.gif}', function (er, files) {
        if (er) return er;
        if (name === 'Needle') {
          service.stuff.Needle = files.map(function (entry) {

            for (var i = 0; i < locale.length; ++i) {
              var testEntry = entry.regexLastIndexOf(locale[i]);
              if (testEntry >= 0) {
                var newEntry = testEntry;
              }
            }
            var sliceEntry = entry.slice(newEntry);
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


