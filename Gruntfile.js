module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
      jasmine: {
        pivotal: {
      src: 'lib/jasmine_examples/*.js',
      options: {
        specs: 'spec/jasmine_examples/*.js',
        helpers: 'spec/helpers/jasmine_examples/*.js'
      }
    }
  }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
};
