<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2023-01-06 11:26:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-06 12:26:37
-->
<script setup lang="ts">
import { My } from "@nutui/icons-vue";
</script>

<template>
  <div style="width: 40px; height: 40px">
    <img
      style="width: 100%; height: 100%"
      src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
    />
  </div>
  <nut-avatar size="large">
    <img
      src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
    />
  </nut-avatar>
  <nut-avatar size="normal">
    <img
      src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
    />
  </nut-avatar>
  <nut-avatar size="small">
    <img
      src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
    />
  </nut-avatar>
  <nut-avatar shape="square"><My /></nut-avatar>
  <nut-avatar shape="round"><My /></nut-avatar>
</template>

<style scoped>
.nut-avatar img {
  width: 100%;
  height: 100%;
  display: inline-block;
}
.nut-avatar {
  line-height: normal;
  background-color: transparent !important;
  overflow: auto;
}
</style>
