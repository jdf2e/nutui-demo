/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-12-27 15:14:11
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-29 17:42:11
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import { Button, CircleProgress, Cell, Icon,Audio, Range, AudioOperate, Picker, Toast, Popup,Row,Col, Notify, CellGroup, Menu, MenuItem, Overlay } from "@nutui/nutui";

createApp(App).use(router).use(Button).use(CircleProgress).use(Cell).use(Icon).use(Audio).use(Range).use(AudioOperate).use(Picker).use(Toast).use(Popup).use(Row).use(Col).use(Notify).use(CellGroup).use(Menu).use(MenuItem).mount('#app')
