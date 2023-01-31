import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";

const NutUIResolver = () => {
  return (name) => {
    if (name.startsWith("Nut")) {
      const partialName = name.slice(3);
      return {
        name: partialName,
        from: "@nutui/nutui",
        sideEffects: `@nutui/nutui/dist/packages/${partialName.toLowerCase()}/style`,
      };
    }
  };
};
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`,
      },
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [NutUIResolver()],
    }),
  ],
});
