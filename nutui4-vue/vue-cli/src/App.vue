<script setup>
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

<style >
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
</style>
