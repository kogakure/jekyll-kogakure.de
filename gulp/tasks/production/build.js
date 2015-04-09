var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:production', function(callback) {
  runSequence('delete', 'criticalcss', 'jekyll:production',
  [
    'sass',
    'scripts',
    'images'
  ],
  'base64',
  'combine:mediaqueries',
  [
    'optimize:html',
    'optimize:css',
    'optimize:js',
    'optimize:images'
  ],
  'revision',
  'rev:collect',
  'webp',
  callback);
});
