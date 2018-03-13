'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

var AUTOPREFIXER_BROWSERS = [
    'last 2 versions'
];

gulp.task('watch', ['sass'], function () {
    gulp.watch(['scss/**/*.scss'], ['sass']);
});

gulp.task('sass', function () {
    return gulp.src('scss/style.scss')
        .pipe(sass({
            onError: function (error) {
                gutil.log(gutil.colors.red('Error: ' + error.message));
                gutil.log('File: ' + gutil.colors.red(error.file + ':' + error.line));
                gutil.beep();
            }
        }).on('error', sass.logError))
        .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(gulp.dest('css'));
});
