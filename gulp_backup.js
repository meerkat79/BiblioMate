'use strict';

// Include gulp
var gulp = require('gulp');


// Include Our Plugins
var uglify = require('gulp-uglify');
// var jshint = require('gulp-jshint');
// var sass = require('gulp-sass');
// var concat = require('gulp-concat');
// var rename = require('gulp-rename');


//test task
gulp.task('default', function(){
    gulp.src('src/app/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

// // Lint Task
// gulp.task('lint', function() {
//     return gulp.src('src/app/js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// // Compile Our Sass
// gulp.task('sass', function() {
//     return gulp.src('src/assets/scss/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('src/assets/css'));
// });

// // Concatenate & Minify JS
// gulp.task('scripts', function() {
//     return gulp.src('src/js/*.js')
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('dist'))
// });

// // Watch Files For Changes
// gulp.task('watch', function() {
//     gulp.watch('src/app/js/*.js', ['lint', 'scripts']);
//     gulp.watch('src/assets/scss/*.scss', ['sass']);
// });

// // Default Task
// gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);