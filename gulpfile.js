/*

    GULPFILE 11ART - COMANDOS

    1) gulp build - compila o projeto e serve pelo browserSync para o autoreload
    2) gulp watch - assiste por mudanças e compila se houverem

*/

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync'),
    notify = require('gulp-notify'),
	runSequence = require('run-sequence'),
    rigger = require('gulp-rigger');
    rimraf = require('rimraf');

// BROWSERSYNC
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'dist'
        },
        notify: false
    });
});

// HTML
gulp.task('html', function() {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream: true}));
});

// SASS
gulp.task('sass', function() {
    return gulp.src(['app/scss/main.scss'])
        .pipe(sass({outputStyle: 'expanded'}).on("error", notify.onError()))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(cssnano({zindex: false}))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream: true}))
        //.pipe(gulp.dest('app/css'));
});

// JS

gulp.task('js', function() {
    return gulp.src(['app/js/**/*.js'])
        .pipe(rigger())
		.pipe(concat('main.js'))
        .pipe(uglify()) 
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({stream: true}));
});

// FONTS
gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'));
});

// IMAGES
gulp.task('img', function() {
    return gulp.src('app/img/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

// CLEAR dist
gulp.task('clear', function(cb) {
    rimraf('./dist', cb);
});

// WATCH
gulp.task('watch', function() {
    gulp.watch('app/*.html', ['html']);
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/js/**/*.js', ['js']);
    gulp.watch('app/fonts/**/*.*', ['fonts']);
    gulp.watch('app/img/**/*.*', ['img']);
    console.log("\n\n\n11Art - GulpFile\n(~O3O')~ ASSISTINDO MUDANCAS! (~O3O')~\n\n\n")
});

// BUILD

gulp.task('finish', function(){
	console.log('\n\n\n11Art - GulpFile\n(~‾3‾)~ BUILD FINALIZADO! (~‾3‾)~\n\n\n');
});

gulp.task('build', function(){
	runSequence('clear', 'html', 'sass', 'js', 'fonts', 'img', 'browser-sync', 'finish');
});