/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-12-27 15:14:11
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-03 14:44:17
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import { Button, CircleProgress, Cell,Range, Picker, Toast, Popup,Row,Col, Notify, CellGroup, Menu, MenuItem,Checkbox,CheckboxGroup } from "@nutui/nutui";
// 导入所有组件的样式
import "@nutui/nutui/dist/style.css";

createApp(App).use(router).use(Button).use(CircleProgress).use(Cell).use(Range).use(Picker).use(Toast).use(Popup).use(Row).use(Col).use(Notify).use(CellGroup).use(Menu).use(MenuItem).use(Checkbox).use(CheckboxGroup).mount('#app')
