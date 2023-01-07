<template>
  <view class="index">
    <nut-button loading type="primary" @click="handleClick('text', msg2, true)"
      >点我</nut-button
    >
    <nut-uploader></nut-uploader>
  </view>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "Index2",
  components: {},
  setup() {
    return {};
  },
};
</script>

<style lang="scss"></style>
