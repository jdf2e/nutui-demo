import { createApp } from "vue";
import App from "./App.vue";
import {
  Button,
  Cell,
  Icon,
  Tabbar,
  Toast,
  ShortPassword,
  Dialog,
  Price,
  Layout,
} from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
createApp(App)
  .use(Button)
  .use(Cell)
  .use(Icon)
  .use(Tabbar)
  .use(Toast)
  .use(ShortPassword)
  .use(Dialog)
  .use(Price)
  .use(Layout)
  .mount("#app");
