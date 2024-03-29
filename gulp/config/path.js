import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/images/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },

  src: {
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    scssLibs: `${srcFolder}/scss/library.scss`,
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: [`${srcFolder}/images/**/*.svg`, `!${srcFolder}/images/svgsprites/*.svg`],
    svgsprites: `${srcFolder}/images/svgsprites/*.svg`,
    fonts: `${srcFolder}/fonts/`,
    files: `${srcFolder}/files/**/*.*`,
  },

  watch: {
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
    svgsprites: `${srcFolder}/images/svgsprites/*.svg`,
    files: `${srcFolder}/files/**/*.*`,
  },

  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
}