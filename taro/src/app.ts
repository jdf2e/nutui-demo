import { createApp } from "vue";
import {
  Button,
  Cell,
  Icon,
  Switch,
  Popup,
  OverLay,
  InputNumber,
  Swiper,
  Collapse,
  Layout,
  BackTop,
  ActionSheet,
  Toast,
  Notify,
  Picker,
  DatePicker,
  Uploader,
  Price,
  Checkbox,
  Avatar,
  Dialog,
  Radio,
  InfiniteLoading,
  Range,
  Drag,
  Steps,
  Navbar,
  Tabbar,
  Input,
  Rate,
  Calendar,
  ShortPassword,
  TextArea,
  Address
} from "@nutui/nutui-taro";
import "@nutui/nutui-taro/dist/style.css";

import "./app.scss";

const App = createApp({
  onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
  .use(Button)
  .use(InputNumber)
  .use(Swiper)
  .use(OverLay)
  .use(Popup)
  .use(Switch)
  .use(Cell)
  .use(Collapse)
  .use(Layout)
  .use(BackTop)
  .use(ActionSheet)
  .use(Toast)
  .use(Notify)
  .use(Picker)
  .use(DatePicker)
  .use(Uploader)
  .use(Price)
  .use(Checkbox)
  .use(Avatar)
  .use(Dialog)
  .use(Radio)
  .use(InfiniteLoading)
  .use(Range)
  .use(Drag)
  .use(Steps)
  .use(Navbar)
  .use(Tabbar)
  .use(Input)
  .use(Rate)
  .use(Calendar)
  .use(ShortPassword)
  .use(TextArea)
  .use(Address)
  .use(Icon);

export default App;
