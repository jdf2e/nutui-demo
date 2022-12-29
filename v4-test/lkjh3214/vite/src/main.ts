import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { Toast, Notify } from "@nutui/nutui";
import "@nutui/nutui/dist/packages/toast/style";

const app = createApp(App);
app.use(Toast);
app.use(Notify);
app.use(createPinia());
app.use(router);

app.mount("#app");
