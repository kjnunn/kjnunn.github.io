module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        concat: {
            js: {
                src: [
                    'bower_components/classie/classie.js',
                    'assets/js/*.js'
                ],
                dest: 'js/index.js'
            },
            css: {
                src: [
                    'assets/css/*.css'
                ],
                dest: 'css/index.css'
            }
        },

        uglify: {
            js: {
                src: '<%= concat.js.dest %>',
                dest: 'js/index.js'
            }
        },

        cssmin: {
            target: {
                files: {
                    'css/index.css': 'css/index.css'
                }
            }
        },

        copy: {
            main: {
                expand: true,
                cwd: 'assets/img/',
                src: ['{,*/}*.{png,jpg,gif}'],
                dest: 'img/'
            }
        },

        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: 'img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img'
                }]
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-image-resize');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'copy', 'imagemin']);
};

