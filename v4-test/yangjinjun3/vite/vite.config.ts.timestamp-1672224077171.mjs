// vite.config.ts
import { defineConfig } from "file:///Users/peixinyu7/Desktop/jdf2e/nutui-demo/v4-test/eiinu/vite/node_modules/.pnpm/vite@4.0.3_@types+node@18.11.18/node_modules/vite/dist/node/index.js";
import path from "path";
import vue from "file:///Users/peixinyu7/Desktop/jdf2e/nutui-demo/v4-test/eiinu/vite/node_modules/.pnpm/@vitejs+plugin-vue@4.0.0_vite@4.0.3+vue@3.2.45/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///Users/peixinyu7/Desktop/jdf2e/nutui-demo/v4-test/eiinu/vite/node_modules/.pnpm/unplugin-vue-components@0.22.12_vue@3.2.45/node_modules/unplugin-vue-components/dist/vite.mjs";
var __vite_injected_original_dirname = "/Users/peixinyu7/Desktop/jdf2e/nutui-demo/v4-test/eiinu/vite";
var NutUIResolver = () => {
  return (name) => {
    if (name.startsWith("Nut")) {
      return {
        name: name.slice(3),
        from: "@nutui/nutui",
        sideEffects: `@nutui/nutui/dist/packages/${name.slice(3).toLowerCase()}/style`
      };
    }
  };
};
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [NutUIResolver()]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcGVpeGlueXU3L0Rlc2t0b3AvamRmMmUvbnV0dWktZGVtby92NC10ZXN0L2VpaW51L3ZpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9wZWl4aW55dTcvRGVza3RvcC9qZGYyZS9udXR1aS1kZW1vL3Y0LXRlc3QvZWlpbnUvdml0ZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcGVpeGlueXU3L0Rlc2t0b3AvamRmMmUvbnV0dWktZGVtby92NC10ZXN0L2VpaW51L3ZpdGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5jb25zdCBOdXRVSVJlc29sdmVyID0gKCkgPT4ge1xuICByZXR1cm4gKG5hbWU6IHN0cmluZykgPT4ge1xuICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoJ051dCcpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBuYW1lLnNsaWNlKDMpLFxuICAgICAgICBmcm9tOiAnQG51dHVpL251dHVpJyxcbiAgICAgICAgc2lkZUVmZmVjdHM6IGBAbnV0dWkvbnV0dWkvZGlzdC9wYWNrYWdlcy8ke25hbWUuc2xpY2UoMykudG9Mb3dlckNhc2UoKX0vc3R5bGVgXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSxcbiAgICB9XG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW051dFVJUmVzb2x2ZXIoKV1cbiAgICB9KVxuICBdLFxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBzY3NzOiB7XG4gICAgICAgIC8vIFx1OTE0RFx1N0Y2RSBudXR1aSBcdTUxNjhcdTVDNDAgc2NzcyBcdTUzRDhcdTkxQ0ZcbiAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAaW1wb3J0IFwiQG51dHVpL251dHVpL2Rpc3Qvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7YFxuICAgICAgfVxuICAgIH1cbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNXLFNBQVMsb0JBQW9CO0FBQ25ZLE9BQU8sVUFBVTtBQUNqQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFIdkIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTSxnQkFBZ0IsTUFBTTtBQUMxQixTQUFPLENBQUMsU0FBaUI7QUFDdkIsUUFBSSxLQUFLLFdBQVcsS0FBSyxHQUFHO0FBQzFCLGFBQU87QUFBQSxRQUNMLE1BQU0sS0FBSyxNQUFNLENBQUM7QUFBQSxRQUNsQixNQUFNO0FBQUEsUUFDTixhQUFhLDhCQUE4QixLQUFLLE1BQU0sQ0FBQyxFQUFFLFlBQVk7QUFBQSxNQUN2RTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDcEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsY0FBYyxDQUFDO0FBQUEsSUFDN0IsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUVKLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
