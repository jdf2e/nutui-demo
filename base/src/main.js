import Vue from 'vue'
import App from './App.vue'

// import NutUI from '@nutui/nutui';
// import '@nutui/nutui/dist/nutui.scss';


// NutUI.install(Vue);

import { Button, Toast, Infiniteloading, Swiper, Switch, LuckDraw, Signature, CircleProgress, SideNavBar, Drag, Cell, SubSideNavBar, SideNavBarItem,Calendar } from '@nutui/nutui';
console.log(Button, Toast, Infiniteloading, Swiper, Switch, LuckDraw, Signature, CircleProgress, SideNavBar, Drag, Cell,Calendar)
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

import "./assets/rem";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
