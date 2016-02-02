var gulp = require('gulp');
// Include Our Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');
// var jshint = require('gulp-jshint');
// var rename = require('gulp-rename');

gulp.task('test', function(){
	console.log('So you want to be a web developer, I mean boxer...');
});

gulp.task('scriptsjs', function(){

	gulp.src(['src/*.js', 'src/app/js/*.js'])
	.pipe(concat('all.js'))
	.pipe(gulp.dest('./dist/js'));

});

gulp.task('minify', function(){

	gulp.src('dist/js/all.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/mini'));//how do I rename the output file?

});

//compile SaSS
gulp.task('compilesass', function(){

	return sass('src/assets/scss/main.scss')
	.pipe(gulp.dest('src/assets/css/'));

	//old syntax for ruby-sass below
	// gulp.src('src/assets/scss/*.scss')
	// .pipe(sass())
	// .pipe(gulp.dest('src/assets/css/'));

});

//styles task
//uglifies css
gulp.task('minifyCSS', function(){
	console.log('minify css');
});

//watch task
//watches JS
gulp.task('watch', function(){
	gulp.watch(['src/*.js','src/app/js/*.js'], ['scriptsjs']);
	gulp.watch(['src/assets/scss/*.scss'], ['compilesass']);
});

gulp.task('default', ['test', 'scriptsjs', 'minify','compilesass', 'watch']);