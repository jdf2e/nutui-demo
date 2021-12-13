import { createApp } from "vue";
import App from "./App.vue";
import {
  Button,
  Cell,
  Icon,
  FixedNav,
  OverLay,
  Form,
  FormItem,
  Cascader,
  Popup,
  Tabs,
  TabPane,
} from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
import "./assets/custom_font/iconfont.css";
createApp(App)
  .use(Button)
  .use(Cell)
  .use(Icon)
  .use(FixedNav)
  .use(OverLay)
  .use(Form)
  .use(FormItem)
  .use(Cascader)
  .use(Tabs)
  .use(Popup)
  .use(TabPane)
  .mount("#app");
