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
    
    var rtlcss = require('rtlcss');
    var postcss = require('postcss');    
    
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
      properties:[],
      map: false,
    });
    
    // postcss options
    var opt = { map: options.map, from:'', to:''};
    
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
        opt.from = filepath;
        // Read file source.
        return grunt.file.read(filepath);
      });
      
      // RTLCSS
      opt.to = f.dest;
      var processor = rtlcss(options.config,
                             options.rules,
                             options.declarations,
                             options.properties).postcss;
      
      var result =  postcss().use(processor).process(src,opt);

      // Write the destination file.
      grunt.file.write(f.dest, result.css);

      // Write the destination source map file.
      if(options.map)
        grunt.file.write(f.dest + '.map', result.map);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
