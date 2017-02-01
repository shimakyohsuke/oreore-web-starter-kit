'use strict'

import gulp from 'gulp'
import watch from 'gulp-watch'
import config from '../config.js'
import webpack from 'webpack'
import webpackStream from 'webpack-stream'
import webpackConfig from '../webpack.config.babel'
import plumber from 'gulp-plumber'
const log = console['log']

gulp.task('webpack', () => {
  if (config.envProduction) {
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin())
  } else {
    webpackConfig.devtool = 'source-map'
  }
  return gulp.src(config.tasks.webpack.src)
    .pipe(plumber({
      handleError: function (err) {
        log(err)
        this.emit('end')
      }
    }))
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(config.tasks.webpack.dest))
})

gulp.task('webpack:watch', () => {
  return watch(config.tasks.webpack.watch, () => {
    return gulp.start(['webpack'])
  })
})
