<template>
  <nut-cell class="cell">
      <nut-rate v-model="value" />
  </nut-cell>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
      const value = ref(3);
      return { value }
  }
}
</script>
<style>
page, :root {
  --nut-rate-icon-color: green;
}
</style>
