import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button, Toast,Tabs, TabPane } from '@nutui/nutui-taro';
import './app.scss'

const App = createApp({
  onShow(options) {
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(createPinia())
App.use(Button).use(Toast).use(Tabs).use( TabPane)

export default App
