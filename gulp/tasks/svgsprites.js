import svgSprite from 'gulp-svg-sprite';

export const svgsprites = () => {
  return app.gulp.src(app.path.src.svgsprites)
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: `../icons/icons.svg`,
        }
      },
    }))
    .pipe(app.gulp.dest(app.path.build.images))
}