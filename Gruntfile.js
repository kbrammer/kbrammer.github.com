/*!
 * Kevin's Gruntfile and stuff
 * http://kbrammer.github.io
 */

module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ["stylesheets"]
        },
        files: {
          "stylesheets/styles.css": "less/styles.less"
        }
      },
      production: {
        options: {
          paths: ["stylesheets"]
        },
        files: {
          "stylesheets/styles.css": "less/styles.less"
        }
      }
    },
    watch: {
      files: ['less/**/*'],
      tasks: ['less']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['less']);

}