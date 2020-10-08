// Required components
const { src, dest, watch, series, parallel } = require('gulp');
const browsersync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

// Compile CSS from Sass.
function buildStyles() {
  return src('css/style.scss')
    .pipe(plumbError()) // Global error handler through all pipes.
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7']))
    .pipe(dest('dist/styles/'))
    .pipe(browsersync.stream());
}

// Watch changes on all *.scss files, lint them and
// trigger buildStyles() at the end.
function watchFiles() {
  watch(
    ['css/*.scss'],
    { events: 'all', ignoreInitial: false },
    series(buildStyles)
  );
}

// Init BrowserSync.
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: '_site'
    },
    reloadDelay: 600
  });
  done();
}

// Error handler.
function plumbError() {
  return plumber({
    errorHandler: function(err) {
      notify.onError({
        templateOptions: {
          date: new Date()
        },
        title: "Gulp error in " + err.plugin,
        message:  err.formatted
      })(err);
      beeper();
      this.emit('end');
    }
  })
}

// Export commands.
exports.default = parallel(browserSync, watchFiles); // $ gulp
exports.sass = buildStyles; // $ gulp sass
exports.watch = watchFiles; // $ gulp watch
exports.build = series(buildStyles); // $ gulp build