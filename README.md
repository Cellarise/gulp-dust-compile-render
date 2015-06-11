# gulp-dust-compile-render
[![view on npm](http://img.shields.io/npm/v/gulp-dust-compile-render.svg?style=flat)](https://www.npmjs.org/package/gulp-dust-compile-render)
[![npm module downloads per month](http://img.shields.io/npm/dm/gulp-dust-compile-render.svg?style=flat)](https://www.npmjs.org/package/gulp-dust-compile-render)
[![Dependency status](https://david-dm.org/Cellarise/gulp-dust-compile-render.svg?style=flat)](https://david-dm.org/Cellarise/gulp-dust-compile-render)
[![Coverage](https://img.shields.io/badge/coverage-86%25_skipped:0%25-green.svg?style=flat)](https://www.npmjs.org/package/gulp-dust-compile-render)

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
[ansi-regex@1.1.1](&quot;https://github.com/sindresorhus/ansi-regex&quot;) - &quot;MIT&quot;, [ansi-styles@2.0.1](&quot;https://github.com/sindresorhus/ansi-styles&quot;) - &quot;MIT&quot;, [anymatch@1.3.0](&quot;https://github.com/es128/anymatch&quot;) - &quot;ISC&quot;, [arr-diff@1.0.1](&quot;https://github.com/jonschlinkert/arr-diff&quot;) - &quot;MIT&quot;, [array-differ@1.0.0](&quot;https://github.com/sindresorhus/array-differ&quot;) - &quot;MIT&quot;, [array-slice@0.2.3](&quot;https://github.com/jonschlinkert/array-slice&quot;) - &quot;MIT&quot;, [array-uniq@1.0.2](&quot;https://github.com/sindresorhus/array-uniq&quot;) - &quot;MIT&quot;, [arrify@1.0.0](&quot;https://github.com/sindresorhus/arrify&quot;) - &quot;MIT&quot;, [async-each@0.1.6](&quot;https://github.com/paulmillr/async-each&quot;) - &quot;MIT&quot;, [balanced-match@0.2.0](&quot;https://github.com/juliangruber/balanced-match&quot;) - &quot;MIT&quot;, [beeper@1.1.0](&quot;https://github.com/sindresorhus/beeper&quot;) - &quot;MIT&quot;, [binary-extensions@1.3.1](&quot;https://github.com/sindresorhus/binary-extensions&quot;) - &quot;MIT&quot;, [brace-expansion@1.1.0](&quot;https://github.com/juliangruber/brace-expansion&quot;) - &quot;MIT&quot;, [braces@1.8.0](&quot;https://github.com/jonschlinkert/braces&quot;) - &quot;MIT&quot;, [camelcase-keys@1.0.0](&quot;https://github.com/sindresorhus/camelcase-keys&quot;) - &quot;MIT&quot;, [camelcase@1.1.0](&quot;https://github.com/sindresorhus/camelcase&quot;) - &quot;MIT&quot;, [chalk@1.0.0](&quot;https://github.com/sindresorhus/chalk&quot;) - &quot;MIT&quot;, [chokidar@1.0.3](&quot;git+https://github.com/paulmillr/chokidar&quot;) - &quot;MIT&quot;, [cli@0.6.6](&quot;http://github.com/chriso/cli&quot;) - [&quot;MIT&quot;], [clone-stats@0.0.1](&quot;https://github.com/hughsk/clone-stats&quot;) - &quot;MIT&quot;, [clone@0.2.0](&quot;https://github.com/pvorb/node-clone&quot;) - &quot;MIT&quot;, [concat-map@0.0.1](&quot;https://github.com/substack/node-concat-map&quot;) - &quot;MIT&quot;, [core-util-is@1.0.1](&quot;https://github.com/isaacs/core-util-is&quot;) - &quot;MIT&quot;, [dateformat@1.0.11](&quot;https://github.com/felixge/node-dateformat&quot;) - &quot;MIT&quot;, [debug@2.2.0](&quot;https://github.com/visionmedia/debug&quot;) - &quot;MIT&quot;, [duplexer2@0.0.2](&quot;https://github.com/deoxxa/duplexer2&quot;) - &quot;BSD&quot;, [dustjs-helpers@1.7.1](&quot;git+https://github.com/linkedin/dustjs-helpers&quot;) - &quot;MIT&quot;, [dustjs-linkedin@2.7.2](&quot;git+https://github.com/linkedin/dustjs&quot;) - &quot;MIT&quot;, [escape-string-regexp@1.0.3](&quot;https://github.com/sindresorhus/escape-string-regexp&quot;) - &quot;MIT&quot;, [exit@0.1.2](&quot;https://github.com/cowboy/node-exit&quot;) - [&quot;MIT&quot;], [expand-brackets@0.1.1](&quot;https://github.com/jonschlinkert/expand-brackets&quot;) - &quot;MIT&quot;, [expand-range@1.8.1](&quot;https://github.com/jonschlinkert/expand-range&quot;) - &quot;MIT&quot;, [filename-regex@2.0.0](&quot;https://github.com/regexps/filename-regex&quot;) - &quot;MIT&quot;, [fill-range@2.2.2](&quot;https://github.com/jonschlinkert/fill-range&quot;) - &quot;MIT&quot;, [for-in@0.1.4](&quot;https://github.com/jonschlinkert/for-in&quot;) - &quot;MIT&quot;, [for-own@0.1.3](&quot;https://github.com/jonschlinkert/for-own&quot;) - &quot;MIT&quot;, [get-stdin@4.0.1](&quot;https://github.com/sindresorhus/get-stdin&quot;) - &quot;MIT&quot;, [glob-base@0.2.0](&quot;https://github.com/jonschlinkert/glob-base&quot;) - &quot;MIT&quot;, [glob-parent@1.2.0](&quot;https://github.com/es128/glob-parent&quot;) - &quot;ISC&quot;, [glob@3.2.11](&quot;https://github.com/isaacs/node-glob&quot;) - &quot;BSD&quot;, [glob@5.0.10](&quot;https://github.com/isaacs/node-glob&quot;) - &quot;ISC&quot;, [graceful-fs@2.0.3](&quot;https://github.com/isaacs/node-graceful-fs&quot;) - &quot;BSD&quot;, [gulp-dust-compile-render@0.0.0](&quot;https://github.com/Cellarise/gulp-dust-compile-render&quot;) - &quot;MIT License (MIT)&quot;, [gulp-util@3.0.5](&quot;git+https://github.com/wearefractal/gulp-util&quot;) - &quot;MIT&quot;, [has-ansi@1.0.3](&quot;https://github.com/sindresorhus/has-ansi&quot;) - &quot;MIT&quot;, [indent-string@1.2.1](&quot;https://github.com/sindresorhus/indent-string&quot;) - &quot;MIT&quot;, [inflight@1.0.4](&quot;https://github.com/isaacs/inflight&quot;) - &quot;ISC&quot;, [inherits@2.0.1](&quot;https://github.com/isaacs/inherits&quot;) - &quot;ISC&quot;, [is-binary-path@1.0.1](&quot;https://github.com/sindresorhus/is-binary-path&quot;) - &quot;MIT&quot;, [is-dotfile@1.0.1](&quot;https://github.com/jonschlinkert/is-dotfile&quot;) - &quot;MIT&quot;, [is-equal-shallow@0.1.2](&quot;https://github.com/jonschlinkert/is-equal-shallow&quot;) - &quot;MIT&quot;, [is-extglob@1.0.0](&quot;https://github.com/jonschlinkert/is-extglob&quot;) - &quot;MIT&quot;, [is-finite@1.0.1](&quot;git+https://github.com/sindresorhus/is-finite&quot;) - &quot;MIT&quot;, [is-glob@1.1.3](&quot;https://github.com/jonschlinkert/is-glob&quot;) - &quot;MIT&quot;, [is-number@1.1.2](&quot;https://github.com/jonschlinkert/is-number&quot;) - &quot;MIT&quot;, [is-primitive@1.0.0](&quot;https://github.com/jonschlinkert/is-primitive&quot;) - [&quot;MIT&quot;], [is-primitive@2.0.0](&quot;https://github.com/jonschlinkert/is-primitive&quot;) - &quot;MIT&quot;, [isarray@0.0.1](&quot;https://github.com/juliangruber/isarray&quot;) - &quot;MIT&quot;, [isobject@0.2.0](&quot;https://github.com/jonschlinkert/isobject&quot;) - [&quot;MIT&quot;], [isobject@1.0.0](&quot;https://github.com/jonschlinkert/isobject&quot;) - &quot;MIT&quot;, [kind-of@1.1.0](&quot;https://github.com/jonschlinkert/kind-of&quot;) - &quot;MIT&quot;, [lodash._basecopy@3.0.1](&quot;https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash._basetostring@3.0.0](&quot;https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash._basevalues@3.0.0](&quot;https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash._getnative@3.9.0](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash._isiterateecall@3.0.9](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash._reescape@3.0.0](&quot;https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash._reevaluate@3.0.0](&quot;https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash._reinterpolate@3.0.0](&quot;https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash.escape@3.0.0](&quot;https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash.isarguments@3.0.3](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash.isarray@3.0.3](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash.keys@3.1.1](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash.restparam@3.6.1](&quot;https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash.template@3.6.1](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lodash.templatesettings@3.1.0](&quot;https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lru-cache@2.6.4](&quot;https://github.com/isaacs/node-lru-cache&quot;) - &quot;ISC&quot;, [map-obj@1.0.1](&quot;https://github.com/sindresorhus/map-obj&quot;) - &quot;MIT&quot;, [meow@3.1.0](&quot;https://github.com/sindresorhus/meow&quot;) - &quot;MIT&quot;, [micromatch@2.1.6](&quot;https://github.com/jonschlinkert/micromatch&quot;) - &quot;MIT&quot;, [minimatch@0.2.14](&quot;https://github.com/isaacs/minimatch&quot;) - &quot;MIT&quot;, [minimatch@0.3.0](&quot;https://github.com/isaacs/minimatch&quot;) - &quot;MIT&quot;, [minimatch@2.0.8](&quot;https://github.com/isaacs/minimatch&quot;) - &quot;ISC&quot;, [minimist@1.1.1](&quot;https://github.com/substack/minimist&quot;) - &quot;MIT&quot;, [ms@0.7.1](&quot;https://github.com/guille/ms.js&quot;) - &quot;MIT*&quot;, [multipipe@0.1.2](&quot;https://github.com/juliangruber/multipipe&quot;) - &quot;MIT&quot;, [number-is-nan@1.0.0](&quot;git+https://github.com/sindresorhus/number-is-nan&quot;) - &quot;MIT&quot;, [object-assign@2.1.1](&quot;https://github.com/sindresorhus/object-assign&quot;) - &quot;MIT&quot;, [object.omit@0.2.1](&quot;https://github.com/jonschlinkert/object.omit&quot;) - [&quot;MIT&quot;], [once@1.3.2](&quot;https://github.com/isaacs/once&quot;) - &quot;ISC&quot;, [parse-glob@3.0.2](&quot;https://github.com/jonschlinkert/parse-glob&quot;) - &quot;MIT&quot;, [path-is-absolute@1.0.0](&quot;https://github.com/sindresorhus/path-is-absolute&quot;) - &quot;MIT&quot;, [preserve@0.2.0](&quot;https://github.com/jonschlinkert/preserve&quot;) - &quot;MIT&quot;, [process-nextick-args@1.0.1](&quot;https://github.com/calvinmetcalf/process-nextick-args&quot;) - &quot;MIT&quot;, [randomatic@1.1.0](&quot;https://github.com/jonschlinkert/randomatic&quot;) - &quot;MIT&quot;, [readable-stream@1.0.33](&quot;https://github.com/isaacs/readable-stream&quot;) - &quot;MIT&quot;, [readable-stream@1.1.13](&quot;https://github.com/isaacs/readable-stream&quot;) - &quot;MIT&quot;, [readable-stream@2.0.0](&quot;https://github.com/nodejs/readable-stream&quot;) - &quot;MIT&quot;, [readdirp@1.3.0](&quot;https://github.com/thlorenz/readdirp&quot;) - &quot;MIT&quot;, [regex-cache@0.4.2](&quot;https://github.com/jonschlinkert/regex-cache&quot;) - &quot;MIT&quot;, [repeat-element@1.1.2](&quot;https://github.com/jonschlinkert/repeat-element&quot;) - &quot;MIT&quot;, [repeat-string@1.5.2](&quot;https://github.com/jonschlinkert/repeat-string&quot;) - &quot;MIT&quot;, [repeating@1.1.3](&quot;https://github.com/sindresorhus/repeating&quot;) - &quot;MIT&quot;, [replace-ext@0.0.1](&quot;https://github.com/wearefractal/replace-ext&quot;) - [&quot;MIT&quot;], [sigmund@1.0.1](&quot;https://github.com/isaacs/sigmund&quot;) - &quot;ISC&quot;, [string_decoder@0.10.31](&quot;https://github.com/rvagg/string_decoder&quot;) - &quot;MIT&quot;, [strip-ansi@2.0.1](&quot;https://github.com/sindresorhus/strip-ansi&quot;) - &quot;MIT&quot;, [supports-color@1.3.1](&quot;https://github.com/sindresorhus/supports-color&quot;) - &quot;MIT&quot;, [through2@2.0.0](&quot;git+https://github.com/rvagg/through2&quot;) - &quot;MIT&quot;, [util-deprecate@1.0.1](&quot;https://github.com/TooTallNate/util-deprecate&quot;) - &quot;MIT&quot;, [vinyl@0.4.6](&quot;https://github.com/wearefractal/vinyl&quot;) - [&quot;MIT&quot;], [wrappy@1.0.1](&quot;https://github.com/npm/wrappy&quot;) - &quot;ISC&quot;, [xtend@4.0.0](&quot;https://github.com/Raynos/xtend&quot;) - [&quot;MIT&quot;], 
*documented by [npm-licenses](http://github.com/AceMetrix/npm-license.git)*.