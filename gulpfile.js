const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//added this for purging the css file
const purgecss = require('gulp-purgecss');

function buildStyles() {
    //where the scss file is located
  return src('custom_sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    //added this method to purge the css file to make it lighter and use only the css that is needed(only use this when the project is ready to be deployed)
    .pipe(purgecss({ content: ['*.html'] }))

    .pipe(dest('css'));
}

function watchTask() {
  //added this , '*.html' to the watch method to watch for changes in the html file(when purging the css file while editting)
  //watch for changes in the custom_sass folder and the html file
  watch(['custom_sass/**/*.scss', '*.html'], buildStyles);
}

exports.default = series(buildStyles, watchTask); 