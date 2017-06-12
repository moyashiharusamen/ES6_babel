var gulp  = require("gulp");
var babel = require("gulp-babel");
var rename = require("gulp-rename");

gulp.task("babel_build", function () {
  return gulp.src("src/*es6.js")
      .pipe(babel())
      .pipe(rename(function (path) {
          var cutLength = path.basename.length - 4;
          path.basename = path.basename.slice(0, cutLength);
      }))
      .pipe(gulp.dest("dist"));
});

gulp.task('babel_watch', function() {
  gulp.watch('src/*es6.js', ['babel_build'])
});

gulp.task('default', [ 'babel_build', 'babel_watch']);
