import gulp from 'gulp';

import clean from './clean';
import build, { buildProd } from "./build";

const defaultDev = gulp.series(clean, build);
const defaultProd = gulp.series(clean, buildProd);

export default defaultDev;

export {
  defaultProd
};