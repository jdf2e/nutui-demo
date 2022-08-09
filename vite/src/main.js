import { createApp } from "vue";
import App from "./App.vue";
import { Button, Cell, Icon,FixedNav,OverLay,Popup,Picker,MenuItem,Menu } from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
import './assets/custom_font/iconfont.css';
createApp(App).use(Button).use(Cell).use(Icon).use(FixedNav).use(OverLay).use(Popup).use(Picker).use(MenuItem).use(Menu).mount("#app");
