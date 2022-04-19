import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button, Toast, Tabs, TabPane, Locale, Pagination, Icon } from '@nutui/nutui-taro';
import './app.scss'
import us from "@nutui/nutui-taro/dist/packages/locale/lang/en-US";
import tw from "@nutui/nutui-taro/dist/packages/locale/lang/zh-TW";
setTimeout(() => {
  Locale.use('en-US', us);
}, 1000 * 2);
setTimeout(() => {
  Locale.use('zh-CN');
}, 1000 * 10);
setTimeout(() => {
  Locale.use('zh-TW', tw);
}, 1000 * 15);
const App = createApp({
  onShow(options) {
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(createPinia())
App.use(Button).use(Toast).use(Tabs).use(TabPane).use(Pagination).use(Icon)

export default App
