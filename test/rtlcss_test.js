'use strict'

var grunt = require('grunt')

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.rtlcss = {
  setUp: function (done) {
    // setup here if necessary
    done()
  },
  default_options: function (test) {
    test.expect(1)

    var actual = grunt.file.read('tmp/default_options.css')
    var expected = grunt.file.read('test/expected/default_options.css')
    test.equal(actual, expected, 'should succeed with default options.')

    test.done()
  },
  custom_options: function (test) {
    test.expect(2)

    var actual = grunt.file.read('tmp/custom_options.css')
    var expected = grunt.file.read('test/expected/custom_options.css')
    test.equal(actual, expected, 'should succeed with custom options.')

    actual = grunt.file.read('tmp/custom_options.css.map')
    expected = grunt.file.read('test/expected/custom_options.css.map')
    test.equal(actual, expected, 'should create source map.')

    test.done()
  },
}
