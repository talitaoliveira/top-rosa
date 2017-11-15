var gulp        = require('gulp'),
sass        = require('gulp-sass'),
prefix      = require('gulp-autoprefixer'),
minifycss   = require('gulp-minify-css'),
connect     = require('gulp-connect'),
browserSync = require('browser-sync').create();

gulp.task('sass', function () {
console.log('chamando sass');
gulp.src('./src/css/style.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(minifycss())
            .pipe(gulp.dest('./dist/css'))
            .pipe(browserSync.stream());
});

// TASK HTML
gulp.task('html', function (){
console.log('salvando html');
gulp.src('./src/html/*.html')
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
});

// TASK JS
gulp.task('js', function (){
console.log('salvando js');
gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream());
});

// TASK IMG
gulp.task('img', function (){
console.log('salvando img');
gulp.src('./src/img/*')
    .pipe(gulp.dest('./dist/img'))
    .pipe(browserSync.stream());
});

gulp.task('serve',['sass'] , function () {
browserSync.init({
    server: {
        baseDir: "./dist"
    }
});

gulp.watch("./src/*").on("change", browserSync.reload);
gulp.watch('./src/style.scss', ['sass']);
});

gulp.task('default', ['html','sass', 'js', 'img','serve']);