const get = require('lodash.get');

function editWebpackConfig(config) {
  get(config, 'module.rules[1].oneOf', []).forEach(rule => {
    const babelPlugin = get(rule, 'options.plugins')
    if (Array.isArray(babelPlugin)) {
      babelPlugin.push([
        'import',
        {
          libraryName: "@nutui/nutui-react",
          libraryDirectory: "dist/esm",
          style: 'css',
          camel2DashComponentName: false, // 是否需要驼峰转短
        },
        'nutui-react'
      ])
    }
  })
}

module.exports = (option) => {
  const { logDev, logText } = option || {};
  return {
    // SSR 配置
    overrideSsrWebpackConfig({ webpackConfig }) {
      editWebpackConfig(webpackConfig[0]); // 修改客户端配置
      editWebpackConfig(webpackConfig[1]); // 修改服务端配置
      return webpackConfig;
    },
  };
};
