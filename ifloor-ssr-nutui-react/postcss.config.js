const autoprefixer = require('autoprefixer');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const pxtoviewport = require('postcss-px-to-viewport');

module.exports = {
  ident: 'postcss',
  plugins: [
    postcssFlexbugsFixes,
    autoprefixer({
      flexbox: 'no-2009',
    }),
    pxtoviewport({
      viewportWidth: 750,
      viewportUnit: 'vw',
      selectorBlackList: ['nut', 'nutui', 'root'],
    }),
  ],
};
