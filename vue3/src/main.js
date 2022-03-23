import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router';
import {
    Button,
    Price,
    Input,
    Icon,
    Cell,
    Tabs,
    TabPane,
    NoticeBar,
    Picker
} from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";

const app = createApp(App)
app.use(router).use(Button).use(Price).use(Input).use(Icon).use(Cell).use(Tabs).use(TabPane).use(NoticeBar).use(Picker).mount("#app");