import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { Toast, Notify, Popup } from "@nutui/nutui";
import "@nutui/nutui/dist/packages/toast/style";
import "@nutui/nutui/dist/packages/popup/style";

const app = createApp(App);
app.use(Toast);
app.use(Notify);
app.use(Popup);
app.use(createPinia());
app.use(router);

app.mount("#app");
