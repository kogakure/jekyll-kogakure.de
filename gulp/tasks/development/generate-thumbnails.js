var gulp     = require('gulp');
var os       = require('os');
var parallel = require('concurrent-transform');
var changed  = require('gulp-changed');
var resize   = require('gulp-image-resize');
var config   = require('../../config').thumbnails;

/**
 * Generate 100px wide thumbnails
 * for all recomendations
 */
gulp.task('thumbnails', function() {
  return gulp.src(config.src)
  .pipe(changed(config.changed.src))
  .pipe(parallel(
    resize(config.options),
    os.cpus().length
  ))
  .pipe(gulp.dest(config.dest));
});
