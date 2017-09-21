import gulp from 'gulp';
import rev from 'gulp-rev';
import override from 'gulp-rev-css-url';
import revReplace from 'gulp-rev-replace';
import revDelete from 'gulp-rev-delete-original';
import del from 'del';
import replace from 'gulp-replace';

import paths from '../config/gulp.config';

export const revisionReplace = gulp.series(revisionSrcs, revisionReplaceSrcs,
  revisionReplaceCssSrcs, cleanManifestAfterReplace);

function revisionSrcs() {
  return gulp.src(paths.revision.SRC)
    .pipe(rev())
    .pipe(override())
    .pipe(revDelete())
    .pipe(gulp.dest(paths.revision.DEST))
    .pipe(rev.manifest())
    .pipe(gulp.dest(paths.revision.DEST));
}

function revisionReplaceSrcs() {
  const manifest = gulp.src(paths.revision.MANIFEST);
  return gulp.src(paths.dest.INDEX_HTML)
    .pipe(revReplace({manifest}))
    .pipe(gulp.dest(paths.revision.DEST));
}

function revisionReplaceCssSrcs() {
  const manifest = gulp.src(paths.revision.MANIFEST);
  return gulp.src(paths.revision.SRC[0])
    .pipe(replace(paths.revision.REPLACE.SOURCE, paths.revision.REPLACE.TARGET))
    .pipe(revReplace({manifest}))
    .pipe(replace(paths.revision.REPLACE.TARGET, paths.revision.REPLACE.SOURCE))
    .pipe(gulp.dest(paths.revision.DEST));
}

function cleanManifestAfterReplace() {
  return del(paths.revision.MANIFEST);
}