var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./app"
        }
    });
});


gulp.task('styles', function () {
  gulp.src('./app/scss/style.scss')
    .pipe($.sass())
    .pipe($.autoprefixer('last 15 versions'))
    .pipe($.minifyCss())
    .pipe($.rename('styles.min.css'))
    .pipe(gulp.dest('app/css'))
    .pipe(reload({stream:true}));

gulp.task('compress', function() {
  gulp.src('./app/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'))
});


gulp.task('html', function(){
  gulp.src('./app/*.html')
    .pipe(reload({stream:true}));
});

gulp.task('default', ['styles', 'compress', 'html']);

gulp.task('default', ['styles', 'browser-sync'], function  () {
	gulp.watch("scss/*.scss", ['styles']);
	gulp.watch('./app/*.html', ['html']);
});
