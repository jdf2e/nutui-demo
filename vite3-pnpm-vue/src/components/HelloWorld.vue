<script setup lang="ts">
import { reactive, ref } from "vue";

defineProps<{ msg: string }>();

const state = reactive({
  buttonVal: "",
  text: "",
  password: "",
  number: "",
  digit: "",
  tel: "",
  readonly: "",
  disabled: "",
  showIcon: "",
  required: "",
  clear: "",
  error1: "",
  error2: "",
  format1: "",
  format2: "",
  event: "",
});

const formatter = (value: string) => value.replace(/\d/g, "");

const change = (value: string | number) => {
  console.log("change: ", value);
};
const focus = (value: string | number, event: Event) => {
  console.log("focus:", value, event);
};
const blur = (value: string | number, event: Event) => {
  console.log("blur:", value, event);
};
const clear = (value: string | number, event: Event) => {
  console.log("clear:", value, event);
};
const click = (value: string | number) => {
  console.log("click:", value);
};
const clickInput = (value: string | number) => {
  console.log("clickInput:", value);
};
const clickLeftIcon = (value: string | number) => {
  console.log("clickLeftIcon:", value);
};
const clickRightIcon = (value: string | number) => {
  console.log("clickRightIcon:", value);
};
</script>

<template>
  <nut-input v-model="state.text" label="文本" placeholder="文本" />
  <nut-input label="文本" placeholder="文本" v-model="state.text" />
  <nut-input
    label="密码"
    placeholder="密码"
    v-model="state.password"
    type="password"
  />
  <nut-input
    label="数字"
    placeholder="数字"
    v-model="state.number"
    type="number"
  />
  <nut-input
    label="整数"
    placeholder="整数"
    v-model="state.digit"
    type="digit"
  />
  <nut-input
    label="手机号"
    placeholder="手机号"
    v-model="state.tel"
    type="tel"
  />

  <nut-input
    label="文本"
    placeholder="只读"
    v-model="state.readonly"
    readonly
  />
  <nut-input
    label="文本"
    placeholder="禁用"
    v-model="state.disabled"
    disabled
  />

  <nut-input
    v-model="state.showIcon"
    label="文本"
    placeholder="显示图标"
    left-icon="dongdong"
    right-icon="ask2"
  />
  <nut-input
    v-model="state.showIcon"
    label="文本"
    placeholder="显示图标"
    left-icon="dongdong"
    right-icon="ask2"
  />
  <nut-input
    v-model="state.clear"
    label="文本"
    placeholder="显示清除图标"
    clearable
    clearSize="14"
  />

  <nut-input
    v-model="state.buttonVal"
    label="短信验证码"
    placeholder="请输入短信验证码"
    clearable
    center
  >
    <template #button>
      <nut-button size="small" type="primary">发送验证码</nut-button>
    </template>
  </nut-input>

  <nut-input
    v-model="state.required"
    label="文本"
    placeholder="必填项"
    required
  />
  <nut-input
    v-model="state.error1"
    label="文本"
    placeholder="输入内容标红"
    error
  />
  <nut-input
    v-model="state.error2"
    label="文本"
    placeholder="底部错误提示文案"
    error-message="底部错误提示文案"
  />
  <nut-input
    v-model="state.format1"
    label="文本"
    placeholder="在输入时执行格式化"
    :formatter="formatter"
  />
  <nut-input
    v-model="state.format2"
    label="文本"
    placeholder="在失焦时执行格式化"
    :formatter="formatter"
    format-trigger="onBlur"
    show-word-limit
    rows="2"
    type="textarea"
    max-length="50"
  />
  <nut-input
    v-model="state.event"
    label="点击"
    left-icon="dongdong"
    right-icon="ask2"
    clearable
    placeholder="点击"
    @update:model-value="change"
    @focus="focus"
    @blur="blur"
    @clear="clear"
    @click="click"
  />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
