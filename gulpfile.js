var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('./src/*')
  .pipe(gulp.dest('build/'))
  
  gulp.src('./node_modules/deepstream.io-client-js/dist/deepstream.min.js')
  .pipe(gulp.dest('build/'))
  
  gulp.src('build')
  .pipe(webserver({
    directoryListing: false,
    open: true
  }));
});