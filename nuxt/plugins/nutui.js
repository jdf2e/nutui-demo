import Vue from "vue";
// 全局加载
// import NutUI from "@nutui/nutui/dist/nutui";

// 按需加载
import { Button, Toast, Tab, TabPanel, Switch } from "@nutui/nutui";

// 引入全局样式
import "@nutui/nutui/dist/nutui.scss";

// 定制化主题
import "./custom_theme.scss";

Vue.use(Button)
  .use(Tab)
  .use(Toast)
  .use(Switch)
  .use(TabPanel);
