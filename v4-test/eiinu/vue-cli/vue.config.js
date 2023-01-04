const { defineConfig } = require("@vue/cli-service");
const ComponentsPlugin = require("unplugin-vue-components/webpack");
const NutUIResolver = () => {
  return (name) => {
    if (name.startsWith("Nut")) {
      return {
        name: name.slice(3),
        from: "@nutui/nutui",
        sideEffects: `@nutui/nutui/dist/packages/${name
          .slice(3)
          .toLowerCase()}/style.cjs`,
      };
    }
  };
};
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
