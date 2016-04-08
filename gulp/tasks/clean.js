'use strict';
var gulp = require('gulp');
var del = require('del');
var config = require('../config').simple;

gulp.task('clean', function() {
    del.sync([config.publishDir]);
});
