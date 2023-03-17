import browsersync from 'browser-sync';
import newer from 'gulp-newer';
import ifPlugin from 'gulp-if';

// Export objects
export const plugins = {
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
}