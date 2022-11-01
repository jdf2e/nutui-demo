<template>
  <view class="index">
    <view>
      <img src="" alt="">
    </view>
     1{{selectedValue}}
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', msg2, true)">点我1</nut-button>
      <nut-icon name="dongdong"></nut-icon>
    </view>
    <!-- <nut-toast :msg="msg" v-model:visible="show" :type="type" :cover="cover" /> -->

    <nut-picker
    v-model="selectedValue"
    v-model:visible="show"
    :columns="columns"
    title="城市选择"
    @confirm="confirm"
  >
  </nut-picker>

    
  </view>
</template>

<script>
import { reactive, toRefs ,ref} from 'vue';
export default {
  name: 'Index',
  components: {
    
  },
  setup(){
    const state = reactive({
      msg: '欢迎使用 NutUI3.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      cover: false,
    });
    const selectedValue = ref();
      const columns = ref([
        { text: '南京市', value: 'NanJing' },
        { text: '无锡市', value: 'WuXi' },
        { text: '海北藏族自治区', value: 'ZangZu' },
        { text: '北京市', value: 'BeiJing' },
        { text: '连云港市', value: 'LianYunGang' },
        { text: '浙江市', value: 'ZheJiang' },
        { text: '江苏市', value: 'JiangSu' }
      ]);
    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };

    return {
      ...toRefs(state),
      handleClick,
      columns,
      selectedValue
    }
  }
}
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
