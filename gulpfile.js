"use strict";
//setup logger
var bformat = require('bunyan-format');
var formatOut = bformat({ outputMode: 'short' });
var logger = require('bunyan').createLogger({name: 'GULP', stream: formatOut});

//get gulp and gulp task loader
var gulp = require("gulp");
require('gulp-load-params')(gulp, {modulePrefix: 'gulp-tasks'});

var cwd = process.cwd();

/*
 * Setup context object to be passed to gulp tasks
 * context.cwd {String} - The current working directory
 * context.package {json} - The package.json for the module
 * context.argv {Array} - The arguments past to the gulp task
 * context.logger {bunyan} - A logger matching the bunyan API
 */
var context = {
    argv: [],
    cwd: cwd,
    logger: logger,
    package: require(cwd + '/package.json')
};

// load tasks from tasks directory and dependencies that start with `gulp-tasks` in package.json
gulp.loadTasks(cwd, context);
