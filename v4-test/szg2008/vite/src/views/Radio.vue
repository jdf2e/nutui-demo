<template>
    <nut-cell-group title="触发事件">
      <nut-cell>
        <nut-radio-group v-model="radioVal" @change="handleChange">
          <nut-radio label="1">触发事件</nut-radio>
          <nut-radio label="2">触发事件</nut-radio>
        </nut-radio-group>
      </nut-cell>
      <nut-cell title="当前选中值" :desc="radioVal"></nut-cell>
    </nut-cell-group>
  </template>
  <script lang="ts">
    import { ref } from 'vue';
    export default {
      props: {},
      setup() {
        const radioVal = ref('1');
        const handleChange = (value: any) => {
          console.log(value);
        };
        return { radioVal, handleChange };
      },
    };
  </script>
  <style>
:root {
    --nut-radio-label-font-color: #49a8a8;
    --nut-radio-label-font-active-color: var(--nut-primary-color);
    --nut-radio-label-disable-color: rgb(109, 101, 101);
    --nut-radio-icon-disable-color: #d6d6d6;
    --nut-radio-label-button-border-color: #49a8a8;
    --nut-radio-label-button-background: #49a8a8;
    --nut-radio-label-margin-left: 25px;
    --nut-radio-button-border-radius: 20px;
    --nut-radio-label-font-size: 18px;
    --nut-radio-button-font-size: 12px;
    --nut-radio-button-padding: 5px 18px;
    --nut-radio-icon-disable-color2: var(--nut-help-color);
}
</style>
  