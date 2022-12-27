import { fileURLToPath, URL } from "node:url";
import Components from "unplugin-vue-components/vite";
const NutUIResolver = () => {
  return (name: string) => {
    if (name.startsWith("Nut")) {
      return {
        name: name.slice(3),
        from: "@nutui/nutui",
        sideEffects: `@nutui/nutui/dist/packages/${name
          .slice(3)
          .toLowerCase()}/style`,
      };
    }
  };
};
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [NutUIResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 配置 nutui 全局 scss 变量
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`,
      },
    },
  },
});
