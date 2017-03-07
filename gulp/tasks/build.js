'use strict'

import gulp from 'gulp'
import runSequence from 'run-sequence'
const notifier = require('node-notifier')

gulp.task('notify', () => {
  return notifier.notify({
    'title': 'gulp tasks',
    'message': 'Build Complete!!'
  })
})

gulp.task('build', (callback) => {
  return runSequence(
      'images',
      ['html', 'stylus', 'webpack'],
      'notify',
      callback
    )
})
