import { createApp } from 'vue'
import App from './App.vue'
import {Button} from '@nutui/nutui/dist/nutui.es.js'
console.log(Button)
import '@nutui/nutui/dist/style.css';
createApp(App).use(Button).mount('#app')
