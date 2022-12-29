<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-12-27 15:14:11
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-29 15:21:58
-->
<script setup lang="ts">
import { ref } from "vue";
import { Notify } from "@nutui/nutui";
const show = ref(false);
const showNotify = () => {
  show.value = true;
};
const baseNotify = (msg: string) => {
  Notify.text(msg, {
    onClose: () => {
      console.log("close");
    },
    onClick: () => {
      console.log("click");
    },
  });
};
const cusBgNotify = (msg: string) => {
  Notify.text(msg, { color: "#ad0000", background: "#ffe1e1" });
};
const timeNotify = (msg: string) => {
  Notify.text(msg, { duration: 10000 });
};
const positionNotify = (msg: string) => {
  console.log("bottom");
  Notify.text(msg, { position: "bottom" });
};
</script>

<template>
  <nut-cell is-Link @click="baseNotify('基础用法')">基础用法</nut-cell>
  <!-- <nut-cell-group title="自定义背景色和字体颜色">
    <nut-cell is-Link @click="cusBgNotify('自定义背景色和字体颜色')"
      >自定义背景色和字体颜色</nut-cell
    >
  </nut-cell-group>
  <nut-cell-group title="自定义时长">
    <nut-cell is-Link @click="timeNotify('自定义时长')">自定义时长</nut-cell>
  </nut-cell-group>
  <nut-cell-group title="自定义位置">
    <nut-cell is-Link @click="positionNotify('自定义位置')"
      >自定义位置</nut-cell
    >
  </nut-cell-group> -->
  <nut-cell-group title="组件调用">
    <nut-cell is-Link @click="showNotify">组件调用</nut-cell>
    <nut-notify v-model:visible="show" :duration="2000">
      <span>Content</span>
    </nut-notify>
  </nut-cell-group>
</template>
<style lang="scss" scoped>
.nut-row {
  overflow: hidden;
  &:not(:last-child) .nut-col {
    margin-bottom: 15px;
  }
  margin-bottom: 15px;
}
.flex-content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #ff8881;
  &.flex-content-light {
    background: #ffc7c4;
  }
  &.flex-content-height {
    height: 50px;
  }
}
</style>
