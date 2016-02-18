/*
 * grunt-rtlcss
 * https://github.com/MohammadYounes/grunt-rtlcss
 *
 * Copyright (c) 2016 Mohammad Younes
 * Licensed under the MIT license.
 */
module.exports = function (grunt) {
  'use strict'

  grunt.registerMultiTask('rtlcss', 'grunt plugin for rtlcss, a framework for transforming CSS from LTR to RTL.', function () {
    var rtlcss = require('rtlcss'),
      chalk = require('chalk')

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      map: false,
      opts: {
        autoRename: false,
        autoRenameStrict: false,
        blacklist: {},
        clean: true,
        greedy: false,
        processUrls: false,
        stringMap: []
      },
      plugins: [],
      saveUnmodified: true,
    })

    // postcss options
    var postcssOptions = { map: options.map, from: '', to: ''}

    // Iterate over all specified file groups.
    this.files.forEach(function (f) {
      // read specified files.
      var src = f.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file ' + chalk.cyan(filepath) + ' not found.')
          return false
        } else {
          return true
        }
      }).map(function (filepath) {
        postcssOptions.from = filepath
        // Read file source.
        return grunt.file.read(filepath)
      })

      // RTLCSS
      postcssOptions.to = f.dest
      var result = rtlcss.configure({options:options.opts,plugins:options.plugins}).process(src, postcssOptions)

      if (!options.saveUnmodified && result.css == src) {
        grunt.log.writeln('Skip saving unmodified file ' + chalk.cyan(f.src) + '.')
      } else {
        // Write the destination file.
        grunt.file.write(f.dest, result.css)

        // Write the destination source map file.
        if (options.map)
          grunt.file.write(f.dest + '.map', result.map)

        // Print a success message.
        grunt.log.writeln('File ' + chalk.cyan(f.dest) + ' created.')
      }
    })
  })

}
