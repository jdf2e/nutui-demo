import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { Button, Icon } from "@nutui/nutui";

const nutuiComponents = [Button, Icon];

const app = createApp(App)


nutuiComponents.forEach(item => {
    app.use(item);
})

app.mount("#app");
