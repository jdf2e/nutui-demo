<template>
    <nut-input 
      placeholder="输入框只读" 
      v-model="state.readonly" 
      readonly 
    />
    <nut-input 
      placeholder="输入框已禁用" 
      v-model="state.disabled" 
      disabled 
    />
  </template>
  <script lang="ts">
    import { reactive } from 'vue';
    export default {
      setup() {
        const state = reactive({
          readonly: '',
          disabled: ''
        });
        return {
          state
        };
      }
    }
  </script>
  
<style lang="scss">
:root{
    --nut-input-border-bottom: #49be1f;
--nut-input-disabled-color: #d96826;
--nut-input-required-color: #49be1f;
--nut-input-font-size: 20px;
}
</style>
  