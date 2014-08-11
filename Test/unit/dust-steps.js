/* jslint node: true */
"use strict";
var fs = require('fs');
var gulp = require('gulp');
var path = require('path');
var GulpDustCompileRender = require('../../lib');
var English = require('yadda').localisation.English;

/* Feature: Compile and render dust templates */
module.exports = (function() {
    return English.library()
    /*Scenario: Compile and render template */
        .define("Given I have a $name dust (?:file|file with partials|)", function(filename, done) {
            this.world.template = path.join(__dirname, '../resources/' + filename);
            this.assert(fs.existsSync(this.world.template + '.dust'));
            done();
        })
        .define("When I compile and render the dust file using $context as context", function(context, done) {
            var self = this;
            this.world.streamResult = [];
            gulp.src(this.world.template + '.dust')
                .pipe(new GulpDustCompileRender(JSON.parse(fs.readFileSync(context)),{
                    preserveWhitespace: true,
                    partialsGlob: path.join(__dirname, '../resources/') + '*.dust*'
                }))
                .on('data', function(vinyl) {
                    self.world.streamResult.push(vinyl.contents);
                })
                .on('end', function() {
                    done();
                });
        })
        .define("Then a rendered dust file is output", function(done) {
            this.assert.equal(this.world.streamResult.join(''),
                fs.readFileSync(this.world.template + ".js", "UTF-8"));
            done();
        });
})();