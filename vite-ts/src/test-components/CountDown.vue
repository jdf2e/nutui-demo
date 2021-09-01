<template>
  <nut-countdown :end-time="end"></nut-countdown>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
export default defineComponent({
  name: "CountDown",
  setup() {
    const state = reactive({
      end: Date.now() + 50 * 1000,
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
