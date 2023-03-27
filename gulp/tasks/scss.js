import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import concat from 'gulp-concat';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';

const sass = gulpSass(dartSass);

export const scssToStyle = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 3 versions'],
      cascade: true
    }))
    // .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())
    .pipe(concat('style.min.css'))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
};

export const scssToLibs = () => {
  return app.gulp.src(app.path.src.scssLibs)
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(cleanCss())
    .pipe(concat('library.min.css'))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
};