var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();

gulp.task('browser-sync',function() {
    bs.init({
        server: {
            baseDir: "./app",
            files: ['app/css/*.css','app/js/*.js','app/*.html'],
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
                .pipe(sass())
                .pipe(gulp.dest('css'))
                .pipe(bs.reload({stream: true}));
});

gulp.task('watch', function () {
    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', bs.reload);
    gulp.watch("app/css/*.css").on('change', bs.reload);
});
