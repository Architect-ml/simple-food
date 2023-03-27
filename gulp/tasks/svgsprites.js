import svgmin from 'gulp-svgmin';
import cheerio from 'gulp-cheerio';
import replace from 'gulp-replace';
import svgSprite from 'gulp-svg-sprite';

export const svgsprites = () => {
  return app.gulp.src(app.path.src.svgsprites)
    .pipe(svgmin({
      js2svg: { pretty: true }
    }))
    .pipe(cheerio({
      run: function ($) { $('[fill]').removeAttr('fill'); $('[stroke]').removeAttr('stroke'); $('[style]').removeAttr('style'); },
      parserOptions: { xmlMode: true }
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprites/icons.svg',
        }
      },
    }))
    .pipe(app.gulp.dest(app.path.build.images))
}