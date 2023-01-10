<template>
  <nut-cell>
    <nut-countdown :end-time="end" ></nut-countdown>
  </nut-cell>
</template>

<script>
  import { ref,reactive,toRefs } from 'vue';
  export default {
    setup(props) {
      const state = reactive({
        end: Date.now() + 60 * 1000,
      });
      return {
        ...toRefs(state)
      };
    }
  }
</script>

