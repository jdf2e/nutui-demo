import { createApp } from "vue";
import App from "./App.vue";
import { Button, Cell, Icon,FixedNav,OverLay,MenuItem,Menu } from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
import './assets/custom_font/iconfont.css';
createApp(App).use(Button).use(Cell).use(Icon).use(FixedNav).use(OverLay).use(MenuItem).use(Menu).mount("#app");
