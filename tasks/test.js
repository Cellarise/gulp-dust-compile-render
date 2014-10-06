/**
 * A set of gulp build tasks to run test steps.
 * @alias tasks:test-tasks
 */
module.exports = function (gulp, context) {
    "use strict";
    var mocha = require('gulp-mocha');
    var mkdirp = require('mkdirp');
    var istanbul = require('gulp-istanbul-custom-reports');
    istanbul.registerReport(require('istanbul-reporter-clover-limits'));
    var gutil = require('gulp-util');
    var glob = require('glob');
    var path = require('path');
    var _ = require('underscore');

    function handleError(err) {
        gutil.log(err.toString());
        this.emit('end'); //jshint ignore:line
    }


    function test(reporter) {
        var cwd = context.cwd;
        var pkg = context.package;
        var directories = pkg.directories;
        var sourceGlobStr = directories.lib + '/**/*.js';
        var scriptPath;
        //require all library scripts to ensure istanbul picks up
        _.each(glob.sync(sourceGlobStr), function (value) {
            scriptPath = path.resolve(process.cwd(), value);
            try {
                require(scriptPath); // Make sure all files are loaded to get accurate coverage data
                gutil.log('Loaded: ' + scriptPath);
            } catch (err) {
                gutil.log('Could not load: ' + scriptPath);
            }
        });

        //set YADDA_FEATURE_GLOB if argv[2]
        if(context.argv.length === 2){
            process.env.YADDA_FEATURE_GLOB = context.argv[1];
            console.log('Set process.env.YADDA_FEATURE_GLOB=' + process.env.YADDA_FEATURE_GLOB);
        }

        return gulp.src(directories.test + '/test.js')
            .pipe(mocha({
                reporter: reporter,
                timeout: 500000
            }))
            .on("error", handleError)
            .pipe(istanbul.writeReports({
                reporters: [ 'html', 'clover-limits', 'json-summary'],
                reportOpts: {
                    dir: cwd + '/' + directories.reports + '/code-coverage',
                    watermarks: pkg.config.coverage.watermarks
                }
            }));
    }

    /**
     * A gulp build task to instrument files.  Istanbul will override the node require() function to redirect to the instrumented files.
     * @alias tasks:instrument
     */
    gulp.task('instrument', function () {
        var pkg = context.package;
        var directories = pkg.directories;
        var sourceGlobStr = directories.lib + '/**/*.js';
        /**
         * Istanbul code coverage will not work if there are tasks containing local references.
         * For example, var x = require('../../lib/index');
         * Note: that if gulpfile.js contains `gulp.loadTasks(__dirname);` then all tasks will be loaded
         * in gulp modules and the tasks directory.  Make sure all these tasks do not require local references as defined above.
         */
        return gulp.src(sourceGlobStr)
            .pipe(istanbul()); // Covering files - note: finish event called when finished (not end event)
    });

    /**
     * A gulp build task to run test steps and calculate test coverage.  Test steps results will be output using mocha-bamboo-reporter-bgo reporter.
     * This task executes the Instrument task as a prerequisite.
     * @alias tasks:test-cover
     */
    gulp.task('test-cover', ['instrument'], function () {
        var cwd = context.cwd;
        var pkg = context.package;
        var directories = pkg.directories;
        var path = require('path');

        process.env.MOCHA_FILE = path.join(cwd, directories.reports, 'unit-mocha-tests.json'); //results file path for mocha-bamboo-reporter-bgo
        mkdirp.sync(path.join(cwd, directories.reports)); //make sure the Reports directory exists - required for mocha-bamboo-reporter-bgo
        return test('mocha-bamboo-reporter-bgo');
    });

    /**
     * A gulp build task to run test steps and calculate test coverage.  Test steps results will be output using spec reporter.
     * @alias tasks:test
     */
    gulp.task('test', function () {
        return test('spec');
    });

};
