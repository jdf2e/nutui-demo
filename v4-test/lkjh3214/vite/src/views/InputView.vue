<template>
  <nut-input
    v-model="state.clear"
    placeholder="显示清除图标"
    clearable
    clearSize="14"
  />
  <nut-input
    v-model="state.clear2"
    placeholder="自定义清除图标"
    clearable
    clearSize="14"
    show-word-limit
    max-length="50"
  >
    <template #clear>
      <Close width="12" height="12" @click="clearValue"></Close>
    </template>
  </nut-input>
</template>
<script lang="ts">
import { reactive } from "vue";
import { Close } from "@nutui/icons-vue";
export default {
  components: {
    Close,
  },
  setup() {
    const state = reactive({
      clear: "",
      clear2: "",
    });
    const clearValue = () => {
      state.clear2 = "";
    };
    return {
      state,
      clearValue,
    };
  },
};
</script>
