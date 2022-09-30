import { createApp } from 'vue'
import { Button, Toast,Icon, Elevator, Menu, MenuItem, OverLay, Popup, List, Cell, Sticky } from '@nutui/nutui-taro';

import './app.scss'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(Button).use(Toast).use(Icon).use(Elevator).use(Menu).use(MenuItem).use(OverLay).use(Popup).use(List).use(Cell).use(Sticky)

export default App
