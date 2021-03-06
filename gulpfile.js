"use strict";
// constant for requires
const gulp = require('gulp');
const ts = require('gulp-typescript');
const merge = require('merge2');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const usemin = require('gulp-usemin');
var sass = require('gulp-sass');

// constant for paths
const compress = {
    src: 'src/client/js/**/*.js',
    out: 'scripts.min.js',
    dest: 'build/needlehaystack',
    htmlsrc: 'src/client/*.html',
    options: {
        mangle: true,
    }
};
const transpile = {
  scss: {
    src: './transpile/scss/main.scss',
    watch: './transpile/scss/**/*.scss',
    output: './src/client/css/'
  }
};

gulp.task('sass', function () {
  gulp.src(transpile.scss.src)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(transpile.scss.output));
});

gulp.task('sass:watch', function () {
  gulp.watch(transpile.scss.watch, ['sass']);
});

gulp.task('usemin', function() {
  return gulp.src(compress.htmlsrc)
    .pipe(usemin())
    .pipe(gulp.dest(compress.dest));
});
gulp.task('build', ['usemin'], () => {
   console.log('done');
});