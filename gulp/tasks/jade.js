'use strict';
var fs = require('fs');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var jade = require('gulp-jade');
var data = require('gulp-data');
var size = require('gulp-size');
var changed = require('gulp-changed');
var minimist = require('minimist');
var config = require('../config.js');

gulp.task('jade', function() {
    var env = minimist(process.argv.slice(2));
    var DEST = config.simple.publishDir;
    return gulp.src(config.watch.jade)
        .pipe(changed(
            DEST,
            {extension: '.html'}
        ))
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(data(function(file) {
            var data = {
                __page: file.path.replace(__dirname, '').replace(/^\//, '').replace(/src\/jade/, '').replace(/\.jade$/, ''),
                site: JSON.parse(fs.readFileSync(config.data + '/site.json')),
                meta: JSON.parse(fs.readFileSync(config.data + '/meta.json')),
                loop: require(config.data + '/loop.js')
            };
            return data;
        }))
        .pipe(jade({
            pretty: true
        }))
        .pipe(size({
            showFiles: true
        }))
        .pipe(gulp.dest(DEST));
});
