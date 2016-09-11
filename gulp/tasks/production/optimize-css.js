var gulp = require('gulp');
var csso = require('gulp-csso');
var config = require('../../config').optimize.css;

/**
 * Copy CSS files
 */
gulp.task('optimize:css', function() {
  return gulp.src(config.src)
    .pipe(csso(config.options))
    .pipe(gulp.dest(config.dest));
});
