'use strict';
var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config.js');

gulp.task('watch', function() {
    gulp.watch(config.watch.js, ['browserify']);
    gulp.watch(config.watch.jade, ['jade']);
});
