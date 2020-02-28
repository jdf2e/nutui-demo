import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import { Button, Toast, Infiniteloading, Swiper, Switch } from '@nutui/nutui';
console.log(Button, Toast, Infiniteloading, Swiper, Switch)
Button.install(Vue);
Switch.install(Vue);
Toast.install(Vue);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
