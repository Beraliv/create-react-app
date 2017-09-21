import gulp from 'gulp';

import paths from '../config/gulp.config';
import defaultDev from './default';

export default function watch() {
  gulp.watch(paths.src.MAIN, defaultDev);
  gulp.watch(paths.src.LESS, defaultDev);
  gulp.watch(paths.src.CSS, defaultDev);
  gulp.watch(paths.src.JS, defaultDev);
  gulp.watch(paths.src.ALL, defaultDev);
}