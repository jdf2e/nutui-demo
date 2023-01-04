import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import { Button } from "@nutui/nutui";
// import "@nutui/nutui/dist/style.css";

const app = createApp(App);
app.use(router);
// app.use(Button);
app.mount("#app");
