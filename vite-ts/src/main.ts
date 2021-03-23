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
  Rate,
  Popup,
  Calendar,
} from "@nutui/nutui";
import "@nutui/nutui/dist/styles/themes/default.scss";
createApp(App)
  .use(Button)
  .use(Cell)
  .use(Icon)
  .use(Tabbar)
  .use(Toast)
  .use(ShortPassword)
  .use(Dialog)
  .use(Popup)
  .use(Price)
  .use(Calendar)
  .use(Layout)
  .use(Rate)
  .mount("#app");
