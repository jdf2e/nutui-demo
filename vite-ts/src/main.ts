import { createApp } from "vue";
import App from "./App.vue";
import {
  Button,
  Cell,
  Icon,
  Tabbar,
  Toast,
  ShortPassword,
  Price,
  Layout,
  Rate,
  Popup,
  Calendar,
  Video,
  NoticeBar,
  NumberKeyboard,
  CountDown
} from "@nutui/nutui";
// import "@nutui/nutui/dist/styles/themes/default.scss";
createApp(App)
  .use(Button)
  .use(Cell)
  .use(Icon)
  .use(Tabbar)
  .use(Toast)
  .use(ShortPassword)
  .use(Popup)
  .use(Price)
  .use(Calendar)
  .use(Layout)
  .use(Rate)
  .use(Video)
  .use(NoticeBar)
  .use(CountDown)
  .use(NumberKeyboard)
  .mount("#app");
