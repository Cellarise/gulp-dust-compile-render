# gulp-dust-compile-render
[![view on npm](http://img.shields.io/npm/v/gulp-dust-compile-render.svg)](https://www.npmjs.org/package/gulp-dust-compile-render)
[![npm module downloads per month](http://img.shields.io/npm/dm/gulp-dust-compile-render.svg)](https://www.npmjs.org/package/gulp-dust-compile-render)
[![Dependency Status](https://david-dm.org/Cellarise/gulp-dust-compile-render.svg)](https://david-dm.org/Cellarise/gulp-dust-compile-render)

> A gulp task to compile and render dust templates based on a provided context object.


##Usage 

This gulp task expects a dust template as input, a context object provided as an option, and outputs the rendered dust template.

### As a gulp task

Require this package and use as part of your gulp task.

```js
var GulpDustCompileRender = require('gulp-dust-compile-render');
gulp.src('local.dust')
.pipe(new GulpDustCompileRender())
.pipe(fs.createWriteStream('output.js'));
```


# API
<a name="module_gulp-dust-compile-render"></a>
#gulp-dust-compile-render
A gulp task to compile and render dust templates based on a provided context object.

**Params**

- context `Object` - Context object containing properties referenced in dust templates  
- opts `Object` - Task configuration options  
  - \[partialsGlob\] `string` - A glob pattern for the dust templates to be loaded as partials that can be referenced in dust templates  
  - \[preserveWhitespace\] `boolean` - Preserve whitespace in output  
  - \[ignoreUndefinedTags\] `boolean` - Ignore dust tags undefined in the context object.
Does not work with paths e.g. obj.subobj  

**Returns**: `readable-stream/transform`  
**Example**  
 Given the dust file:

```js
//jshint ignore:start
var author = "{author}";
var name = "{name}";
var description = "{description}";
var version = "{version}";
```

When you pass the dust file to a `new GulpDustCompileRender()` using 'package.json' as context, and pipe it to a given destination.

```js
var GulpDustCompileRender = require('gulp-dust-compile-render');
var context = JSON.parse(fs.readFileSync('package.json'));
gulp.src('local.dust')
.pipe(new GulpDustCompileRender(context))
.pipe(fs.createWriteStream('output.js'));
```

Then you'll get a compiled and rendered dust file:

```js
//jshint ignore:start
var author = "John Barry";
var name = "gulp-dust-compile-render";
var description = "A gulp task to compile and render dust templates based on a provided context object.";
var version = "0.0.0";
```



*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*.


# License

MIT License (MIT)

Copyright (c) 2014 John Barry