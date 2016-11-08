var fs = require('fs');

module.exports = function(grunt){
  'use strict';

  // CONFIGURE TASKS
  grunt.initConfig({
    prop: 'some property',
    pkg: grunt.file.readJSON('package.json'),
    test: {
      taskOwner: 'Theresa',
      src: 'grunt/js/test.js',
      dest: 'somefile.js',
      options: {
        comment: '/* <%= pkg.author %> */'
      }
    },
    jshint: {
      src: ['server/public/scripts/*.js']
    },
    uglify: {
      dist: {
        files: {
          'grunt/graphics.min.js' : 'server/public/scripts/graphics.js'
        }
      },
      options: {
        sourceMap: true
      }
    },
    cssmin: {
      dist: {
        files: {
          'grunt/css.min.js' : 'server/public/styles/main.css'
        }
      },
      options: {
        sourceMap: true
      }
    }
  });

  // LOAD NPM GRUNT MODULES
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // DEFAULT
  grunt.registerTask('default', function(){
    grunt.log.writeln('default task running!');
  });

  // TEST
  grunt.registerTask('test', 'an example task', ['jshint', 'uglify', 'cssmin']);
}
