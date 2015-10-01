
// constant for requires
const gulp = require('gulp');
const ts = require('gulp-typescript');
const merge = require('merge2');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const usemin = require('gulp-usemin');

// constant for paths
const compress = {
    src: 'src/client/js/**/*.js',
    out: 'scripts.min.js',
    dest: 'build/div-kick',
    htmlsrc: 'src/client/*.html',
    options: {
        mangle: true,
    }
}
gulp.task('watch', ['tmp.js'], () => {
    gulp.watch(CONST.tmp.src, ['tmp.js']);
});

gulp.task('usemin', function() {
  return gulp.src(compress.htmlsrc)
    .pipe(usemin())
    .pipe(gulp.dest(compress.dest));
});
gulp.task('build', ['usemin'], () => {
   console.log('done');
});