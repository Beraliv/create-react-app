import gulp from 'gulp';

import {
  build,
  buildProd,
  clean,
  defaultDev,
  defaultProd,
  test,
  watch,
  start
} from './gulp';

gulp.task('build', build);
gulp.task('build:prod', buildProd);
gulp.task('clean', clean);
gulp.task('default', defaultDev);
gulp.task('default:prod', defaultProd);
gulp.task('test', test);
gulp.task('watch', watch);
gulp.task('start', start);