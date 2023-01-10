import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import { Rate } from '@nutui/nutui';


const app  = createApp(App);
app.use(router);
app.use(Rate);
app.mount('#app')

