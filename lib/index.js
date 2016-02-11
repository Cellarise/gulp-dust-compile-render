"use strict";
var gutil = require("gulp-util");
var through = require("through2").obj;
var dust = require("dustjs-linkedin");
var fs = require("fs");
var glob = require("glob");
var path = require("path");
var PLUGIN_NAME = "gulp-dust-compile-render";

/**
 * {description}
 * @module {name}
 * @param {Object} context - Context object containing properties referenced in dust templates.
 * NOTE: the context object will be set upon instantiating the function.
 * Pass an object as the context and add properties to the object post
 * instantiating the function but prior to executing the gulp pipe.
 * @param {Object} opts Task configuration options
 * @param {string} [opts.partialsGlob=''] - A glob pattern for the dust templates to be loaded as partials
 * that can be referenced in dust templates
 * @param {boolean} [opts.preserveWhitespace=true] - Preserve whitespace in output
 * @param {boolean} [opts.ignoreUndefinedTags=false] - Ignore dust tags undefined in the context object.
 * Does not work with paths e.g. {lb}{lb}obj.subobj{rb}{rb}
 * @param {String} [opts.helper=''] - A dustjs helper package to load.  To load the dustjs helpers pass
 * 'dustjs-helpers'.  Note only 'dustjs-helpers' is loaded as a dependency of this package.
 * @returns {through2} readable-stream/transform
 * @example @lang off
 * {>example-index/}
 */
module.exports = function gulpDustCompileRender(context, opts) {
  context = context || {};
  opts = opts || {};
  if (typeof opts.preserveWhitespace === 'undefined') { opts.preserveWhitespace = true; }
  if (typeof opts.partialsGlob === 'undefined') { opts.partialsGlob = ""; }
  if (typeof opts.ignoreUndefinedTags === 'undefined') { opts.ignoreUndefinedTags = false; }
  if (typeof opts.helper === 'undefined') { opts.helper = ""; }
  if (opts.helper !== ""){
    try {
      require(opts.helper);
    } catch (err) {
      throw new gutil.PluginError(PLUGIN_NAME, "helper could not be loaded");
    }
  }

  return through(function gulpDustCompileRenderTransform(file, enc, cb) {
    var self = this;

    this.render = function dustCompileRender(data, output, callback) {
      var i, files, thisFile, filePath, fileName, originalFormat, dustTags = [];
      //add jsdoc parameter object types to data
      data.string = "{string}";
      data.Object = "{Object}";
      data.boolean = "{boolean}";
      data.number = "{number}";
      data.number = "{number}";

      if (opts.ignoreUndefinedTags) {
        //find all dust tags
        //dustTags = output.match(/\{([^>].*)\}/g);
        output.replace(/\{([^>].*)\}/igm, function getDustTags(m, p1) {
          dustTags.push(p1);
        });
        //check each dust tag for existence in context (data)
        //and if not then replace output string occurrences of the tag
        for (i = 0; i < dustTags.length; i = i + 1) {
          if (!data.hasOwnProperty(dustTags[i])) {
            //add to data and render with brackets
            data[dustTags[i]] = "{" + dustTags[i] + "}";
          }
        }
      }

      if (opts.preserveWhitespace) {
        originalFormat = dust.optimizers.format;
        dust.optimizers.format = function returnNode(ctx, node) {
          return node;
        };
      }
      dust.loadSource(dust.compile(output, "output", !opts.preserveWhitespace));
      //load all partials
      if (opts.partialsGlob !== "") {
        files = glob.sync(opts.partialsGlob);
        for (i = 0; i < files.length; i = i + 1) {
          filePath = files[i];
          thisFile = fs.readFileSync(filePath, "utf8");
          fileName = path.basename(filePath, path.extname(filePath)).replace(".dust", "");
          //gutil.log("Loading dust template " + fileName);
          dust.loadSource(dust.compile(thisFile, fileName, !opts.preserveWhitespace));
        }
      }
      dust.render("output", data, callback);
      if (originalFormat) {
        dust.optimizers.format = originalFormat;
      }
    };

    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      return cb(new gutil.PluginError(PLUGIN_NAME, "streams not supported"));
    }

    if (file.isBuffer()) {
      try {
        this.render(context, file.contents.toString(), function dustCompileRenderCallback(err, output) {
          if (err){
            throw new Error(err);
          }
          file.contents = new Buffer(output);
          //file.path = gutil.replaceExtension(file.path, ".js");
          self.push(file);
        });
      } catch (err) {
        this.emit("error", new gutil.PluginError(PLUGIN_NAME, err, {"fileName": file.path}));
      }
      return cb();
    }
  });
};
