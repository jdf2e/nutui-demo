<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const themeVars = {
  buttonBorderRadius: '10px'
};

</script>

<template>
  <nut-button type="primary">主要按钮</nut-button>
</template>

<style scoped>



</style>
