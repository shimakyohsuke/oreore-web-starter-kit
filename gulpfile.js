var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('./gulp/tasks', {recurse: true});

gulp.task('default', ['build', 'browser-sync', 'watch']);
