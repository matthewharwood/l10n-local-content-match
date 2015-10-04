(function () {
  angular
      .module('divkick.container', [])
      .controller('ContainerCtrl', ContainerCtrl)


  /* @ngInject */
  function ContainerCtrl( ) {
    /* jshint validthis: true */
    var main = this;
   
    //
    main.title = 'div kick';

    activate();

    ////////////////

    function activate() {
      console.log(main.title)
    }
  }
})();

