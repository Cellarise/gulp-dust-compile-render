 Given the dust file:

```js
//jshint ignore:start
var author = "{~lb}~lb{~rb}author{~lb}~rb{~rb}";
var name = "{~lb}~lb{~rb}name{~lb}~rb{~rb}";
var description = "{~lb}~lb{~rb}description{~lb}~rb{~rb}";
var version = "{~lb}~lb{~rb}version{~lb}~rb{~rb}";
```

When you pass the dust file to a `new GulpDustCompileRender()` using 'package.json' as context, and pipe it to a given destination.
NOTE: the context object will be set upon instantiating the function.  In the example below `new GulpDustCompileRender(context)` is compiled before the gulp pipe executes. If you change the context itself during the gulp pipe it will not be seen by `GulpDustCompileRender`.  To workaround this behaviour you can pass an object as the context and add/change properties of the object post instantiating the function but prior to executing the gulp pipe.

```js
var GulpDustCompileRender = require('{name}');
var context = JSON.parse(fs.readFileSync('package.json'));
gulp.src('local.dust')
.pipe(new GulpDustCompileRender(context))
.pipe(fs.createWriteStream('output.js'));
```

Then you'll get a compiled and rendered dust file:

```js
//jshint ignore:start
var author = "{author}";
var name = "{name}";
var description = "{description}";
var version = "{version}";
```
