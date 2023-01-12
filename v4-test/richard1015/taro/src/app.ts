import { createApp } from 'vue'
import './app.scss'
import { Locale } from '@nutui/nutui-taro'
import us from "@nutui/nutui-taro/dist/packages/locale/lang/en-US";
import tw from "@nutui/nutui-taro/dist/packages/locale/lang/zh-TW";
Locale.merge("zh-CN", {
  confirm: "关闭", // 将 "确认" 修改为 "关闭"
  // 修改某个组件内部语言
  shortpassword: {
    title: "请输入密码", // 将 "请输入密码" 修改为 "请输入卡密"
  },
});
setTimeout(() => {
  Locale.use("en-US", us);
}, 1000 * 5);
setTimeout(() => {
  Locale.use("zh-CN");
}, 1000 * 10);
setTimeout(() => {
  Locale.use("zh-TW", tw);
}, 1000 * 15);
const App = createApp({
  onShow(options) { },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
export default App
