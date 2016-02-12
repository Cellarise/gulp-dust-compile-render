## API
<a name="module_gulp-dust-compile-render"></a>
### gulp-dust-compile-render ⇒ <code>through2</code>
A gulp task to compile and render dust templates based on a provided context object.
**Returns**: <code>through2</code> - readable-stream/transform  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| context | <code>Object</code> |  | Context object containing properties referenced in dust templates. NOTE: the context object will be set upon instantiating the function. Pass an object as the context and add properties to the object post instantiating the function but prior to executing the gulp pipe. |
| opts | <code>Object</code> |  | Task configuration options |
| [opts.partialsGlob] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | A glob pattern for the dust templates to be loaded as partials that can be referenced in dust templates |
| [opts.preserveWhitespace] | <code>boolean</code> | <code>true</code> | Preserve whitespace in output |
| [opts.ignoreUndefinedTags] | <code>boolean</code> | <code>false</code> | Ignore dust tags undefined in the context object. Does not work with paths e.g. obj.subobj |
| [opts.helper] | <code>String</code> | <code>&#x27;&#x27;</code> | A dustjs helper package to load.  To load the dustjs helpers pass 'dustjs-helpers'.  Note only 'dustjs-helpers' is loaded as a dependency of this package. |

**Example**  
 Given the dust file:

```js
//jshint ignore:start
var author = "{~lb}author{~rb}";
var name = "{~lb}name{~rb}";
var description = "{~lb}description{~rb}";
var version = "{~lb}version{~rb}";
```

When you pass the dust file to a `new GulpDustCompileRender()` using 'package.json' as context, and pipe it to a given destination.
NOTE: the context object will be set upon instantiating the function.  In the example below `new GulpDustCompileRender(context)` is compiled before the gulp pipe executes. If you change the context itself during the gulp pipe it will not be seen by `GulpDustCompileRender`.  To workaround this behaviour you can pass an object as the context and add/change properties of the object post instantiating the function but prior to executing the gulp pipe.

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

-

*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*.