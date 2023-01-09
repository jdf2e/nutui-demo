import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { DatePicker } from "@nutui/nutui";

const app = createApp(App);
app.use(DatePicker);
app.use(createPinia());
app.use(router);

app.mount("#app");
