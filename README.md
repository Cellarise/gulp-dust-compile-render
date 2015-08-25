# gulp-dust-compile-render
[![view on npm](http://img.shields.io/npm/v/gulp-dust-compile-render.svg?style=flat)](https://www.npmjs.org/package/gulp-dust-compile-render)
[![npm module downloads per month](http://img.shields.io/npm/dm/gulp-dust-compile-render.svg?style=flat)](https://www.npmjs.org/package/gulp-dust-compile-render)
[![Dependency status](https://david-dm.org/Cellarise/gulp-dust-compile-render.svg?style=flat)](https://david-dm.org/Cellarise/gulp-dust-compile-render)
[![Build Status](https://travis-ci.org/Cellarise/gulp-dust-compile-render.svg?branch=master)](https://travis-ci.org/Cellarise/gulp-dust-compile-render)
[![Code
Climate](https://codeclimate.com/github/Cellarise/gulp-dust-compile-render/badges/gpa.svg)](https://codeclimate.com/github/Cellarise/gulp-dust-compile-render)
[![Test Coverage](https://codeclimate.com/github/Cellarise/gulp-dust-compile-render/badges/coverage.svg)](https://codeclimate.com/github/Cellarise/gulp-dust-compile-render/badges/coverage.svg)

> A gulp task to compile and render dust templates based on a provided context object.


## Usage

This gulp task expects a dust template as input, a context object provided as an option, and outputs the rendered dust template.

### As a gulp task

Require this package and use as part of your gulp task.

```js
var GulpDustCompileRender = require('gulp-dust-compile-render');
gulp.src('local.dust')
.pipe(new GulpDustCompileRender())
.pipe(fs.createWriteStream('output.js'));
```



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
var author = "{author}";
var name = "{name}";
var description = "{description}";
var version = "{version}";
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


# Changelog

<table style="width:100%;border-spacing:0px;border-collapse:collapse;margin:0px;padding:0px;border-width:0px;">
  <tr>
    <th style="width:20px;text-align:center;"></th>
    <th style="width:80px;text-align:center;">Type</th>
    <th style="width:80px;text-align:left;">ID</th>
    <th style="text-align:left;">Summary</th>
  </tr>
    
<tr>
        <td colspan=4><strong>Version: 0.2.7 - released 2015-08-25</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGDCR-27</td>
            <td><p>Package: Configure for travis-ci</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.2.6 - released 2015-06-12</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGDCR-26</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.2.5 - released 2015-05-24</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGDCR-25</td>
            <td><p>Package: Update development dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.2.4 - released 2015-05-21</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGDCR-24</td>
            <td><p>Package: Update dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGDCR-23</td>
            <td><p>Package: Update jsdoc2markdown and regenerate documentation</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.2.3 - released 2015-04-11</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGDCR-22</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.2.2 - released 2015-03-07</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGDCR-21</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGDCR-20</td>
            <td><p>Package: Update eslint configuration, test.js runner and dev dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGDCR-19</td>
            <td><p>Package: Update eslint configuration, test.js runner and dev dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.2.1 - released 2014-11-16</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGDCR-18</td>
            <td><p>Package: Correct readme description of helper option</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.2.0 - released 2014-11-16</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10412&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Minor</td>
            <td style="width:80px;text-align:left;">MDGDCR-17</td>
            <td><p>Package: Add option to load dustjs-helpers</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.13 - released 2014-11-16</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGDCR-16</td>
            <td><p>Package: dustjs-helpers are not loaded</p><p>Although dustjs-helpers are listed in the dependencies, they&#39;re never loaded.</p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.12 - released 2014-11-14</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGDCR-15</td>
            <td><p>Package: README example block shows the wrong code </p><p>Below &quot;Given the dust file:&quot; it displays the already rendered output instead of the dust file.</p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGDCR-14</td>
            <td><p>Package: Migrate from jshint to eslint static code analysis</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.11 - released 2014-10-12</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGDCR-13</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGDCR-11</td>
            <td><p>Package: Remove all gulp tasks except &#39;test&#39; and update readme docs</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.10 - released 2014-10-06</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGDCR-10</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGDCR-9</td>
            <td><p>Package: Update readme-usage with notes about changing the context post instatiating the function </p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.9 - released 2014-08-28</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGDCR-8</td>
            <td><p>Package: Migrate to new Cellarise Package Manager</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.8 - released 2014-08-24</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10403&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Bug</td>
            <td style="width:80px;text-align:left;">MDGDCR-7</td>
            <td><p>Parser: Fix option defaults lost when setting one or more options.</p><p>Option defaults not retained when setting at least one option</p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.7 - released 2014-08-21</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGDCR-6</td>
            <td><p>Package: Update dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.6 - released 2014-08-16</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10403&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Bug</td>
            <td style="width:80px;text-align:left;">MDGDCR-4</td>
            <td><p>Package: Add path to main library in package.json</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10411&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Feature</td>
            <td style="width:80px;text-align:left;">MDGDCR-5</td>
            <td><p>Render: Ignore dust tags with no context property</p><p>As a developer
I can select to ignore dust tags with no context property
So that I do not have to escape content in dust templates that are not meant to be rendered</p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDGDCR-3</td>
            <td><p>Package: Configure build and deployment tasks</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.2 - released 2014-08-12</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10411&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Feature</td>
            <td style="width:80px;text-align:left;">MDGDCR-2</td>
            <td><p>Package: Add compile and render dust template functions</p><p>As a developer
I can compile and render dust templates as a gulp task
So that I can easily integrate use of dust templates into my build process</p></td>
          </tr>
        
    
</table>



# License

MIT License (MIT). All rights not explicitly granted in the license are reserved.

Copyright (c) 2015 John Barry
## Dependencies
[gulp-dust-compile-render@0.0.0](&quot;https://github.com/Cellarise/gulp-dust-compile-render&quot;) - &quot;MIT License (MIT)&quot;, 
*documented by [npm-licenses](http://github.com/AceMetrix/npm-license.git)*.
