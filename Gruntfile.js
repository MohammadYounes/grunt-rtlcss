/*
 * grunt-rtlcss
 * https://github.com/myounes/grunt-rtlcss
 *
 * Copyright (c) 2014 Mohammad Younes
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  
    // Configuration to be run.
    rtlcss: {
      'default':{
        options:{
          // configure rtlcss options  
          config:{
            
          }
        },
        expand : true,
        cwd    : 'ltr/',
        dest   : 'rtl/',
        src    : ['**/*.css']
      }
    }
          
  });

  // Load grunt-rtlcss task.
  grunt.loadNpmTasks('grunt-rtlcss');
  
  // Register rtlcss task 
  grunt.registerTask('default', ['rtlcss']);
};
