import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import { Button, Toast, Infiniteloading, Swiper, Switch, FixedNav, Notify, Drag, Popup, CountUp, Magic } from '@nutui/nutui';
Button.install(Vue);
Switch.install(Vue);
Toast.install(Vue);
FixedNav.install(Vue);
Drag.install(Vue);
Popup.install(Vue);
Notify.install(Vue);
CountUp.install(Vue);
Magic.install(Vue);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
