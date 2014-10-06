# gulp-dust-compile-render
[![view on npm](http://img.shields.io/npm/v/gulp-dust-compile-render.svg?style=flat)](https://www.npmjs.org/package/gulp-dust-compile-render)
[![npm module downloads per month](http://img.shields.io/npm/dm/gulp-dust-compile-render.svg?style=flat)](https://www.npmjs.org/package/gulp-dust-compile-render)
[![Dependency status](https://david-dm.org/Cellarise/gulp-dust-compile-render.svg?style=flat)](https://david-dm.org/Cellarise/gulp-dust-compile-render)
[![Coverage](https://img.shields.io/badge/coverage-86%25_skipped:0%25-green.svg?style=flat)](https://www.npmjs.org/package/gulp-dust-compile-render)
[![Open issues](https://img.shields.io/github/issues/Cellarise/gulp-dust-compile-render.svg?style=flat)](https://github.com/Cellarise/gulp-dust-compile-render/issues)

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
{{>main}}
*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*.


#Changelog

<table style="width:100%;border-spacing:0px;border-collapse:collapse;margin:0px;padding:0px;border-width:0px;">
   <tr>
    <th style="width:20px;text-align:center;"></th>
    <th style="width:80px;text-align:center;">Type</th> 
    <th style="width:80px;text-align:left;">ID</th>
    <th style="text-align:left;">Summary</th>
   </tr>

  <tr>
    <td colspan=4><strong>Version: 0.1.10 - released 2014-10-06</strong></td>
   </tr>

  <tr>
    <td style="width:20px;text-align:center;"><img src='https://jira.cellarise.com/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype'/></td> 
    <td style="width:80px;text-align:center;">Non-functional</td> 
    <td style="width:80px;text-align:left;">MDGDCR-10</td>
    <td>Package: Update package dependencies</td>
   </tr>

  <tr>
    <td style="width:20px;text-align:center;"><img src='https://jira.cellarise.com/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype'/></td> 
    <td style="width:80px;text-align:center;">Non-functional</td> 
    <td style="width:80px;text-align:left;">MDGDCR-9</td>
    <td>Package: Update readme-usage with notes about changing the context post instatiating the function </td>
   </tr>


  <tr>
    <td colspan=4><strong>Version: 0.1.9 - released 2014-08-28</strong></td>
   </tr>

  <tr>
    <td style="width:20px;text-align:center;"><img src='https://jira.cellarise.com/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype'/></td> 
    <td style="width:80px;text-align:center;">Non-functional</td> 
    <td style="width:80px;text-align:left;">MDGDCR-8</td>
    <td>Package: Migrate to new Cellarise Package Manager</td>
   </tr>


  <tr>
    <td colspan=4><strong>Version: 0.1.8 - released 2014-08-24</strong></td>
   </tr>

  <tr>
    <td style="width:20px;text-align:center;"><img src='https://jira.cellarise.com/secure/viewavatar?size=xsmall&amp;avatarId=10403&amp;avatarType=issuetype'/></td> 
    <td style="width:80px;text-align:center;">Bug</td> 
    <td style="width:80px;text-align:left;">MDGDCR-7</td>
    <td>Parser: Fix option defaults lost when setting one or more options.</td>
   </tr>


  <tr>
    <td colspan=4><strong>Version: 0.1.7 - released 2014-08-21</strong></td>
   </tr>

  <tr>
    <td style="width:20px;text-align:center;"><img src='https://jira.cellarise.com/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype'/></td> 
    <td style="width:80px;text-align:center;">Non-functional</td> 
    <td style="width:80px;text-align:left;">MDGDCR-6</td>
    <td>Package: Update dependencies</td>
   </tr>


  <tr>
    <td colspan=4><strong>Version: 0.1.6 - released 2014-08-16</strong></td>
   </tr>

  <tr>
    <td style="width:20px;text-align:center;"><img src='https://jira.cellarise.com/secure/viewavatar?size=xsmall&amp;avatarId=10403&amp;avatarType=issuetype'/></td> 
    <td style="width:80px;text-align:center;">Bug</td> 
    <td style="width:80px;text-align:left;">MDGDCR-4</td>
    <td>Package: Add path to main library in package.json</td>
   </tr>

  <tr>
    <td style="width:20px;text-align:center;"><img src='https://jira.cellarise.com/secure/viewavatar?size=xsmall&amp;avatarId=10411&amp;avatarType=issuetype'/></td> 
    <td style="width:80px;text-align:center;">Feature</td> 
    <td style="width:80px;text-align:left;">MDGDCR-5</td>
    <td>Render: Ignore dust tags with no context property</td>
   </tr>

  <tr>
    <td style="width:20px;text-align:center;"><img src='https://jira.cellarise.com/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype'/></td> 
    <td style="width:80px;text-align:center;">Non-functional</td> 
    <td style="width:80px;text-align:left;">MDGDCR-3</td>
    <td>Package: Configure build and deployment tasks</td>
   </tr>


  <tr>
    <td colspan=4><strong>Version: 0.1.2 - released 2014-08-12</strong></td>
   </tr>

  <tr>
    <td style="width:20px;text-align:center;"><img src='https://jira.cellarise.com/secure/viewavatar?size=xsmall&amp;avatarId=10411&amp;avatarType=issuetype'/></td> 
    <td style="width:80px;text-align:center;">Feature</td> 
    <td style="width:80px;text-align:left;">MDGDCR-2</td>
    <td>Package: Add compile and render dust template functions</td>
   </tr>


</table>



# License

MIT License (MIT). All rights not explicitly granted in the license are reserved.

Copyright (c) 2014 John Barry

## Dependencies
[ansi-regex@0.2.1](&quot;https://github.com/sindresorhus/ansi-regex&quot;) - &quot;MIT&quot;, [ansi-styles@1.1.0](&quot;https://github.com/sindresorhus/ansi-styles&quot;) - &quot;MIT&quot;, [chalk@0.5.1](&quot;https://github.com/sindresorhus/chalk&quot;) - &quot;MIT&quot;, [clone-stats@0.0.1](&quot;https://github.com/hughsk/clone-stats&quot;) - &quot;MIT&quot;, [core-util-is@1.0.1](&quot;https://github.com/isaacs/core-util-is&quot;) - &quot;MIT&quot;, [dateformat@1.0.8](&quot;https://github.com/felixge/node-dateformat&quot;) - &quot;MIT*&quot;, [duplexer2@0.0.2](&quot;https://github.com/deoxxa/duplexer2&quot;) - &quot;BSD&quot;, [dustjs-helpers@1.3.0](&quot;https://github.com/linkedin/dustjs-helpers&quot;) - &quot;MIT&quot;, [dustjs-linkedin@2.4.2](&quot;https://github.com/linkedin/dustjs&quot;) - &quot;MIT&quot;, [escape-string-regexp@1.0.2](&quot;https://github.com/sindresorhus/escape-string-regexp&quot;) - &quot;MIT&quot;, [glob@4.0.6](&quot;https://github.com/isaacs/node-glob&quot;) - &quot;ISC&quot;, [graceful-fs@3.0.2](&quot;https://github.com/isaacs/node-graceful-fs&quot;) - &quot;BSD&quot;, [gulp-dust-compile-render@0.0.0](&quot;https://github.com/Cellarise/gulp-dust-compile-render&quot;) - &quot;MIT License (MIT)&quot;, [gulp-util@3.0.1](&quot;https://github.com/wearefractal/gulp-util&quot;) - [&quot;MIT&quot;], [has-ansi@0.1.0](&quot;https://github.com/sindresorhus/has-ansi&quot;) - &quot;MIT&quot;, [inherits@2.0.1](&quot;https://github.com/isaacs/inherits&quot;) - &quot;ISC&quot;, [isarray@0.0.1](&quot;https://github.com/juliangruber/isarray&quot;) - &quot;MIT&quot;, [lodash._escapehtmlchar@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._escapestringchar@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._htmlescapes@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._isnative@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._objecttypes@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._reinterpolate@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._reunescapedhtml@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._shimkeys@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.defaults@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.escape@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.isobject@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.keys@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.template@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.templatesettings@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.values@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash@2.4.1](&quot;https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lru-cache@2.5.0](&quot;https://github.com/isaacs/node-lru-cache&quot;) - &quot;MIT&quot;, [minimatch@1.0.0](&quot;https://github.com/isaacs/minimatch&quot;) - &quot;MIT&quot;, [minimist@1.1.0](&quot;https://github.com/substack/minimist&quot;) - &quot;MIT&quot;, [multipipe@0.1.1](&quot;https://github.com/segmentio/multipipe&quot;) - &quot;MIT*&quot;, [once@1.3.1](&quot;https://github.com/isaacs/once&quot;) - &quot;BSD&quot;, [readable-stream@1.0.32](&quot;https://github.com/isaacs/readable-stream&quot;) - &quot;MIT&quot;, [readable-stream@1.1.13](&quot;https://github.com/isaacs/readable-stream&quot;) - &quot;MIT&quot;, [sigmund@1.0.0](&quot;https://github.com/isaacs/sigmund&quot;) - &quot;BSD&quot;, [string_decoder@0.10.31](&quot;https://github.com/rvagg/string_decoder&quot;) - &quot;MIT&quot;, [strip-ansi@0.3.0](&quot;https://github.com/sindresorhus/strip-ansi&quot;) - &quot;MIT&quot;, [supports-color@0.2.0](&quot;https://github.com/sindresorhus/supports-color&quot;) - &quot;MIT&quot;, [through2@0.6.2](&quot;https://github.com/rvagg/through2&quot;) - &quot;MIT&quot;, [underscore@1.7.0](&quot;https://github.com/jashkenas/underscore&quot;) - [&quot;MIT&quot;], [vinyl@0.4.3](&quot;https://github.com/wearefractal/vinyl&quot;) - [&quot;MIT&quot;], [wrappy@1.0.1](&quot;https://github.com/npm/wrappy&quot;) - &quot;ISC&quot;, [xtend@4.0.0](&quot;https://github.com/Raynos/xtend&quot;) - [&quot;MIT&quot;], 
*documented by [npm-licenses](http://github.com/AceMetrix/npm-license.git)*.