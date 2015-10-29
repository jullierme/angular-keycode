(function(){
    'use strict';

    angular.module('angular-keycode',[])
        .factory('KeyCode', KeyCode);

    function KeyCode(){
        return {
            ENTER:13,
            TAB:77
        }
    }
})();