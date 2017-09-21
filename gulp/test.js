import jest from 'jest-cli';

import paths from '../config/gulp.config';

export default function test(cb) {
  jest.runCLI({}, paths.test.DIR, (result) => {
    console.log(result);
    cb();
  });
}