import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
// import App from './Test.vue';
import router from './router/router'
// import { Notify, Cell, CellGroup } from '@nutui/nutui';
// import '@nutui/nutui/dist/style.css';

const app = createApp(App);
app.use(router);
// app.use(Notify);
// app.use(Cell);
// app.use(CellGroup);
app.mount('#app')
