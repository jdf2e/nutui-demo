// vite.config.ts
import { defineConfig } from "file:///Users/zhuzhida/Documents/github/nutui-demo/v4-test/richard1015/vite/node_modules/.pnpm/vite@4.0.3/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/zhuzhida/Documents/github/nutui-demo/v4-test/richard1015/vite/node_modules/.pnpm/@vitejs+plugin-vue@4.0.0_vite@4.0.3+vue@3.2.45/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///Users/zhuzhida/Documents/github/nutui-demo/v4-test/richard1015/vite/node_modules/.pnpm/unplugin-vue-components@0.22.12_vue@3.2.45/node_modules/unplugin-vue-components/dist/vite.mjs";
var NutUIResolver = () => {
  return (name) => {
    if (name.startsWith("Nut")) {
      const partialName = name.slice(3);
      return {
        name: partialName,
        from: "@nutui/nutui",
        sideEffects: `@nutui/nutui/dist/packages/${partialName.toLowerCase()}/style`
      };
    }
  };
};
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [NutUIResolver()]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`
      }
    }
  },
  build: {
    minify: true,
    emptyOutDir: true,
    rollupOptions: {
      output: {}
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvemh1emhpZGEvRG9jdW1lbnRzL2dpdGh1Yi9udXR1aS1kZW1vL3Y0LXRlc3QvcmljaGFyZDEwMTUvdml0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3podXpoaWRhL0RvY3VtZW50cy9naXRodWIvbnV0dWktZGVtby92NC10ZXN0L3JpY2hhcmQxMDE1L3ZpdGUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3podXpoaWRhL0RvY3VtZW50cy9naXRodWIvbnV0dWktZGVtby92NC10ZXN0L3JpY2hhcmQxMDE1L3ZpdGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcbmNvbnN0IE51dFVJUmVzb2x2ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAobmFtZSkgPT4ge1xuICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoJ051dCcpKSB7XG4gICAgICBjb25zdCBwYXJ0aWFsTmFtZSA9IG5hbWUuc2xpY2UoMyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBwYXJ0aWFsTmFtZSxcbiAgICAgICAgZnJvbTogJ0BudXR1aS9udXR1aScsXG4gICAgICAgIHNpZGVFZmZlY3RzOiBgQG51dHVpL251dHVpL2Rpc3QvcGFja2FnZXMvJHtwYXJ0aWFsTmFtZS50b0xvd2VyQ2FzZSgpfS9zdHlsZWBcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICBkdHM6IHRydWUsXG4gICAgICByZXNvbHZlcnM6IFtOdXRVSVJlc29sdmVyKCldLFxuICAgIH0pXG4gIF0sXG4gIGNzczoge1xuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIHNjc3M6IHtcbiAgICAgICAgLy8gXHU5MTREXHU3RjZFIG51dHVpIFx1NTE2OFx1NUM0MCBzY3NzIFx1NTNEOFx1OTFDRlxuICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCJAbnV0dWkvbnV0dWkvZGlzdC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtgXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBidWlsZDoge1xuICAgIG1pbmlmeTogdHJ1ZSxcbiAgICBlbXB0eU91dERpcjogdHJ1ZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgLy8gZW50cnlGaWxlTmFtZXM6IGBkZW1vLSR7Y29uZmlnLnZlcnNpb259L1tuYW1lXS5qc2AsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThYLFNBQVMsb0JBQW9CO0FBQzNaLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixJQUFNLGdCQUFnQixNQUFNO0FBQzFCLFNBQU8sQ0FBQyxTQUFTO0FBQ2YsUUFBSSxLQUFLLFdBQVcsS0FBSyxHQUFHO0FBQzFCLFlBQU0sY0FBYyxLQUFLLE1BQU0sQ0FBQztBQUNoQyxhQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixhQUFhLDhCQUE4QixZQUFZLFlBQVk7QUFBQSxNQUNyRTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxLQUFLO0FBQUEsTUFDTCxXQUFXLENBQUMsY0FBYyxDQUFDO0FBQUEsSUFDN0IsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUVKLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLGVBQWU7QUFBQSxNQUNiLFFBQVEsQ0FFUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUYsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
