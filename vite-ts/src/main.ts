import { createApp } from "vue";
import App from "./App.vue";
import { Button, Cell, Icon, Tabbar, Toast } from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
createApp(App)
  .use(Button)
  .use(Cell)
  .use(Icon)
  .use(Tabbar)
  .use(Toast)
  .mount("#app");
