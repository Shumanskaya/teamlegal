var	gulp = require('gulp');
var mustache = require("gulp-mustache");
var rename = require("gulp-rename");


gulp.task('russian', function() {
    return gulp.src("index.mustache")
    .pipe(mustache('ru.json',{},{}))
    .pipe(rename("index.html"))
    .pipe(gulp.dest("./"));
})

gulp.task('english', function() {
    return gulp.src("index.mustache")
    .pipe(mustache('eng.json',{},{}))
    .pipe(rename("english.html"))
    .pipe(gulp.dest("./"));
})
