<template>
  <view class="index">
    <Counter />

     <nut-tabs v-model="tab1value">
  <nut-tabpane title="Tab 1">
    Tab 1
  </nut-tabpane>
  <nut-tabpane title="Tab 2">
    Tab 2
  </nut-tabpane>
  <nut-tabpane title="Tab 3">
    Tab 3
  </nut-tabpane>
</nut-tabs>
    {{ msg }}
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', msg2, true)">点我</nut-button>
    </view>
    <nut-toast :msg="msg" v-model:visible="show" :type="type" :cover="cover" />
  </view>
</template>

<script>
import './index.scss'
import Counter from '../../components/Counter.vue'
import { reactive, toRefs } from 'vue';
export default {
  name: 'Index',
  components: {
    Counter
  },
  setup(){
    const state = reactive({
      msg: '欢迎使用 NutUI3.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
       tab1value: '0',
      cover: false
    });

    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };

    return {
      ...toRefs(state),
      handleClick
    }
  }
}
</script>
