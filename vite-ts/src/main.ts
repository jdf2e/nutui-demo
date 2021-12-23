import { createApp } from "vue";
import App from "./App.vue";
import {
  Button,
  Cell,
  Icon,
  Tabbar,
  Toast,
  ShortPassword,
  Price,
  Layout,
  Rate,
  Popup,
  Calendar,
  Video,
  NoticeBar,
  NumberKeyboard,
  CountDown,
  Tag,
  Badge,
  SearchBar,
  Avatar,
  Menu,
  MenuItem,
  Popover,
  Pagination,
  Form,FormItem
} from "@nutui/nutui";
// import "@nutui/nutui/dist/styles/themes/default.scss";


const nutuiComponents = [
  Button,
  Cell,
  Form,FormItem,
  Icon,
  Tabbar,
  Toast,
  ShortPassword,
  Price,
  Layout,
  Rate,
  Popup,
  Calendar,
  Video,
  NoticeBar,
  NumberKeyboard,
  CountDown,
  Tag,
  Badge,
  SearchBar,
  Avatar,
  Menu,
  MenuItem,
  Popover,
  Pagination
];

const app = createApp(App)


nutuiComponents.forEach(item => {
    app.use(item);
})

app.mount("#app");
