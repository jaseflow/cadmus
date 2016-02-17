var gulp = require("gulp");
var ghPages = require("gulp-gh-pages");
var replace = require("gulp-replace");
var imagemin = require("gulp-imagemin");

gulp.task("copy", function() {
    return gulp.src([ "./src/**/*", "!./src/assets/images/*" ])
        .pipe(replace("assets", "pages/EWE/CADMUS/assets"))
        .pipe(replace(/href="\/questions/g, 'href="/pages/EWE/CADMUS/questions'))
        .pipe(gulp.dest("./dist"))
});

gulp.task("images", function() {
    return gulp.src("./src/assets/images/*")
    .pipe(imagemin({
        progressive: true
    }))
    .pipe(gulp.dest("./dist/assets/images"))
});

gulp.task("deploy", ["copy", "images"], function() {
    return gulp.src("./dist/**/*")
        .pipe(ghPages());
});
