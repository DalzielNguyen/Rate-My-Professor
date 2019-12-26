const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const postcssPresetEnv = require('postcss-preset-env');
const postcssNormalize = require('postcss-normalize');
const sourcemaps = require('gulp-sourcemaps');
const nodemon = require('gulp-nodemon');

gulp.task('scss', function() {
  return gulp.src('./scss/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    // .pipe(postcss([
    //   require('postcss-flexbugs-fixes'),
    //   postcssPresetEnv({
    //     autoprefixer: {
    //       grid: 'autoplace'
    //     },
    //     stage: 0
    //   })
    // ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.public/css/'));
});


gulp.task('server', function() {
  gulp.watch(['./scss/**/*.scss', './scss/**/*.css'], gulp.series('scss'));
  nodemon({
    script: './bin/www'
    , ext: 'js html'
    , env: { 'NODE_ENV': 'development' }
  })
});

gulp.task('default', gulp.series('scss', 'server'));
