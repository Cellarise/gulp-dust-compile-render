 Given the dust file:

```js
//jshint ignore:start
var author = "{~lb}author{~rb}";
var name = "{~lb}name{~rb}";
var description = "{~lb}description{~rb}";
var version = "{~lb}version{~rb}";
```

When you pass the dust file to a `new GulpDustCompileRender()` using 'package.json' as context, and pipe it to a given destination.

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
