import fonter from 'gulp-fonter-2';
import ttf2woff2 from 'gulp-ttf2woff2';
import { deleteAsync } from 'del';

export const otfToTtf = () => {
  return app.gulp.src(`${app.path.src.fonts}/*.otf`, {})
    .pipe(fonter({
      formats: ['ttf']
    }))
    .pipe(app.gulp.dest(`${app.path.src.fonts}/`))
};

export const ttfToWoff = () => {

  return app.gulp.src(`${app.path.src.fonts}/*.ttf`, {})
    .pipe(fonter({
      formats: ['woff']
    }))
    .pipe(app.gulp.dest(`${app.path.src.fonts}/`))
    .pipe(app.gulp.src(`${app.path.src.fonts}/*.ttf`))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(`${app.path.src.fonts}`))
    .pipe(app.gulp.src(`${app.path.src.fonts}/*.{woff,woff2}`))
    .pipe(app.gulp.dest(`${app.path.build.fonts}`));
};

export const resetFonts = () => {
  return deleteAsync(`${app.path.src.fonts}/*.{otf,ttf}`);
};