<template>
  <nut-rate v-model="value" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Rate",
  setup: () => {
    const value = ref(3);
    return { value };
  },
});
</script>
