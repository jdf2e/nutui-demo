/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-12-27 16:39:54
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-06 19:39:13
 */
import { createApp } from 'vue'
// import { Button, Toast } from '@nutui/nutui-taro';

import './app.scss'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

// App.use(Button).use(Toast)

export default App
