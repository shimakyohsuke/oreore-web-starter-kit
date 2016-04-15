'use strict';
var gulp = require('gulp');
var webpack = require('webpack-stream');
var config = require('../config.js');

gulp.task('webpack', function() {
    gulp.src(['./src/js/entry.js'])
        .pipe(webpack({
            output: {
                filename: 'bundle.js'
            },
            module: {
                loaders: [
                    {
                        test: /\.(js)$/,
                        exclude: /node_modules/,
                        loader: 'babel?presets[]=es2015'
                    }
                ]
            }
        }))
        .pipe(gulp.dest(config.simple.publishDir));
});
