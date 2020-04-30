import Vue from "vue";

// 引入全局样式
import "@nutui/nutui/dist/nutui.scss";

// 定制化主题
import "./custom_theme.scss";

// 全局加载
import NutUI from "@nutui/nutui/dist/nutui";
Vue.use(NutUI)


// 按需加载
// import { Button, Toast, Tab, TabPanel, Switch,SideNavBar } from "@nutui/nutui";


// Vue.use(Button)
//   .use(Tab)
//   .use(Toast)
//   .use(Switch)
//   .use(TabPanel);
