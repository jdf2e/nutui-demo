import { createApp } from 'vue'
import App from './App.vue'
import { Button, Price, Input, Icon, Cell, Tabs, TabPane } from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
createApp(App).use(Button).use(Price).use(Input).use(Icon).use(Cell).use(Tabs).use(TabPane).mount("#app");