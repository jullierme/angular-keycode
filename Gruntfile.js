(function(){
    'use strict';

    module.exports = function(grunt) {
        grunt.loadNpmTasks('grunt-contrib-uglify');

        grunt.initConfig({
            uglify: {
                keycode: {
                    files: {
                        'angular-keycode.min.js': ['angular-keycode.js']
                    }
                }
            }
        });
    };
})();