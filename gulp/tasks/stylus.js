var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var stylus = require('gulp-stylus');
var header = require('gulp-header');
var please = require('gulp-pleeease');
var size = require('gulp-size');
var config = require('../config.js');

gulp.task('stylus', function() {
    var pkg = require('../../package.json');
    var BANNER = [
            '@charset "UTF-8";',
            '/**',
            ' * <%= pkg.name %> - <%= pkg.description %>',
            ' * @link <%= pkg.homepage %>',
            ' * @version v<%= pkg.version %>',
            ' * @Author <%= pkg.author.name %>',
            ' * @Author URI <%= pkg.author.url %>',
            ' */',
            ''
        ].join('\n');
    return gulp.src(config.watch.stylus)
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(stylus())
        .pipe(please({
            'browsers': ['last 2 versions', 'Android 2.3'],
            minifier: false
        }))
        .pipe(size({
            showFiles: true
        }))
        .pipe(header(BANNER, { pkg: pkg } ))
        .pipe(gulp.dest(config.simple.publishDir));
});
