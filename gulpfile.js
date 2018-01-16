'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('./tasks/configs/main.config');
const register = require(`./tasks/utils/register`);

register(gulp, plugins, config)({
  'lint:scss': 'lint-scss',
  'build:scss': 'build-scss',
  'build:js': 'build-js',
  'build:svg': 'build-svg',
  'copy': 'copy',
  'watch': 'watch',
  'serve': 'serve'
});

gulp.task('build', gulp.parallel('build:js', 'build:scss', 'build:svg', 'copy'));
gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));
