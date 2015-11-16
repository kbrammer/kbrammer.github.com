'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');
var stylus = require('gulp-stylus');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var del = require('del');

gulp.task('js:compile', ['js:clean', 'js:lint'], function() {
    return browserify({
            debug: true
        })
        .transform(babelify.configure({
            sourceMapRelative: false
        }))
        .require('./src/app.js', {
            entry: true
        })
        .bundle()
        .on('error', function(err) {
            console.log('Error : ' + err.message);
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./assets/js'));
});

gulp.task('js:lint', function() {
    return gulp.src('./src/**/*.js')
        .pipe(jshint({
            esnext: true
        }))
        .pipe(jshint.reporter('default'));
});

gulp.task('js:clean', function() {
    return del(['./assets/js/**']);
});

gulp.task('css:compile', ['css:clean'], function () {
  return gulp.src('./stylus/main.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('css:clean', function() {
    return del(['./assets/css/**']);
});

gulp.task('default', function() {
    gulp.start('js:compile');
    watch('./src/**/*.js', function() {
        gulp.start('js:compile');
    });

    gulp.start('css:compile');
    watch('./stylus/**/*.styl', function() {
        gulp.start('css:compile');
    });
});