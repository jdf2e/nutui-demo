import { reactive } from 'vue'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { Dongdong } from '@nutui/icons-vue-taro';


export default {
  name: 'Index',
  components: {
    View,
    Text,
    Dongdong,
  },
  setup() {
    const state = reactive({
      msg: '欢迎使用 NutUI3.0 开发小程序',
      msg2: '你成功了～',
      isVisible1: false,
      val: ''
    })
    const menuItemsOne = [
      {
        name: '选项一'
      },
      {
        name: '选项二'
      },
      {
        name: '选项三'
      }
    ];

    const handleClick = msg => {
      state.msg = msg
    }
    const switchActionSheet = (param) => {
      state.isVisible1 = !state.isVisible1;
    };
    const chooseItem = (itemParams) => {
      state.val = itemParams.name;
    };

    return () => {
      return (
        <View class='content'>
          <View><Text>{state.msg}</Text> <Dongdong></Dongdong> </View>
          <nut-button type="primary" onClick={() => handleClick(state.msg2)} >点我</nut-button>
          <nut-cell
            show-icon={true}
            isLink={true}
            onClick={() => switchActionSheet('isVisible1')}

          >
            <span><label>基础用法</label></span>
            <div>{state.val}</div>
          </nut-cell>
          <nut-action-sheet
            v-model:visible={state.isVisible1}
            menu-items={menuItemsOne}
            onChoose={chooseItem}
          >
          </nut-action-sheet>
        </View>
      )
    }
  }
}
