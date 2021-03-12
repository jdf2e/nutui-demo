import { createApp } from "vue";
import App from "./App.vue";
import { Button, Cell, Icon } from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
createApp(App).use(Button).use(Cell).use(Icon).mount("#app");
