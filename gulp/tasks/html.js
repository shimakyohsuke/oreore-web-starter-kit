'use strict'

import fs from 'fs'
import gulp from 'gulp'
import watch from 'gulp-watch'
import plumber from 'gulp-plumber'
import gulpIf from 'gulp-if'
import pug from 'gulp-pug'
import data from 'gulp-data'
import size from 'gulp-size'
import changed from 'gulp-changed'
import config from '../config.js'

const log = console['log']
const DEST = config.baseConfig.publishDir
const path = require('path')

gulp.task('html', () => {
  return gulp.src(config.tasks.pug.src)
    .pipe(gulpIf(
      !config.envProduction,
      changed(
        DEST,
        {extension: '.html'}
      )
    ))
    .pipe(plumber({
      handleError: function (err) {
        log(err)
        this.emit('end')
      }
    }))
    .pipe(data(function (file) {
      const data = {
        isProduction: config.envProduction,
        isDevelopment: config.envDevelopment,
        __page: file.path.replace(path.resolve(''), '').replace(/^\//, '').replace(/src\/pug/, '').replace(/\.pug$/, '').replace('index', ''),
        site: JSON.parse(fs.readFileSync(path.resolve('') + '/' + config.tasks.data.src + 'site.json')),
        meta: JSON.parse(fs.readFileSync(path.resolve('') + '/' + config.tasks.data.src + 'meta.json')),
        loop: require(path.resolve('') + '/' + config.tasks.data.src + 'loop.js')
      }
      return data
    }))
    .pipe(pug({
      pretty: true
    }))
    .pipe(size({
      showFiles: true
    }))
    .pipe(gulp.dest(DEST))
})

gulp.task('html:watch', () => {
  return watch(config.tasks.pug.watch, () => {
    return gulp.start(['html'])
  })
})
