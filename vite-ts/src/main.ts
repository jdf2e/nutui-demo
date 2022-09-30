import { createApp } from "vue";
import App from "./App.vue";
import {
  Button,
  Cell,
  CellGroup,
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
  Progress,
  Form, FormItem,
  Uploader,Locale, TabbarItem, List
} from "@nutui/nutui";
import us from "@nutui/nutui/dist/packages/locale/lang/en-US";
import tw from "@nutui/nutui/dist/packages/locale/lang/zh-TW";
setTimeout(() => {
  Locale.use('en-US', us);
}, 1000 * 5);
setTimeout(() => {
  Locale.use('zh-CN');
}, 1000 * 10);
setTimeout(() => {
  Locale.use('zh-TW', tw);
}, 1000 * 15);
const nutuiComponents = [
  Button,
  Uploader,
  Cell,
  Form, FormItem,
  Icon,
  Tabbar,
  TabbarItem,
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
  List,
  CellGroup,
  Progress
];

const app = createApp(App)


nutuiComponents.forEach(item => {
  app.use(item);
})

app.mount("#app");
