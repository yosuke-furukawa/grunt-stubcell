module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stubcell: {
      test: {
        entry: "test/fixture/entry.yaml",
        port: 3000,
        record: {
          debug: true,
          target: "http://echo.jsontest.com"
        },
      }
    },
    mochaTest: {
        test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    }
  });
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.registerTask('test', ['stubcell:test', 'mochaTest']);
};
