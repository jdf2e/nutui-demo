const pxtorem = require("postcss-pxtorem");
module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      scss: {
        // @/ 是 src/ 的别名
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        prependData: ` 
                @import "@/assets/custom_theme.scss";
                @import "@nutui/nutui-jdl/dist/styles/index.scss";
                `,
      },
      postcss: {
        plugins: [
          require("autoprefixer")({
            // 配置使用 autoprefixer
            // browsers: ['last 20 versions'],
            overrideBrowserslist: ["last 20 versions"], // 记得这里要把 browsers 改为 overrideBrowserslist，autoprefixer 新版本的写法有变
          }),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"],
            selectorBlackList: ['nut']
          }),
        ],
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");

    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear();

    // 添加要替换的 loader
    svgRule
      .use("vue-svg-loader")
      .loader("raw-loader")
      .tap((options) => {
        // 修改它的选项...
        options = {
          esModule: false,
        };
        return options;
      });
  },
};
