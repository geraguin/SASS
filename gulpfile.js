const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('custom_sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('css'));
}

function watchTask() {
  watch(['custom_sass/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask); 