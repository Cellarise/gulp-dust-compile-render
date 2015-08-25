"use strict";

/* Feature: Ignore dust tags with no context property */
module.exports = (function testSuite() {
  var fs = require("fs");
  var gulp = require("gulp");
  var path = require("path");
  var GulpDustCompileRender = require("../../lib/index");
  var English = require("yadda").localisation.English;
  var assert = require("assert");

  return English.library()
    /*Scenario: Compile and render template with ignore undefined tags flag set */
    .define("Given I have a $name dust file", function test(filename, done) {
      this.world.template = path.join(__dirname, "../../Test_Resources/" + filename);
      assert(fs.existsSync(this.world.template + ".dust"));
      done();
    })
    .define("When I compile and render the dust file using $context as context with the ignore undefined tags flag set",
      function test(context, done) {
        var self = this;
        this.world.streamResult = [];
        gulp.src(this.world.template + ".dust")
          .pipe(new GulpDustCompileRender(JSON.parse(fs.readFileSync(context)), {
            "preserveWhitespace": true,
            "partialsGlob": path.join(__dirname, "../../Test_Resources/") + "*.dust*",
            "ignoreUndefinedTags": true
          }))
          .on("data", function onData(vinyl) {
            self.world.streamResult.push(vinyl.contents);
          })
          .on("end", function onEnd() {
            done();
          });
      })
    .define("Then a rendered dust file is output ignoring undefined dust tags", function test(done) {
      assert.equal(this.world.streamResult.join(""),
        fs.readFileSync(this.world.template + ".js", "UTF-8"));
      done();
    });
})();
