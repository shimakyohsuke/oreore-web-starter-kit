// 'use strict';
// var gulp = require('gulp');
// var browserify = require('browserify');
// var source = require('vinyl-source-stream');
// var buffer = require('vinyl-buffer');
// var uglify = require('gulp-uglify');
//
// gulp.task('browserify', function () {
//     return browserify({
//         entries: './src/js/app.js'
//     }).plugin('licensify')
//         .bundle()
//         .pipe(source('main.js'))
//         .pipe(buffer())
//         .pipe(uglify({
//             preserveComments: 'license'
//         }))
//         .pipe(gulp.dest('./dist/js'));
// });
