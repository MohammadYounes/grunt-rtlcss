[![GitHub version](https://badge.fury.io/gh/MohammadYounes%2Fgrunt-rtlcss.svg)](http://badge.fury.io/gh/MohammadYounes%2Fgrunt-rtlcss)
[![NPM version](https://badge.fury.io/js/grunt-rtlcss.svg)](http://badge.fury.io/js/grunt-rtlcss)
[![DEPENDENCIES](https://david-dm.org/MohammadYounes/grunt-rtlcss.svg)](https://david-dm.org/MohammadYounes/grunt-rtlcss)

grunt-rtlcss
============
grunt plugin for [RTLCSS], a framework for transforming CSS from LTR to RTL.


## Getting Started
This plugin requires Grunt `~0.4.1`

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

#### config
Description: Specifies [RTLCSS options](https://github.com/MohammadYounes/rtlcss#options-object).

Type: `Object`

Default:

```JS
{
	preserveComments: true,
	preserveDirectives: false,
	swapLeftRightInUrl: true,
	swapLtrRtlInUrl: true,
	swapWestEastInUrl: true,
	autoRename: true,
	greedy: false,
	stringMap:[...],
	enableLogging: false,
	minify:false
}
```

#### rules
Description: Specifies custom [RTLCSS rule level](https://github.com/MohammadYounes/rtlcss#rules-array) processing instructions.

Type: `Array`

Default: `[]`


#### declarations
Description: Specifies custom [RTLCSS declaration level](https://github.com/MohammadYounes/rtlcss#declarations-array) processing instructions.

Type: `Array`

Default: `[]`


#### properties
Description: Specifies custom [RTLCSS property level](https://github.com/MohammadYounes/rtlcss#properties-array) processing instructions.

Type: `Array`

Default: `[]`


#### map
Description: Specifies whether to generate source maps or not.

Type: `Boolean`

Default: `false`


### Usage Example

```JS
rtlcss: {
  'default':{
	options:{
	  // rtlcss options  
	  config:{
	  	preserveComments: false,
	  	greedy: true
	  },
	  // extend rtlcss rules
	  rules:[],
	  // extend rtlcss declarations
	  declarations:[],
	  // extend rtlcss properties
	  properties:[],
	  // generate source maps
	  map: false,
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
