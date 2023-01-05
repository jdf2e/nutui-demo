<template>
  <view class="index">
    <view>
      <img src="" alt="" />
    </view>
    {{ msg }}
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', msg2, true)"
        >点我</nut-button
      >
    </view>
    <nut-popup :style="{ padding: '30px 50px' }" v-model:visible="showPopup">正文</nut-popup>
    <nut-toast :msg="msg" v-model:visible="show" :type="type" :cover="cover" />
  </view>
</template>

<script>
import { reactive, toRefs } from "vue";

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
      showPopup: false,
    });

    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
      state.showPopup = true;
    };

    return {
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
}
</style>
