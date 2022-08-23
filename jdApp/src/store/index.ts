// 1. 定义状态容器(仓库)
// 2. 修改容器中的 state
// 3. 仓库中 action 的使用

import {defineStore} from 'pinia'

export const mainStore = defineStore('main', {
  state: () => {
    return {
    }
  }
})