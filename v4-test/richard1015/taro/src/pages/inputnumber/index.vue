<script lang="ts" setup>
import { ref, reactive } from "vue";
const value = ref(0.1);
const themeVars = reactive({
  primaryColor: "#008000",
  primaryColorEnd: "#008000",
  inputnumberIconColor: "red",
});

setTimeout(() => {
  themeVars.inputnumberIconColor = "blue";
}, 3000);
</script>
<template>
  <nut-config-provider :theme-vars="themeVars">
    <nut-button type="primary">123</nut-button>
    <nut-input-number v-model="value" />
    <nut-input-number v-model="value" button-size="70" input-width="50" />
    <nut-input-number v-model="value" step="0.2" decimal-places="1" />
  </nut-config-provider>
</template>
<style>
/* :root {
  --nut-inputnumber-icon-color: red;
  --nut-inputnumber-icon-void-color: var(--nut-disable-color);
  --nut-inputnumber-icon-size: 50px;
  --nut-inputnumber-input-font-size: 30px;
  --nut-inputnumber-input-font-color: blue;
  --nut-inputnumber-input-background-color: yellow;
  --nut-inputnumber-input-border-radius: 4px;
  --nut-inputnumber-input-width: 70px;
  --nut-inputnumber-input-margin: 0 6px;
  --nut-inputnumber-input-border: 0;
  --nut-inputnumber-border: 0;
  --nut-inputnumber-border-radius: 0;
  --nut-inputnumber-height: auto;
  --nut-inputnumber-line-height: normal;
  --nut-inputnumber-border-box: content-box;
  --nut-inputnumber-display: flex;
} */
</style>
