var gulp = require('gulp');
var connect = require('gulp-connect');
var history = require('connect-history-api-fallback');
var config = require('../config').server;

gulp.task('server', function() {
  connect.server(config.settings);
});
