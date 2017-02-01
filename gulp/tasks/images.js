'use strict'

import gulp from 'gulp'
import watch from 'gulp-watch'
import plumber from 'gulp-plumber'
import debug from 'gulp-debug'
import config from '../config.js'
const log = console['log']
const DEST = config.baseConfig.publishDir

gulp.task('images', () => {
  return gulp.src(config.tasks.images.src, {base: './src/'})
    .pipe(plumber({
      handleError: function (err) {
        log(err)
        this.emit('end')
      }
    }))
    .pipe(debug())
    .pipe(gulp.dest(DEST))
})

gulp.task('images:watch', () => {
  return watch(config.tasks.images.src, () => {
    return gulp.start(['images'])
  })
})
