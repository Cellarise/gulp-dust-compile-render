# {name}
[![view on npm](http://img.shields.io/npm/v/{name}.svg)](https://www.npmjs.org/package/{name})
[![npm module downloads per month](http://img.shields.io/npm/dm/{name}.svg)](https://www.npmjs.org/package/{name})
[![Dependency Status](https://david-dm.org/Cellarise/{name}.svg)](https://david-dm.org/Cellarise/{name})

> {description}


##Usage 

This gulp task expects a dust template as input, a context object provided as an option, and outputs the rendered dust template.

### As a gulp task

Require this package and use as part of your gulp task.

```js
var GulpDustCompileRender = require('{name}');
gulp.src('local.dust')
.pipe(new GulpDustCompileRender())
.pipe(fs.createWriteStream('output.js'));
```


# API
{~lb}{~lb}>main{~rb}{~rb}
*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*.


# License

MIT License (MIT)

Copyright (c) 2014 {author}