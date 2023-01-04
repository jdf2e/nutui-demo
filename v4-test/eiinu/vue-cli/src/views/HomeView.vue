<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <nut-button type="primary" @click="onClick">按钮</nut-button>
    <nut-popup v-model:visible="showPopup">正文</nut-popup>
    <nut-overlay></nut-overlay>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const showPopup = ref(false);
const onClick = () => {
  showPopup.value = true;
};
</script>
