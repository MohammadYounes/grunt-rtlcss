/*
 * grunt-rtlcss
 * https://github.com/myounes/grunt-rtlcss
 *
 * Copyright (c) 2014 Mohammad Younes
 * Licensed under the MIT license.
 */
module.exports = function(grunt) {
'use strict';
    
  grunt.registerMultiTask('rtlcss', 'grunt plugin for rtlcss, a framework for transforming CSS from LTR to RTL.', function() {

    // include rtlcss
    var rtlcss = require('rtlcss');
    
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      config:{
        preserveComments: true,
        preserveDirectives: false,
        swapLeftRightInUrl: true,
        swapLtrRtlInUrl: true,
        swapWestEastInUrl: true,
        autoRename: true,
        greedy: false,
        enableLogging: false,
        minify:false 
      },
      rules:[],
      declarations:[],
      properties:[]       
    });
    
    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // read specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      });
      
      // RTLCSS
      src =  rtlcss.process(src,
                    options.config,
                    options.rules,
                    options.declarations,
                    options.properties);

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
