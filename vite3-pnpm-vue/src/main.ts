import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Input, Icon, Button } from "@nutui/nutui";
createApp(App).use(Input).use(Icon).use(Button).mount("#app");
