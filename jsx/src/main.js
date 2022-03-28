import { createApp } from "vue";
import App from "./App.jsx";
import { Button, Cell, Icon,FixedNav,OverLay,Picker } from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
import './assets/custom_font/iconfont.css';
createApp(App).use(Button).use(Cell).use(Icon).use(FixedNav).use(OverLay).use(Picker).mount("#app");
