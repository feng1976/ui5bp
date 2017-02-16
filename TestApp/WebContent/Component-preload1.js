var gulp = require('gulp');
var ui5preload = require('gulp-ui5-preload');

gulp.task('default', function(){
  return gulp.src([
                    './controller/*.js',
                    './service/*.js',
                    './util/*.js',
                    './application/*.js',
                    './views/*.xml',
                    './Component.js',
                    './i18n/*.properties',
                    './css/*.css'
                  ])
          .pipe(ui5preload({base:'./',namespace:'TestApp'}))
          .pipe(gulp.dest('./'));
     })