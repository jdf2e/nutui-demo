import Vue from 'vue'
import App from './App.vue'

// import NutUI from '@nutui/nutui';
// import '@nutui/nutui/dist/nutui.scss';


// NutUI.install(Vue);


import { Button, Toast, Infiniteloading, Swiper, Switch } from '@nutui/nutui';
console.log(Button, Toast, Infiniteloading, Swiper, Switch)
Button.install(Vue);

import "./assets/rem";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
