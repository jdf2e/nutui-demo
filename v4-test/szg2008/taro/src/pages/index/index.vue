<template>
  <nut-cell class="cell">
      <nut-rate :icon="HeartFill" v-model="value" />
  </nut-cell>
</template>
<script lang="ts">
import { ref } from 'vue';
import { HeartFill } from '@nutui/icons-vue-taro';
export default {
  components: { HeartFill },
  setup() {
      const value = ref(3);
      return { value, HeartFill }
  }
}
</script>
