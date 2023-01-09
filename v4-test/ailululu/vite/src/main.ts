/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-12-27 15:14:11
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-07 16:39:40
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
// 导入所有组件的样式
import "@nutui/nutui/dist/style.css";
import { ConfigProvider } from '@nutui/nutui';

createApp(App).use(router).use(ConfigProvider).mount('#app')
