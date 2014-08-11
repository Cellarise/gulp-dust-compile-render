/* jslint node: true */
"use strict";
var gutil = require('gulp-util');
var through = require('through2').obj;
var dust = require('dustjs-linkedin');
var fs = require('fs');
var glob = require("glob");
var path = require('path');

var PLUGIN_NAME = 'gulp-dust-compile-render';

/**
 * A gulp task to compile and render dust templates based on a provided context object.
 * @module gulp-dust-compile-render
 * @param context {Object} - Context object containing properties referenced in dust templates
 * @param opts {Object} - Task configuration options
 * @param [opts.opts.partialsGlob] {string } - A glob pattern for the dust templates to be loaded as partials that can be referenced in dust templates
 * @param [opts.opts.preserveWhitespace] {boolean} - Preserve whitespace in output
 * @returns {readable-stream/transform}
 * @example
 {>example-index/}
 */
module.exports = function (context, opts) {
    context = context || {};
    opts = opts || {
        preserveWhitespace: true,
        partialsGlob: ''
    };
    return through(function (file, enc, cb) {
        var self = this;

        this.render = function (data, output, callback) {
            //add jsdoc parameter object types to data
            data.string = '{string}';
            data.Object = '{Object}';
            data.boolean = '{boolean}';
            data.number = '{number}';
            data.number = '{number}';

            var i, files, file, filePath, fileName;
            if (opts.preserveWhitespace){
                dust.optimizers.format = function (ctx, node) {
                    return node;
                };
            }
            dust.loadSource(dust.compile(output, "output", !opts.preserveWhitespace));
            //load all partials
            if(opts.partialsGlob !== ''){
                files = glob.sync(opts.partialsGlob);
                for(i = 0; i < files.length; i = i + 1){
                    filePath = files[i];
                    file = fs.readFileSync(filePath, "utf8");
                    fileName = path.basename(filePath, path.extname(filePath)).replace('.dust','');
                    //gutil.log("Loading dust template " + fileName);
                    dust.loadSource(dust.compile(file, fileName, !opts.preserveWhitespace));
                }
            }
            dust.render("output", data, callback);
        };

        if (file.isNull()) {
            this.push(file);
            return cb();
        }

        if (file.isStream()) {
            return cb(new gutil.PluginError(PLUGIN_NAME, 'streams not supported'), undefined);
        }

        if (file.isBuffer()) {
            try {
                this.render(context, file.contents.toString(), function (err, output){
                    file.contents = new Buffer(output);
                    //file.path = gutil.replaceExtension(file.path, '.js');
                    self.push(file);
                });
            } catch (err) {
                this.emit('error', new gutil.PluginError(PLUGIN_NAME, err, { fileName: file.path}));
            }
            return cb();
        }
    });
};