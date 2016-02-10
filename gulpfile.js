'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    rename = require('gulp-rename'),
    chalk = require('chalk'),
    copy = require('copy'),
    del = require('del'),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    Config = require('./gulpfile.config'),
    tsProject = tsc.createProject('tsconfig.json'),
    browserSync = require('browser-sync'),
    superstatic = require( 'superstatic' );

var config = new Config();

gulp.task('chalk', function(){
  console.log(chalk.cyan(chalk.bgBlue('------------------------------------------------------------------------')));
  console.log(chalk.cyan(chalk.bgBlue('------------------------------------------------------------------------')));
  console.log(chalk.red(chalk.bgBlue('----------------- The last change starts from here. --------------------')));
  console.log(chalk.cyan(chalk.bgBlue('------------------------------------------------------------------------')));
  console.log(chalk.cyan(chalk.bgBlue('------------------------------------------------------------------------')));
});

gulp.task('copy', function(cb){
  copy(['src/index.html', 'src/assets/scc/*.css'], ['dist', 'dist/assets/css'], cb);

});

gulp.task('scriptsjs', function(){

  gulp.src('src/js/*.js')
  .pipe(concat('all.js'))
  .pipe(uglify())
  .pipe(rename('minified.js'))
  .pipe(gulp.dest('./dist/js'));

});

//compile SaSS
gulp.task('compilesass', function(){

  return sass('src/assets/scss/main.scss', {
    style: "compressed",
    stopOnError: true
  })
  .pipe(gulp.dest('src/assets/css/'));

  // old syntax for ruby-sass below
  // gulp.src('src/assets/scss/*.scss')
  // .pipe(sass())
  // .pipe(gulp.dest('src/assets/css/'));

});


/**
 * Generates the app.d.ts references file dynamically from all application *.ts files.
 */
// gulp.task('gen-ts-refs', function () {
//     var target = gulp.src(config.appTypeScriptReferences);
//     var sources = gulp.src([config.allTypeScript], {read: false});
//     return target.pipe(inject(sources, {
//         starttag: '//{',
//         endtag: '//}',
//         transform: function (filepath) {
//             return '/// <reference path="../..' + filepath + '" />';
//         }
//     })).pipe(gulp.dest(config.typings));
// });

/**
 * Lint all custom TypeScript files.
 */
gulp.task('ts-lint', function () {
    return gulp.src(config.allTypeScript).pipe(tslint()).pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-ts', function () {
    var sourceTsFiles = [config.allTypeScript,                //path to typescript files
                         config.libraryTypeScriptDefinitions]; //reference to library .d.ts files
                        

    var tsResult = gulp.src(sourceTsFiles)
                       .pipe(sourcemaps.init())
                       .pipe(tsc(tsProject));

        tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
        return tsResult.js
                        .pipe(sourcemaps.write('.'))
                        .pipe(gulp.dest(config.tsOutputPath));
});

/**
 * Remove all generated JavaScript files from TypeScript compilation.
 */
gulp.task('clean-ts', function (cb) {
  var typeScriptGenFiles = [
                              config.tsOutputPath +'/**/*.js',    // path to all JS files auto gen'd by editor
                              config.tsOutputPath +'/**/*.js.map', // path to all sourcemap files auto gen'd by editor
                              '!' + config.tsOutputPath + '/lib'
                           ];

// delete the files
  del(typeScriptGenFiles, cb);
});

gulp.task('watch', function() {
    gulp.watch([config.allTypeScript], ['ts-lint', 'compile-ts']);
    gulp.watch(['src/*.js','src/app/js/*.js'], ['scriptsjs']);
    gulp.watch(['src/assets/scss/*.scss'], ['compilesass']);
});

gulp.task('serve', ['compile-ts', 'watch'], function() {
  process.stdout.write('Starting browserSync and superstatic...\n');
  browserSync({
    port: 3000,
    files: ['index.html', '**/*.js'],
    injectChanges: true,
    logFileChanges: false,
    logLevel: 'silent',
    logPrefix: 'angularin20typescript',
    notify: true,
    reloadDelay: 0,
    server: {
      baseDir: './src',
      middleware: superstatic({ debug: false})
    }
  });
});

gulp.task('default', ['chalk','ts-lint', 'compile-ts', 'scriptsjs','compilesass','watch']);
