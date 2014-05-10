grunt-stubcell
--------------

grunt task runner for stubcell.

[stubcell](https://github.com/yosuke-furukawa/stubcell) is stub server that can be  defined response JSON as JSON5.

How to use
--------------


## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```sh
$ npm install grunt-stubcell -D
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-stubcell');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4), but in case you can't please use [v0.3.2](https://github.com/gruntjs/grunt-contrib-coffee/tree/grunt-0.3-stable).*

## Configure

```js
'use strict';
  grunt.initConfig({
    stubcell: {
      test: {
        // entry yaml path
        entry: "entry.yaml",
        // base response data path
        // if empty, basepath is same to entry.yaml dir
        basepath: "",
        // port settings
        port: 3000
      }
    };
  });
  grunt.loadNpmTasks('grunt-stubcell');

```
