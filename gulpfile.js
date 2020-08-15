const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const deploy = require('gulp-gh-pages');

const src = "./src"
const dist = "./dist"

// Copy HTML files to dist
gulp.task('copy-html', () => {
    return gulp.src(`${src}/**/*.html`)
      .pipe(gulp.dest(dist))
})

// Copy JS files to dist
gulp.task('copy-js', () => {
    return gulp.src(`${src}/**/*.js`)
      .pipe(gulp.dest(dist))
})

// Copy images to dist
gulp.task('copy-images', () => {
    return gulp.src(`${src}/images/**/*.{png,gif,jpg,svg}`)
        .pipe(gulp.dest(`${dist}/images/`))
})

// Sass to css
gulp.task('styles', () => {
    return gulp.src(`${src}/sass/**/*.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(`${dist}/css/`));
});

// Clean the dist folder
gulp.task('clean', () => {
    return del([
        `${dist}/*`,
    ]);
});

// Deploy to Github pages
gulp.task('deploy', function () {
    return gulp.src("./dist/**/*")
      .pipe(deploy())
});

// Dev mode - watch for changes and recompile
gulp.task('watch', () => {
  gulp.watch(`${src}/**/*`, (done) => {
      gulp.series(['clean', 'copy-html', 'copy-js', 'copy-images', 'styles'])(done);
  });
});

// Default talk - build everything for production
gulp.task('default', gulp.series(['clean', 'copy-html', 'copy-js', 'copy-images', 'styles']));