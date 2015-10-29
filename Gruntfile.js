(function(){
    'use strict';

    module.exports = function(grunt) {
        grunt.loadNpmTasks('grunt-contrib-uglify');

        grunt.initConfig({
            uglify: {
                keycode: {
                    files: {
                        'angular-keyboard.min.js': ['angular-keyboard.js']
                    }
                }
            }
        });
    };
})();