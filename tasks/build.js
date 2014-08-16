/* jslint node: true */
"use strict";
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var concat = require("gulp-concat");
var path = require('path');
var jsdoc2md = require("gulp-jsdoc-to-markdown");
var GulpDustCompileRender = require('../lib');
var fs = require('fs');
var rename = require("gulp-rename");

module.exports = function(gulp) {

    gulp.task('build', ['docs'], function() {
        gulp.src('./Test/test.js')
            .pipe(mocha({
                reporter: 'spec'
            }));
    });

    gulp.task("pre-docs", function(cb){

        var dest = "doc_templates";
        var context = JSON.parse(fs.readFileSync('package.json'));

        gulp.src([dest + '/**/*.dust.md'])
            .pipe(new GulpDustCompileRender(context))
            .pipe(rename(function (path) {
                path.basename = path.basename.replace('.dust','');
            }))
            .pipe(gulp.dest(dest))
            .on('end', cb);
    });

    gulp.task("docs", ["pre-docs"], function(cb){
        var dest = "";
        var context = JSON.parse(fs.readFileSync('package.json'));
        var options = {
            template: './doc_templates/readme.md',
            preserveWhitespace: true,
            partialsGlob: path.join(process.cwd(), 'doc_templates/') + '*.dust*'
        };

        gulp.src(['lib/**/*.js'])
            .pipe(concat("README.md"))
            .pipe(jsdoc2md(options))
            .on("error", function(err){
                gutil.log(gutil.colors.red("jsdoc2md failed"), err.message);
            })
            .pipe(new GulpDustCompileRender(context, options))
            .pipe(gulp.dest(dest))
            .on('end', cb);
    });
};
