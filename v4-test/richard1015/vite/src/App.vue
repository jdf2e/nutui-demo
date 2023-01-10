<script setup lang="ts">
// import { Locale } from "@nutui/nutui";
import { Add, Del2, Del } from "@nutui/icons-vue";
import { showDialog } from "@nutui/nutui";
import "@nutui/nutui/dist/packages/dialog/style";
// import us from "@nutui/nutui/dist/packages/locale/lang/en-US";
// import tw from "@nutui/nutui/dist/packages/locale/lang/zh-TW";
// Locale.merge("zh-CN", {
//   confirm: "关闭", // 将 "确认" 修改为 "关闭"
//   // 修改某个组件内部语言
//   shortpassword: {
//     title: "请输入密码", // 将 "请输入密码" 修改为 "请输入卡密"
//   },
// });
// setTimeout(() => {
//   Locale.use("en-US", us);
// }, 1000 * 5);
// setTimeout(() => {
//   Locale.use("zh-CN");
// }, 1000 * 10);
// setTimeout(() => {
//   Locale.use("zh-TW", tw);
// }, 1000 * 15);

const baseClick = (): void => {
  showDialog({
    title: "基础弹框",
    content: "123",
  });
};
</script>
<template>
  <nut-cell title="链接" is-link></nut-cell>
  <nut-button loading type="info">123</nut-button>
  <nut-button type="primary">123</nut-button>
  <nut-divider />
  <nut-divider>文本</nut-divider>
  <nut-divider content-position="left">文本</nut-divider>
  <nut-divider content-position="right">文本</nut-divider>
  <nut-divider dashed>文本</nut-divider>
  <nut-divider
    :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >文本</nut-divider
  >
  <!-- <Pagination /> -->
  <!-- <Avatar /> -->
  <!-- <Swipe /> -->
  <!-- <InputNumber /> -->
  <!-- <NumberKeyboard /> -->
  <!-- <Countdown /> -->
  <!-- <Badge /> -->
  <!-- <Tag /> -->
  <!-- <Popover /> -->
  <Form />
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
  background: #ccc;
}
/* :root {
  --nut-primary-color: #4425d1;
  --nut-primary-color-end: #fa6419;
} */
</style>
