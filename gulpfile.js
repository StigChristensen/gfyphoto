var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
		concat = require('gulp-concat'),
		rename = require('gulp-rename'),
		sass = require('gulp-sass'),
		uglify = require('gulp-uglify'),
		cssmin = require('gulp-cssmin'),
		watch = require('gulp-watch'),
		livereload = require('gulp-livereload');


// dependencies task
gulp.task('vendor', function() {
	return gulp.src([
    	'src/bower_components/velocity/velocity.min.js',
    ])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('public_html/wp-content/themes/gfy/js/'));
});

// scripts task
gulp.task('scripts', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('public_html/wp-content/themes/gfy/js/'))
    // .pipe(uglify())
    // .pipe(rename({
    //   suffix: '.min'
    // }))
    // .pipe(gulp.dest('public_html/wp-content/themes/gfy/js/'))
    // .pipe(livereload());
});


// styles task
gulp.task('styles', function() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public_html/wp-content/themes/gfy/css/'))
    // .pipe(cssmin())
    // .pipe(rename({
    //   suffix: '.min'
    // }))
    // .pipe(gulp.dest('public_html/wp-content/themes/gfy/css/'))
    // .pipe(livereload());
});

gulp.task('copy', function() {
  // Copy all img assets
  gulp.src(['src/img/**/**'])
    .pipe(gulp.dest('public_html/wp-content/themes/gfy/img/'));
});


// Watch
gulp.task('watch', function() {
	// livereload.listen();
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/sass/**/*.scss', ['styles']);
  gulp.watch('src/img/**', ['copy']);
});


gulp.task('default', ['vendor', 'scripts', 'styles', 'copy', 'watch']);
