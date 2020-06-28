import Vue from 'vue'
import App from './App.vue'
// import NutUI from '@nutui/nutui';
// import '@nutui/nutui/dist/nutui.scss';


// NutUI.install(Vue);

import { Button, Actionsheet,Toast, Infiniteloading, DatePicker,Swiper, Switch, LuckDraw, Signature, CircleProgress, SideNavBar, Drag, Cell, SubSideNavBar, SideNavBarItem,Calendar,Address,Popup,Picker } from '@nutui/nutui';
console.log(Button, Actionsheet,Toast,DatePicker, Infiniteloading, Swiper, Switch, LuckDraw, Signature, CircleProgress, SideNavBar, Drag, Cell,Calendar,Popup,Picker)
Button.install(Vue);
Switch.install(Vue);
LuckDraw.install(Vue);
Signature.install(Vue);
CircleProgress.install(Vue);
SideNavBar.install(Vue);
Drag.install(Vue);
Cell.install(Vue);
SubSideNavBar.install(Vue);
SideNavBarItem.install(Vue);
Calendar.install(Vue);
Address.install(Vue);
Popup.install(Vue);
DatePicker.install(Vue);
Picker.install(Vue);
Actionsheet.install(Vue);

import "./assets/rem";
import "./assets/reset.scss";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
