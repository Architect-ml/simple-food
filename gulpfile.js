// Main module 'Gulp'
import gulp from 'gulp';

// Import paths
import { path } from './gulp/config/path.js';

// Import plugins
import { plugins } from './gulp/config/plugins.js';

// Global variable
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  gulp: gulp,
  path: path,
  plugins: plugins,
}

// Import tasks
import { reset } from './gulp/tasks/reset.js';
import { copy } from './gulp/tasks/copy.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { svgsprites } from './gulp/tasks/svgsprites.js';
import { otfToTtf, ttfToWoff, resetFonts } from './gulp/tasks/fonts.js';
import { server } from './gulp/tasks/server.js';
import { zip } from './gulp/tasks/zip.js';

// Watcher
export const watcher = () => {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.svgsprites, svgsprites);
}

// Font tasks
const fonts = gulp.series(otfToTtf, ttfToWoff, resetFonts);

// Main tasks
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images, svgsprites));

// Task Execution Scenarios
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);

// Exports Scenarios
export { dev }
export { build }
export { deployZIP }

// Executing the Default Script
gulp.task('default', dev);