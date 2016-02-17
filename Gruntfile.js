/*
 * grunt-rtlcss
 * https://github.com/MohammadYounes/grunt-rtlcss
 *
 * Copyright (c) 2016 Mohammad Younes
 * Licensed under the MIT license.
 */
'use strict'

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    rtlcss: {
      default_options: {
        // task options
        options: {
          //default
        },
        files: {
          'tmp/default_options.css': 'test/fixtures/style.css'
        }
      },
      custom_options: {
        // task options
        options: {
          // generate source maps
          map: {inline: false},
          // rtlcss options
          opts: {
            clean: false
          },
          // save unmodified files
          saveUnmodified: true,
        },
        files: {
          'tmp/custom_options.css': 'test/fixtures/style.css'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  })

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks')

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-nodeunit')

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'rtlcss', 'nodeunit'])

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test'])

}
