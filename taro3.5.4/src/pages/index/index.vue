<template>
  <view class="index">
    <view>
      <img src="" alt="">
    </view>
    {{ msg }}
    <nut-icon name="dongdong"></nut-icon>
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', msg2, true)">点我</nut-button>
    </view>
    <nut-toast :msg="msg" v-model:visible="show" :type="type" :cover="cover" />

    <nut-cell title='跳转到list'>
      <view @click="handleNav('list')">跳转到list</view>
    </nut-cell>
    <nut-sticky top="120">
      123123
    </nut-sticky>
  </view>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue';
import Taro from '@tarojs/taro';
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
      acceptKey: 'num',
      options1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      options2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
      value1: 0,
      value2: 'a',
      dataList: [
          {
            title: 'A',
            list: [
              {
                name: '安徽',
                id: 1
              }
            ]
          },
          {
            title: 'B',
            list: [
              {
                name: '北京',
                id: 2
              }
            ]
          },
          {
            title: 'G',
            list: [
              {
                name: '广西',
                id: 3
              },
              {
                name: '广东',
                id: 4
              }
            ]
          },
          {
            title: 'H',
            list: [
              {
                name: '湖南',
                id: 5
              },
              {
                name: '湖北',
                id: 6
              }
            ]
          }
      ]
    });

    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };

    const clickItem = (key, item) => {
      console.log(key, JSON.stringify(item));
    };

    const clickIndex = (key) => {
      console.log(key);
    };

    const handleChange = val => {
      console.log('val', val);
    }

    const handleNav = path => {
      Taro.navigateTo({
        url: `/pages/${path}/index`
      });
    }

    return {
      ...toRefs(state),
      handleClick,
      clickItem,
      clickIndex,
      handleChange,
      handleNav
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
  height: 2000px;
}
</style>
