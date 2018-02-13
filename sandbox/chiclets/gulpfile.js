// Required components
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var order = require("gulp-order");
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var imagemin = require('gulp-imagemin');
var livereload = require('gulp-livereload');
var browserSync = require('browser-sync');
var gulpif = require('gulp-if');
var sprity = require('sprity');
var reload = browserSync.reload;
var del = require('del');

// Running the default gulp command from the command line runs the following tasks with a dependency on the clean task running first
gulp.task('default', function() {
    gulp.start('styles', 'scripts', 'watch');
});

var paths = {
	images: 'img/',
  css: 'css/',
	html: '*.html',
	js: 'js/'
}

// Run concatenation and minification on JS files
gulp.task('scripts', function() {
	gulp.src(paths.js + '*.js')
  .pipe(plumber())
	.pipe(concat('minified.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'JavaScript compiled' }));
});

// Run concatenation, compile Sass, minifcation, sourcemaps and autoprefixes
gulp.task('styles', function () {
	gulp.src(paths.css + '**/*.scss')
  .pipe(plumber())
	.pipe(sass({ style: 'expanded' }))
	.pipe(autoprefixer())
	.pipe(concat('minified.css'))
	.pipe(minifycss())
	.pipe(gulp.dest('dist/css'))
  .pipe(reload({stream: true}))
  .pipe(notify({ message: 'CSS Compiled' }));
});

// Image optimisations
gulp.task('images', function() {
  return gulp.src([paths.images + '**/*', paths.images + '*', '!' + paths.images + 'avatars', '!' + paths.images + 'captchas', '!' + paths.images + 'member_photos', '!' + paths.images + 'pm_attachments', '!' + paths.images + 'signature_attachments', '!' + paths.images + 'smileys', '!' + paths.images + 'uploads'])
  	.pipe(plumber())
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/img'))
    .pipe(notify({ message: 'Images optimised' }));
});


// generate sprite.png and _sprite.scss
gulp.task('sprites', function () {
 return sprity.src({
   src: paths.images + '/icons/*.png',
   style: './sprite.scss',
   // ... other optional options
   // for example if you want to generate scss instead of css
   processor: 'sass', // make sure you have installed sprity-sass
 })
 .pipe(gulpif('*.png', gulp.dest('./dist/img/'), gulp.dest('./dist/css/')))
});

// Cleanups
gulp.task('clean', function(cb) {
    del(['dist/css', 'dist/js', 'dist/images'], cb)
});

gulp.task('browser-sync', function() {
    browserSync({
        server: true
    });
});

// Run gulp watch to auto reload with livereload browser plugin
gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(paths.css + '**/*.scss', ['styles']);
  gulp.watch(paths.js + '*.js', ['scripts']);
  gulp.watch(paths.images + '**/*', ['images']);
  gulp.watch(paths.html, browserSync.reload);
});
