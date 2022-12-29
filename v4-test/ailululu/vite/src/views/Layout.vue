<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-12-27 15:14:11
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-29 14:52:24
-->
<script setup lang="ts">
const clickRow = (event) => {
  console.log("row", event);
};
const clickCol = (event) => {
  console.log("col", event);
};
</script>

<template>
  <nut-row type="flex" wrap="nowrap" @click="clickRow">
    <nut-col :span="6" offset="6px" @click="clickCol">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" wrap="nowrap">
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" justify="center">
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" justify="end">
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" justify="space-between">
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" justify="space-around">
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" justify="space-evenly">
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
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
