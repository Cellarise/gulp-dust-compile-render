/**
 * A gulp build task to calculate coverage stats from the Istanbul reporter json-summary.
 * Coverage stats are appended to package.json config.coverage.stats property.
 * The coverage stats include an overall coverage percentage and badge colour.
 * @alias tasks:coverage-stats
 */
module.exports = function(gulp) {
    "use strict";
    var jeditor = require('gulp-json-editor');
    var fs = require('fs');

    gulp.task('coverage-stats', function() {

        function calculateCoverageStats(json){
            var coveragePath = process.cwd() + '/Reports/code-coverage/coverage-summary.json';
            var coverageStats = {
                lines: {"total": 0, "covered": 0, "skipped": 0 },
                branches: {"total": 0, "covered": 0, "skipped": 0 },
                statements: {"total": 0, "covered": 0, "skipped": 0 },
                functions: {"total": 0, "covered": 0, "skipped": 0 },
                skipped: {},
                overall: {}
            };

            //helper function to append stats from coverage report
            function addStats(collection, file){
                var coverageType, stat;
                for (coverageType in collection){
                    if(collection.hasOwnProperty(coverageType)){
                        for (stat in collection[coverageType]){
                            if(collection[coverageType].hasOwnProperty(stat)){
                                collection[coverageType][stat] = collection[coverageType][stat] +
                                    file[coverageType][stat];
                            }
                        }
                    }
                }
            }

            //helper function to delete total, covered and skipped
            function deleteStats(collection){
                var coverageType;
                for (coverageType in collection){
                    if(collection.hasOwnProperty(coverageType)){
                        if(collection[coverageType].hasOwnProperty("total")){
                            delete collection[coverageType].total;
                        }
                        if(collection[coverageType].hasOwnProperty("covered")){
                            delete collection[coverageType].covered;
                        }
                        if(collection[coverageType].hasOwnProperty("skipped")){
                            delete collection[coverageType].skipped;
                        }
                    }
                }
            }

            //helper function to determine badge colour
            function badgeColour(collection, type, watermarks){
                var watermarkType = type === "overall" ? "lines" : type;
                var low = watermarks[watermarkType][0];
                var high = watermarks[watermarkType][1];
                var mid = (high - low) / 2;
                var value = collection[type].pct;
                if(value < low){
                    collection[type].colour = "red";
                } else if(value < mid){
                    collection[type].colour = "orange";
                } else if(value < high){
                    collection[type].colour = "yellow";
                } else if(value < 100){
                    collection[type].colour = "green";
                } else {
                    collection[type].colour = "brightgreen";
                }
            }

            if(fs.existsSync(coveragePath)){
                var coverageReport = JSON.parse(fs.readFileSync(coveragePath));
                var coveredFile;
                for (coveredFile in coverageReport){
                    if(coverageReport.hasOwnProperty(coveredFile)){
                        addStats(coverageStats, coverageReport[coveredFile]);
                    }
                }
                //set skipped percentages
                coverageStats.lines.pctSkipped = Math.round((coverageStats.lines.skipped / coverageStats.lines.total) * 100) || 0;
                coverageStats.branches.pctSkipped = Math.round((coverageStats.branches.skipped / coverageStats.branches.total) * 100) || 0;
                coverageStats.statements.pctSkipped = Math.round((coverageStats.statements.skipped / coverageStats.statements.total) * 100) || 0;
                coverageStats.functions.pctSkipped = Math.round((coverageStats.functions.skipped / coverageStats.functions.total) * 100) || 0;

                coverageStats.skipped.pct = Math.round(((coverageStats.lines.pctSkipped +
                    coverageStats.branches.pctSkipped +
                    coverageStats.statements.pctSkipped +
                    coverageStats.functions.pctSkipped )/ 400) * 100);

                //set overall percentages
                coverageStats.lines.pct = Math.round((coverageStats.lines.covered / coverageStats.lines.total) * 100) || 0;
                coverageStats.branches.pct = Math.round((coverageStats.branches.covered / coverageStats.branches.total) * 100) || 0;
                coverageStats.statements.pct = Math.round((coverageStats.statements.covered / coverageStats.statements.total) * 100) || 0;
                coverageStats.functions.pct = Math.round((coverageStats.functions.covered / coverageStats.functions.total) * 100) || 0;
                coverageStats.overall.pct = Math.round(((coverageStats.lines.pct +
                    coverageStats.branches.pct +
                    coverageStats.statements.pct +
                    coverageStats.functions.pct )/ 400) * 100);

                //set watermark color for badge
                var watermarks = json.config.coverage.watermarks;
                badgeColour(coverageStats, "lines", watermarks);
                badgeColour(coverageStats, "branches", watermarks);
                badgeColour(coverageStats, "statements", watermarks);
                badgeColour(coverageStats, "functions", watermarks);
                badgeColour(coverageStats, "overall", watermarks);

            }

            deleteStats(coverageStats);
            return coverageStats;
        }

        return gulp.src(['package.json'])
            .pipe(jeditor(function(json) {
                if(json.config.hasOwnProperty('coverage')){
                    json.config.coverage.stats = calculateCoverageStats(json);
                }
                return json;
            }))
            .pipe(gulp.dest(''));
    });
};
