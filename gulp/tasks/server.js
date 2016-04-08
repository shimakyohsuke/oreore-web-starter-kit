'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var config = require('../config.js');

gulp.task('browser-sync', function() {
    browserSync.init(config.browserSync);
});
