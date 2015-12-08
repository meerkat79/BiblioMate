var gulp = require('gulp');

// Include Our Plugins
var uglify = require('gulp-uglify');
// var jshint = require('gulp-jshint');
// var sass = require('gulp-sass');
var concat = require('gulp-concat');
// var rename = require('gulp-rename');

gulp.task('test', function(){
	console.log('test');
});

//default

gulp.task('default', function(){

	gulp.src(['src/*.js','src/app/js/*.js'])
	.pipe(concat('all.js'))
	.pipe(gulp.dest('./dist/js'));

	gulp.src('dist/js/*js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));	

});
