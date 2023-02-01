<script setup lang="ts">
import { Locale } from "@nutui/nutui";
import { showDialog, showToast } from "@nutui/nutui";
import "@nutui/nutui/dist/packages/dialog/style";
import "@nutui/nutui/dist/packages/toast/style";
import us from "@nutui/nutui/dist/packages/locale/lang/en-US";
import tw from "@nutui/nutui/dist/packages/locale/lang/zh-TW";
Locale.merge("zh-CN", {
  confirm: "关闭", // 将 "确认" 修改为 "关闭"
  // 修改某个组件内部语言
  shortpassword: {
    title: "请输入密码", // 将 "请输入密码" 修改为 "请输入卡密"
  },
});
setTimeout(() => {
  Locale.use("en-US", us);
}, 1000 * 5);
setTimeout(() => {
  Locale.use("zh-CN");
}, 1000 * 10);
setTimeout(() => {
  Locale.use("zh-TW", tw);
}, 1000 * 15);

const baseClick = (): void => {
  showDialog({
    title: "基础弹框",
    content: "123",
  });
};
const baseClick1 = (): void => {
  showToast.text("123");
};
</script>
<template>
  <!-- <nut-cell desc-text-align="right" desc='66666' is-link></nut-cell> -->
  <nut-button loading type="info">123</nut-button>
  <nut-button @click="baseClick1" type="primary">123</nut-button>
  <Pagination />
  <!-- <Avatar /> -->
  <!-- <Swipe /> -->
  <InputNumber />
  <!-- <NumberKeyboard /> -->
  <!-- <Countdown /> -->
  <!-- <Badge /> -->
  <!-- <Tag /> -->
  <!-- <Popover /> -->
  <!-- <Form /> -->
</template>

<style>
html,
body {
  width: 100%;
  /* overflow: hidden; */
}
body {
  margin: 0;
  padding: 0;
  background: rgb(242, 237, 237);
}
/* :root {
  --nut-primary-color: #4425d1;
  --nut-primary-color-end: #fa6419;
} */
</style>
