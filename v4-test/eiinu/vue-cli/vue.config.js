const { defineConfig } = require("@vue/cli-service");
const ComponentsPlugin = require("unplugin-vue-components/webpack");
function NutUIResolver(options = {}) {
  const { taro = false } = options;
  const packageName = taro ? "@nutui/nutui-taro" : "@nutui/nutui";
  return {
    type: "component",
    resolve: (name) => {
      if (name.startsWith("Nut")) {
        const partialName = name.slice(3);
        return {
          name: partialName,
          from: packageName,
          sideEffects: `${packageName}/dist/packages/${partialName.toLowerCase()}/style`,
        };
      }
    },
  };
}

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [NutUIResolver()],
      }),
    ],
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`,
      },
    },
  },
});
