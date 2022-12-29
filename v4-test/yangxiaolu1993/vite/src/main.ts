import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
// 导入需要的组件
import { Button } from "@nutui/nutui";
// 导入所有组件的样式
import "@nutui/nutui/dist/style.css";
createApp(App).use(router).use(Button).mount("#app");


