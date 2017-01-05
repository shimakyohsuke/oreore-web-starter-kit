'use strict';
var fs = require('fs');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var gulpIf = require("gulp-if");
var pug = require('gulp-pug');
var data = require('gulp-data');
var size = require('gulp-size');
var changed = require('gulp-changed');
var minimist = require('minimist');
var config = require('../config.js');
var log = console['log'];

gulp.task('html', function() {
    var DEST = config.simple.publishDir;
    var knownOptions = {
        string: 'env',
        default: { env: process.env.NODE_ENV || 'development' }
    };
    var options = minimist(process.argv.slice(2), knownOptions);
    var isProduction = (options.env === 'production') ? true : false;

    log('[build env]', options.env, '[is production]', isProduction);

    return gulp.src(config.src.pug)
        .pipe(gulpIf(
            !isProduction,
            changed(
                DEST,
                {extension: '.html'}
            )
        ))
        .pipe(plumber({
            handleError: function (err) {
                log(err);
                this.emit('end');
            }
        }))
        .pipe(data(function(file) {
            var data = {
                isProduction: isProduction,
                __page: file.path.replace(__dirname, '').replace(/^\//, '').replace(/src\/pug/, '').replace(/\.pug$/, ''),
                site: JSON.parse(fs.readFileSync(config.data + '/site.json')),
                meta: JSON.parse(fs.readFileSync(config.data + '/meta.json')),
                loop: require(config.data + '/loop.js')
            };
            return data;
        }))
        .pipe(pug({
            pretty: true
        }))
        .pipe(size({
            showFiles: true
        }))
        .pipe(gulp.dest(DEST));
});
