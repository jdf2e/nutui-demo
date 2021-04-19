import { createApp } from "vue";
import { Button, Cell, Icon } from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";

import "./app.scss";

const App = createApp({
  onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
  .use(Button)
  .use(Cell)
  .use(Icon);

export default App;
