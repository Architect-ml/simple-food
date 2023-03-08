import browsersync from 'browser-sync';
import replace from 'gulp-replace';
import newer from 'gulp-newer';
import ifPlugin from 'gulp-if';

// Export objects
export const plugins = {
  browsersync: browsersync,
  replace: replace,
  newer: newer,
  if: ifPlugin,
}