import gulp from 'gulp';
import browserSync from 'browser-sync';
import webserver from 'gulp-webserver';

import paths from '../config/gulp.config';
import defaultDev  from './default';
import watch from './watch';

const start = gulp.series(defaultDev, gulp.series(gulp.parallel(syncFiles, watch), startProject));

function startProject() {
  return gulp.src(paths.ROOT)
    .pipe(webserver({
      livereload: true,
      directoryListing: {
        enable: true,
        path: paths.filename.APP
      },
      fallback: paths.filename.DEST_INDEX_HTML
    }));
}

function syncFiles() {
  return browserSync({
    server: {
      baseDir: paths.dest.BASE_DIR
    },
    open: true,
    online: false,
    notify: false
  });
}

export default start;