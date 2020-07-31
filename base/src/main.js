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
  Dialog,
  LeftSlip,
  Avatar,
  Tab,
  TabPanel,
  Badge,
  TabBar,
  Navbar,
  Noticebar,
  Rate,
  Tag,
  Imagepreview,
  Swiper,
  Steps,
  Stepper,
  Card,
  Scroll
} from "@nutui/nutui-jdl";
Toast.install(Vue);
Scroll.install(Vue);
Rate.install(Vue);
Tag.install(Vue);
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
LeftSlip.install(Vue);
Avatar.install(Vue);
Tab.install(Vue);
TabPanel.install(Vue);
Badge.install(Vue);
TabBar.install(Vue);
Navbar.install(Vue);
Noticebar.install(Vue);
Imagepreview.install(Vue);
Swiper.install(Vue);
Steps.install(Vue);
Stepper.install(Vue);
Card.install(Vue);
import "./assets/rem";
import "./assets/reset.scss";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
