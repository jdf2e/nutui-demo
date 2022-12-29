<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-12-27 15:14:11
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-28 15:05:01
-->
<script setup lang="ts">
import { StarFill, Star } from "@nutui/icons-vue";
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="greetings">
    <nut-button type="primary">大号按钮</nut-button>
    <nut-button disabled type="primary" size="mini">禁用状态</nut-button>
    <nut-button block type="primary" loading>块级元素</nut-button>
    <nut-button shape="square" plain type="primary" size="mini">
      <template #icon>
        <StarFill />
      </template>
    </nut-button>
    <nut-button shape="square" type="primary" size="large">
      <template #icon>
        <Star />
      </template>
      收藏
    </nut-button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
