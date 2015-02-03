"use strict";

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var wiredep = require('wiredep').stream;

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "./app"
		}
	});
});

//bower
gulp.task('bower', function  () {
	gulp.src('./app/*.html')
		.pipe(wiredep({
			directory: './app/bower_components'
		}))
		.pipe(gulp.dest('./app'));
});

gulp.task('styles', function () {
  gulp.src('./app/scss/styles.scss')
	.pipe($.sass())
	.pipe($.autoprefixer('last 15 versions'))
	.pipe($.minifyCss())
	.pipe($.rename('styles.min.css'))
	.pipe(gulp.dest('app/css'))
	.pipe(reload({stream:true}));
});

gulp.task('compress', function() {
  gulp.src('./app/scripts/*.js')
	.pipe($.uglify())
	.pipe(gulp.dest('./dist/scripts'));
});


gulp.task('html', function(){
  gulp.src('./app/*.html')
	.pipe(reload({stream:true}));
});

gulp.task('default', ['styles', 'compress', 'html']);

gulp.task('serve', ['styles', 'browser-sync'], function  () {
	gulp.watch('./app/scss/*.scss', ['styles']);
	gulp.watch('./app/*.html', ['html']);
});
