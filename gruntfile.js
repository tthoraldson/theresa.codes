var fs = require('fs');

module.exports = function(grunt){
  'use strict';

  // CONFIGURE TASKS
  grunt.initConfig({
    test: {
      taskOwner: 'Theresa',
      src: 'grunt/js/test.js',
      dest: 'somefile.js'
    },
    multi: {
      config1: {
        message: 'This is Config1',
        files: {
          'someotherfile.js': 'js/somefile.js'
        }
      },
      config2: {
        message: 'This is Config2'
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

    var done = this.async();
    fs.readFile(grunt.config.get('test.src'), function(error, data){
      fs.writeFile(grunt.config.get('test.dest'), data);
      done();
    });
  });

  // MULTITASK
  grunt.registerMultiTask('multi', 'An example of a MultiTask', function(){
    grunt.log.writeln(this.data.message);

    this.files.forEach(function(file){

    });
  });
}
