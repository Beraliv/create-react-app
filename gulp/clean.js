import del from 'del';
import paths from '../config/gulp.config';

export default function clean() {
  return del([ paths.dest.BUILD ]);
}