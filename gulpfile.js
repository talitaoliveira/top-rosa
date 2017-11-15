var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    prefix      = require('gulp-autoprefixer'),
    minifycss   = require('gulp-minify-css'),
    connect     = require('gulp-connect'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    console.log('chamando sass');
    gulp.src('./src/style.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(minifycss())
                .pipe(gulp.dest('./dist/css'))
                .pipe(browserSync.stream());
});

gulp.task('serve',['sass'] , function () {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch("./dist/*").on("change", browserSync.reload);
    gulp.watch('./src/style.scss', ['sass']);
});

gulp.task('default', ['sass','serve']);