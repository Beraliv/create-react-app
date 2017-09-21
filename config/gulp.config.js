const SOURSE = 'src';
const DESTINATION = `dist`;
const TESTS = 'specs';

const MAIN_HTML = 'index.html';
const MAIN_JS = 'index.js';

const ALL_JS_FILES = '**/*.js';
const ALL_LESS_FILES = '**/*.less';
const ALL_CSS_FILES = '**/*.css';
const ALL_IMGS = '**/*.{svg,jpg,png}';

const paths = {
  ROOT:                 `./`,
  src: {
    MAIN:               [`${SOURSE}/${MAIN_HTML}`, `src/${MAIN_JS}`],
    LESS:               `${SOURSE}/app/less/${ALL_LESS_FILES}`,
    JS:                 `${SOURSE}/app/js/${ALL_JS_FILES}`,
    IMG:                `${SOURSE}/app/img/${ALL_IMGS}`
  },
  test: {
    DIR:                TESTS,
    ALL:                `${TESTS}/${ALL_JS_FILES}`
  },
  dest: {
    BASE_DIR:           `./${DESTINATION}`,
    BUILD:              DESTINATION,
    BUILD_CSS:          `${DESTINATION}/app/css`,
    BUILD_JS:           `${DESTINATION}/app/js`,
    BUILD_IMG:          `${DESTINATION}/app/img`,

    BUNDLE_MIN_JS:      `${DESTINATION}/bundle.min.js`,
    APP_JS:             `${DESTINATION}/${MAIN_JS}`,
    ALL_BUILT_JS:       [`${DESTINATION}/${MAIN_JS}`, `${DESTINATION}/app/js`],

    INDEX_HTML:         `./${DESTINATION}/${MAIN_HTML}`
  },
  filename: {
    APP:                `app`,
    DEST_INDEX_HTML:    MAIN_HTML,
    BUNDLE_MIN_JS:      `bundle.min.js`
  },
  revision: {
    SRC: [
      `${DESTINATION}/${ALL_CSS_FILES}`,
      `${DESTINATION}/${ALL_JS_FILES}`,
      `${DESTINATION}/${ALL_IMGS}`
    ],
    DEST:               DESTINATION,
    MANIFEST:           `./${DESTINATION}/rev-manifest.json`,
    REPLACE: {
      SOURCE:           '../img',
      TARGET:           'app/img'
    }
  }
};

export default paths;