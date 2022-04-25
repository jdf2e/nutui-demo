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
    Picker,
    InfiniteLoading,
    Popup,
    OverLay,
     Locale, Pagination
} from "@nutui/nutui";
import us from "@nutui/nutui/dist/packages/locale/lang/en-US";
import tw from "@nutui/nutui/dist/packages/locale/lang/zh-TW";
setTimeout(() => {
  console.log(Locale, new us())
  Locale.use('en-US', us);
}, 1000 * 5);
setTimeout(() => {
  Locale.use('zh-CN');
}, 1000 * 10);
setTimeout(() => {
  Locale.use('zh-TW', tw);
}, 1000 * 15);
// import "@nutui/nutui/dist/style.css";

const app = createApp(App)
app.use(router).use(Button).use(Price).use(Input).use(Icon).use(Cell).use(Tabs).use(TabPane).use(NoticeBar).use(Picker).use(Pagination).use(InfiniteLoading).use(Popup).use(OverLay).mount("#app");

