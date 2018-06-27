var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');

gulp.task('sass', function(){
  var mergesass = gulp.src('wp-content/themes/portfolio/scss/*.scss')
  .pipe(sass())
  .pipe(concat('style.css'))
  .pipe(gulp.dest('wp-content/themes/portfolio'));
  return mergesass;
});

gulp.task('watch', function(){
  gulp.watch('wp-content/themes/**/*.scss', ['sass']);
});
