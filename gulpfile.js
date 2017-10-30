
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./src/sass/{main,reset}.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
    browserSync.watch('**/*.html').on('change', browserSync.reload);

});

gulp.task('default', ['sass', 'serve'], function () {
    gulp.watch("./src/sass/*.scss", ['sass']);
});