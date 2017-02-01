'use strict'

import gulp from 'gulp'
import browserSync from 'browser-sync'
const config = require('../config.js')

gulp.task('browser-sync', () => {
  browserSync.init(config.tasks.browserSync)
})
