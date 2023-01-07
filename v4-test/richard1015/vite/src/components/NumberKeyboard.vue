<script lang="ts" setup>
import { ref } from "vue";
import { showToast } from "@nutui/nutui";
import "@nutui/nutui/dist/packages/toast/style";
const visible = ref(false);
function showKeyBoard() {
  visible.value = true;
}
function input(number: any) {
  showToast.text(`输入：${number}`);
}
function onDelete() {
  showToast.text("删除");
}
function close() {
  visible.value = false;
}
const value = ref(0.1);
</script>
<template>
  <nut-cell
    :isLink="true"
    @click="showKeyBoard"
    :showIcon="true"
    title="默认键盘"
  ></nut-cell>
  <nut-number-keyboard
    v-model:visible="visible"
    @input="input"
    @delete="onDelete"
    @close="close"
  >
  </nut-number-keyboard>
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
