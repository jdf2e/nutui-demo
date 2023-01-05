<script setup lang="ts">
import { Locale } from "@nutui/nutui";
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
</script>
<template>
  <nut-button loading type="info">123</nut-button>
  <Pagination />
  <Avatar />
</template>

<style scoped></style>
