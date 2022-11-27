import Vue from 'vue'
import App from './App.vue'
// import NutUI from '@nutui/nutui';
// import '@nutui/nutui/dist/nutui.scss';


// NutUI.install(Vue);

import { Swipe, Button, Actionsheet, DatePicker, CheckBox,CheckBoxGroup,Switch, LuckDraw, Signature, CircleProgress, SideNavBar, Drag, Cell, SubSideNavBar, SideNavBarItem,Calendar,Address,Popup,Picker,FixedNav,Notify,CountUp,SearchBar,TextBox } from '@nutui/nutui';
Swipe.install(Vue)
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
SearchBar.install(Vue);
FixedNav.install(Vue);
Notify.install(Vue);
CountUp.install(Vue);
TextBox.install(Vue);
CheckBox.install(Vue);
CheckBoxGroup.install(Vue);
import "./assets/rem";
import "./assets/reset.scss";



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
