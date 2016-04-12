'use strict';
var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('webpack', function() {
    gulp.src(['./src/js/entry.js'])
        .pipe(webpack({
            output: {
                filename: 'bundle.js'
            }
        }))
        .pipe(gulp.dest('./dist/js/'));
});
