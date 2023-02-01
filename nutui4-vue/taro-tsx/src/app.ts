import { createApp } from 'vue'
import './app.scss'
// import {  Button,ActionSheet,Cell} from '@nutui/nutui-taro';

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
// App.use(Button).use(ActionSheet).use(Cell)

export default App
