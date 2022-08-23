import { createApp } from 'vue'
import {createPinia} from 'pinia'
import {Tabbar, TabbarItem} from '@nutui/nutui-taro';

import './app.scss'

// 创建 pinia 实例
const pinia = createPinia()

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(pinia).use(Tabbar).use(TabbarItem)

export default App
