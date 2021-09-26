import { createApp } from 'vue'
import App from './App.vue'
import { Button, Price, Input, Icon } from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
createApp(App).use(Button).use(Price).use(Input).use(Icon).mount("#app");