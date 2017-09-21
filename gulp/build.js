import gulp from 'gulp';
import babel from 'gulp-babel';
import browserify from 'browserify';
import browserSync from 'browser-sync';
import del from 'del';
import inject from 'gulp-inject';
import less from 'gulp-less';
import mergeStream from 'merge-stream';
import source from 'vinyl-source-stream';
import uglify from 'gulp-uglify';
import pump from 'pump';
import envify from 'gulp-envify';

import paths from '../config/gulp.config';
import INJECTION_PATHS from '../config/injection.config';
import API_URL from '../config/api.config';
import EXTERNAL_DEPENDENCIES  from '../config/external.dependencies.config';
import { revisionReplace } from './revision';

const lessFiles = [paths.src.LESS, ...EXTERNAL_DEPENDENCIES.LESS];
const jsFiles = [paths.src.JS, ...EXTERNAL_DEPENDENCIES.JS];
const imgFiles = [paths.src.IMG, ...EXTERNAL_DEPENDENCIES.IMGS];
const injectionFiles = [INJECTION_PATHS.JS, INJECTION_PATHS.CSS];

const buildFiles = gulp.parallel(buildIndex, buildLess, buildImg, buildJs);

const build = gulp.series(buildFiles,
  browserifyBundle, cleanAfterBrowserify, injectFiles, revisionReplace);

const buildProd = gulp.series(setProdMode, buildFiles,
  browserifyBundle, cleanAfterBrowserify, uglifyJS, injectFiles, revisionReplace);

let isDev = true;
let environment = {};

function buildIndex() {
  const html = gulp.src(paths.src.MAIN[0]);
  const js = gulp.src(paths.src.MAIN[1]).pipe(babel());
  return mergeStream(html, js)
    .pipe(gulp.dest(paths.dest.BUILD));
}

function buildLess() {
  const lessStream = gulp.src(lessFiles).pipe(less());
  return lessStream.pipe(gulp.dest(paths.dest.BUILD_CSS));
}

function buildJs() {
  const NODE_ENV = isDev ? 'development' : 'production';
  process.env.NODE_ENV = NODE_ENV;
  environment = { NODE_ENV, API_URL };

  return gulp.src(jsFiles)
    .pipe(envify(environment))
    .pipe(babel())
    .pipe(gulp.dest(paths.dest.BUILD_JS));
}

function buildImg() {
  return gulp.src(imgFiles)
    .pipe(gulp.dest(paths.dest.BUILD_IMG));
}

function browserifyBundle() {
  return browserify({
    entries: paths.dest.APP_JS,
  })
    .bundle()
    .pipe(source(paths.filename.BUNDLE_MIN_JS))
    .pipe(gulp.dest(paths.dest.BUILD));
}

function cleanAfterBrowserify() {
  return del(paths.dest.ALL_BUILT_JS);
}

function injectFiles() {
  const sources = gulp.src(injectionFiles, { read: false });
  return gulp.src(INJECTION_PATHS.DEST)
    .pipe(inject(sources, { relative: true }))
    .pipe(gulp.dest(paths.dest.BASE_DIR))
    .pipe(browserSync.reload({
      stream: true
    }));
}

function uglifyJS(cb) {
  pump([
    gulp.src(paths.dest.BUNDLE_MIN_JS),
    uglify(),
    gulp.dest(paths.dest.BUILD)
  ], cb);
}

function setProdMode(cb) {
  isDev = false;
  cb();
}

export default build;

export {
  buildProd
}