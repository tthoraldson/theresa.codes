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
    multi: {
      config1: {
        message: 'This is Config1',
        src: 'grunt/js/test.js',
        files: {
          'someotherfile.js': 'js/somefile.js'
        }
      },
      config2: {
        message: 'This is Config2',
        files: [
          {
            src: 'js/somefile.js',
            dest: 'someotherfile.js'
          }
        ]
      }
    }
  });

  // DEFAULT
  grunt.registerTask('default', function(){
    grunt.log.writeln('default task running...');
  });

  // TEST
  grunt.registerTask('test', 'an example task', function(){
    //grunt.config.requires('test.taskOwner');
    //grunt.log.writeln('hello');
    //grunt.log.writeln(grunt.config.get('test.taskOwner'));

    var comment = this.options().comment;

    var done = this.async();
    fs.readFile(grunt.config.get('test.src'), function(error, data){
      fs.writeFile(grunt.config.get('test.dest'), comment + ' \n ' + data);
      done();
    });
  });

  // MULTITASK
  grunt.registerMultiTask('multi', 'An example of a MultiTask', function(){
    grunt.log.writeln(this.data.message);

    this.files.forEach(function(file){
      grunt.log.writeln(file.src[0] + ' - ' + file.dest);
    });
  });
}
