import { createApp } from 'vue'
import './style.css'
// import App from './App.vue';
import App from './Test.vue';
import router from './router/router'

const app = createApp(App);
app.use(router);
app.mount('#app')
