<template>
  <nut-searchbar v-model="searchValue"></nut-searchbar>
</template>
<script lang="ts">
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      searchValue: "",
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
