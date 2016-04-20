var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var config = require('../config.js').vendorSass;
var concatCss = require('gulp-concat-css');

gulp.task('vendorStyles', function() {
  gulp.src(config.src)
    .pipe(sass(config.settings))
    .pipe(concatCss("vendorBundle.css"))
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload());
});
