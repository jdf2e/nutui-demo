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
  <nut-avatar class="demo-avatar" bg-color="#FA2C19"
    ><My color="#fff"
  /></nut-avatar>
  <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)"
    >小明</nut-avatar
  >
  <nut-badge value="8">
    <nut-avatar shape="square"><My /></nut-avatar>
  </nut-badge>
  <nut-badge dot>
    <nut-avatar shape="square"><My /></nut-avatar>
  </nut-badge>
  <nut-avatar-group span="-4">
    <nut-avatar>
      <img
        src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
      />
    </nut-avatar>
    <nut-avatar><My /></nut-avatar>
    <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)"
      >小明</nut-avatar
    >
  </nut-avatar-group>
  <nut-avatar-group max-count="3" max-color="#fff" max-bgColor="#498ff2">
    <nut-avatar>
      <img
        src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
      />
    </nut-avatar>
    <nut-avatar><My /></nut-avatar>
    <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)"
      >小明</nut-avatar
    >
    <nut-avatar><My /></nut-avatar>
  </nut-avatar-group>
  <nut-avatar-group max-count="3" zIndex="right" max-content="...">
    <nut-avatar>
      <img
        src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
      />
    </nut-avatar>
    <nut-avatar><My /></nut-avatar>
    <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)"
      >小明</nut-avatar
    >
    <nut-avatar><My /></nut-avatar>
  </nut-avatar-group>
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
