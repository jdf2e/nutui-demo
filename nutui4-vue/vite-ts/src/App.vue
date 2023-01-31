<script setup lang="ts">
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';

const msg = '欢迎使用 NutUI3.0 开发项目~'
const handleClick = () => {
  showToast.text(msg)
};
</script>

<template>
  <div>
    <div>{{ msg }}</div>
    <nut-button type="primary" @click="handleClick()">点我</nut-button>
  </div>
</template>

<style scoped>

</style>
