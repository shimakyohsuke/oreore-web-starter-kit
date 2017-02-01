'use strict'

import gulp from 'gulp'

gulp.task('watch', ['html:watch', 'stylus:watch', 'webpack:watch', 'images:watch'])
