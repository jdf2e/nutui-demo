import Vue from "vue";
import App from "./App.vue";
// import NutUI from '@nutui/nutui-jdl';
// import '@nutui/nutui-jdl/dist/nutui.scss';

// NutUI.install(Vue);

import {
  Button,
  Actionsheet,
  DatePicker,
  Switch,
  SideNavBar,
  Cell,
  SubSideNavBar,
  SideNavBarItem,
  Calendar,
  Address,
  Popup,
  Picker,
  SearchBar,
  Toast,
  Dialog
} from "@nutui/nutui-jdl";
Toast.install(Vue);
Button.install(Vue);
Switch.install(Vue);
SideNavBar.install(Vue);
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
Dialog.install(Vue);
import "./assets/rem";
import "./assets/reset.scss";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
