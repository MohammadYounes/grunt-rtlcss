[![GitHub version](https://badge.fury.io/gh/MohammadYounes%2Fgrunt-rtlcss.svg)](http://badge.fury.io/gh/MohammadYounes%2Fgrunt-rtlcss)
[![NPM version](https://badge.fury.io/js/grunt-rtlcss.svg)](http://badge.fury.io/js/grunt-rtlcss)
[![Build Status](https://travis-ci.org/MohammadYounes/grunt-rtlcss.svg?branch=master)](https://travis-ci.org/MohammadYounes/grunt-rtlcss)
[![DEPENDENCIES](https://david-dm.org/MohammadYounes/grunt-rtlcss.svg)](https://david-dm.org/MohammadYounes/grunt-rtlcss)

grunt-rtlcss
============
grunt plugin for [RTLCSS], a framework for transforming CSS from LTR to RTL.


## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-rtlcss --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-rtlcss');
```



## RTLCSS task
_Run this task with the `grunt rtlcss` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### options.opts
Description: Specifies [RTLCSS options](https://github.com/MohammadYounes/rtlcss#options-object).

Type: `Object`

Default:

```js
{
    "autoRename": false,
    "autoRenameStrict": false,
    "blacklist":{},
    "clean": true,
    "greedy": false,
    "processUrls": false,
    "stringMap":[]
}
```

#### options.plugins
Description: Specifies custom [RTLCSS plugins](https://github.com/MohammadYounes/rtlcss#plugins-array).

Type: `Array`

Default: `[]`

#### options.map
Description: Specifies whether to generate source maps or not, If you want more control over source map generation, you can define the map option as an object. (see [postcss docs](https://github.com/postcss/postcss/blob/master/docs/source-maps.md#options)).

Type: `Boolean` or `Object`

Default: `false`

#### saveUnmodified
Description: Specifies whether to save unmodified files or not.

Type: `Boolean`

Default: `true`

### Usage Example

```js
rtlcss: {
  myTask:{
    // task options
    options: {
      // generate source maps
      map: {inline: false},
      // rtlcss options
      opts: {
        clean:false
      },
      // rtlcss plugins
      plugins:[],
      // save unmodified files
      saveUnmodified: true,
    },
    expand : true,
    cwd    : 'ltr/',
    dest   : 'rtl/',
    src    : ['**/*.css']
  }
}
```

[RTLCSS]: https://github.com/MohammadYounes/rtlcss

-------

## Release History

* **v2.0.1** [18 Feb 2016]
  * Fix internal bug.

* **v2.0.0** [18 Feb 2016]
  * Upgrade to [RTLCSS] v2.x
  * `options.config` renamed to `options.opts` (avoids confusion with [RTLCSS Config](https://github.com/MohammadYounes/rtlcss/blob/master/.rtlcssrc)).
  * `options.rules`, `options.declarations` and `options.properties` removed in favor of the new `options.plugins`.

  [RTLCSS] options have changed, to view a summary of changes, see [RTLCSS Upgrade guide](https://github.com/MohammadYounes/rtlcss/blob/master/CHANGELOG.md#upgrading-from-version-10).

---
* **v1.6.0** [15 Mar 2015]
	* Upgrade dependency (chalk v1.x.x).

* **v1.5.1** [14 Feb 2015]
	* Colorize log messages. Thanks **@ocean90**.

* **v1.5.0** [14 Feb 2015]
	* New option `saveUnmodified:true` to control whether to save unmodified files or not. Thanks **@ocean90**.

* **v1.4.0** [30 Jan 2015]
	* Upgrade to [RTLCSS] v1.x.x

* **v1.3.0** [26 Oct 2014]
	* Upgrade to [RTLCSS] v1.4.2

* **v1.2.0** [28 Sep 2014]
  * Upgrade to [RTLCSS] v1.3.0

* **v1.1.0** [27 Sep 2014]
  * Upgrade to [RTLCSS] v1.2.0

* **v1.0.0** [24 Aug 2014]
  * Upgrade to [RTLCSS] v1.0.0

* **v0.7.0** [11 Aug 2014]
  * Remove duplicate postcss dependency.
  * Upgrade to [RTLCSS] v0.9.0

* **v0.6.0** [4 Jul 2014]
  * Upgrade to [RTLCSS] v0.7.0

* **v0.5.0** [4 Jul 2014]
  * Upgrade to [RTLCSS] v0.6.0

* **v0.4.1** [15 May 2014]
  * Add POSTCSS to dependencies list.

* **v0.4.0** [6 Apr. 2014]
  * Upgrade to [RTLCSS] v0.4.0

* **v0.3.0** [5 Apr. 2014]
  * Upgrade to [RTLCSS] v0.3.0

* **v0.2.0** [20 Mar. 2014]
  * Upgrade to [RTLCSS] v0.2.1
  * Support generating source maps.

* **v0.1.2** [7 Mar. 2014]
  * Upgrade to [RTLCSS] v0.1.3

* **v0.1.1** [6 Mar. 2014]
  * Fix typo in README.md

* **v0.1.0** [6 Mar. 2014]
  * Initial commit.
