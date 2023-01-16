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
  plugins: [
    vue(),
    Components({
      resolvers: [NutUIResolver()],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/custom_theme.scss";@import "@nutui/nutui/dist/styles/variables.scss";`,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        // 最小化拆分包
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return 'vendor';
          }
        },
        entryFileNames: "js/[name].js", 
        chunkFileNames: "js/[name].js", 
        assetFileNames: "[ext]/[name].[ext]", 
      },
    },
  },
});
