<template>
  <nut-overlay></nut-overlay>
  <nut-popup></nut-popup>
  <nut-button>123</nut-button>
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
