import { reactive } from 'vue'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default {
  name: 'Index',
  setup() {
    const state = reactive({
      msg: '欢迎使用 NutUI4.0 开发小程序',
      msg2: '你成功了～',
      isVisible1: false,
      val: ''
    })

    const handleClick = msg => {
      state.msg = msg
    }

    return () => {
      return (
        <View class='content'>
          <View><Text>{state.msg}</Text></View>
          <nut-button type="primary" onClick={() => handleClick(state.msg2)}>点我</nut-button>
        </View>
      )
    }
  }
}
