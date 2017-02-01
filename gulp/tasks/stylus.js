'use strict'

import gulp from 'gulp'
import watch from 'gulp-watch'
import plumber from 'gulp-plumber'
import stylus from 'gulp-stylus'
import header from 'gulp-header'
import please from 'gulp-pleeease'
import size from 'gulp-size'
import config from '../config.js'
import pkg from '../../package.json'
import gulpIf from 'gulp-if'
import sourcemaps from 'gulp-sourcemaps'

const DEST = config.baseConfig.publishDir
const log = console['log']
const BANNER = [
  '@charset "UTF-8";',
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @link <%= pkg.homepage %>',
  ' * @version v<%= pkg.version %>',
  ' * @Author <%= pkg.author.name %>',
  ' * @Author URI <%= pkg.author.url %>',
  ' */',
  ''
].join('\n')

gulp.task('stylus', () => {
  return gulp.src(config.tasks.stylus.src)
    .pipe(plumber({
      handleError: function (err) {
        log(err)
        this.emit('end')
      }
    }))
    .pipe(gulpIf(
      !config.envProduction,
      sourcemaps.init()
    ))
    .pipe(stylus({
      'include css': true
    }))
    .pipe(please({
      'browsers': ['last 2 versions'],
      minifier: false
    }))
    .pipe(gulpIf(
      !config.envProduction,
      sourcemaps.write()
    ))
    .pipe(size({
      showFiles: true
    }))
    .pipe(header(BANNER, { pkg: pkg }))
    .pipe(gulp.dest(DEST))
})

gulp.task('stylus:watch', () => {
  return watch(config.tasks.stylus.watch, () => {
    return gulp.start(['stylus'])
  })
})
