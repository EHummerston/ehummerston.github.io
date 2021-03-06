var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('lib/scss/app.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function(){
    gulp.watch('lib/scss/**/*.scss', ['sass']);
    // Other watchers
})