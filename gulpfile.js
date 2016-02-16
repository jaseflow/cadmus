var gulp = require("gulp");
var replace = require("gulp-replace");

gulp.task("replace", function() {
    gulp.src(["index.html"])
        .pipe(replace(/dist\//g, "pages/ewe/CADMUS/"))
        .pipe(gulp.dest("dist"))
});
