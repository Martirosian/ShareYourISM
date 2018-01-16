'use strict';

module.exports = (gulp, plugins, config) => () => {
  return gulp.src('./images/svg/**/*.svg')
    .pipe(plugins.svgSprite({
      mode: {
        symbol: {
          dest: `./`,
          sprite: 'sprite.svg',
          example: false
        }
      },
      svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false
      }
    }))
    .pipe(gulp.dest(`./${config.paths.dist}/${config.output.images}/svg`))
};
