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
    <nut-price :price="1010" :need-symbol="false" :thousands="true" />
    <nut-fixednav :position="{bottom:'70px' }" v-model:visible="visible" :nav-list="navList" />
    <nut-avatar
      icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      shape="square"></nut-avatar>
    <nut-avatar
      icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      shape="round"></nut-avatar>
    <nut-toast :msg="msg" v-model:visible="show" :type="type" :cover="cover" />

    <nut-input v-model="val1" @change="change" @focus="focus" @blur="blur" label="文本" />
    <nut-input placeholder="请输入文本" @change="change" v-model="val0" :require-show="true" label="文本" @clear="clear" />
    <nut-swipe>
      <nut-cell round-radius="0" desc="左滑删除" />
      <template #right>
        <nut-button shape="square" style="height:100%" type="danger">删除</nut-button>
      </template>
    </nut-swipe>
     <nut-cell>
        <nut-progress percentage="60" :text-inside="true" />
      </nut-cell>
  </view>
</template>

<script lang="ts">
import { reactive, ref, toRefs } from "vue";
export default {
  name: "Index",
  components: {},
  setup() {
    const state = reactive({
      msg: "欢迎使用 NutUI3.0 开发小程序",
      msg2: "你成功了～",
      type: "text",
      show: false,
      cover: false,

      val0: "",
      val1: "初始数据",
      val2: "禁止修改",
      val3: "readonly 只读",
      val4: "",
      val5: "",
      val6: "",
      val7: "",
      val8: "文案",
    });

    const change = (value: string | number, event: Event) => {
      console.log("change: ", value, event);
    };
    const focus = (value: string | number, event: Event) => {
      console.log("focus:", value, event);
    };
    const blur = (value: string | number, event: Event) => {
      console.log("blur:", value, event);
    };
    const clear = (value: string | number) => {
      console.log("clear:", value);
    };

    const handleClick = (type: string, msg: string, cover: boolean = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };
    const visible = ref(false);
    const navList = reactive([
      {
        id: 1,
        text: "首页",
        icon: "https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png",
      },
      {
        id: 2,
        text: "分类",
        icon: "https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png",
      },
      {
        id: 3,
        text: "购物车",
        num: 2,
        icon: "https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png",
      },
      {
        id: 4,
        text: "我的",
        icon: "https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png",
      },
    ]);
    return {
      visible,
      navList,
      change,
      blur,
      clear,
      focus,
      ...toRefs(state),
      handleClick,
    };
  },
};
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
