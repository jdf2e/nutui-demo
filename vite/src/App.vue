<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <nut-button>Button 3.0</nut-button>
  <nut-button type="primary">主要按钮</nut-button>
  <nut-button type="info">信息按钮</nut-button>
  <nut-button type="default">默认按钮</nut-button>
  <nut-button type="danger">危险按钮</nut-button>
  <nut-button type="warning">警告按钮</nut-button>
  <nut-button type="success">成功按钮</nut-button>
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
