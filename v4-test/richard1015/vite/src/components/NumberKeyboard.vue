<script lang="ts" setup>
import { reactive, ref } from "vue";
import { showToast } from "@nutui/nutui";
import "@nutui/nutui/dist/packages/toast/style";
const visible = ref(false);
const customKey = reactive(["X"]);
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
  <nut-cell :isLink="true" :showIcon="true" title="身份证键盘"></nut-cell>
  <nut-number-keyboard
    v-model:visible="visible"
    :custom-key="customKey"
    @input="input"
    @close="close"
  >
  </nut-number-keyboard>
</template>
<style>
:root {
  --nut-numberkeyboard-width: 100%;
  --nut-numberkeyboard-padding: 0;
  --nut-numberkeyboard-background-color: #d31eb5;
  --nut-numberkeyboard-header-height: 34px;
  --nut-numberkeyboard-header-padding: 6px 0 0 0;
  --nut-numberkeyboard-header-color: #646566;
  --nut-numberkeyboard-header-font-size: 16px;
  --nut-numberkeyboard-header-close-padding: 0 16px;
  --nut-numberkeyboard-header-close-color: #576b95;
  --nut-numberkeyboard-header-close-font-size: 14px;
  --nut-numberkeyboard-header-close-background-color: transparent;
  --nut-numberkeyboard-key-background-color: #fff;
  --nut-numberkeyboard-key-active-background-color: #ebedf0;
  --nut-numberkeyboard-key-height: 48px;
  --nut-numberkeyboard-key-line-height: 1.5;
  --nut-numberkeyboard-key-border-radius: 8px;
  --nut-numberkeyboard-key-font-size: 28px;
  --nut-numberkeyboard-key-font-size-color: #333;
  --nut-numberkeyboard-key-finish-font-size: 16px;
  --nut-numberkeyboard-key-finish-font-size-color: #fff;
  --nut-numberkeyboard-key-finish-background-color: #1989fa;
  --nut-numberkeyboard-key-activeFinsh-background-color: #0570db;
}
</style>
