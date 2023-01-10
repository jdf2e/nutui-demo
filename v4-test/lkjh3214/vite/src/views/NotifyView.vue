<template>
  <nut-cell is-Link @click="baseNotify('基础用法')">基础用法</nut-cell>
  <nut-cell-group title="通知类型">
    <nut-cell is-Link @click="primaryNotify('主要通知')">主要通知</nut-cell>
    <nut-cell is-Link @click="successNotify('成功通知')">成功通知</nut-cell>
    <nut-cell is-Link @click="errorNotify('危险通知')">危险通知</nut-cell>
    <nut-cell is-Link @click="warningNotify('警告通知')">警告通知</nut-cell>
  </nut-cell-group>
  <nut-cell-group title="自定义背景色和字体颜色">
    <nut-cell is-Link @click="cusBgNotify('自定义背景色和字体颜色')"
      >自定义背景色和字体颜色</nut-cell
    >
  </nut-cell-group>
  <nut-cell-group title="自定义时长">
    <nut-cell is-Link @click="timeNotify('自定义时长')">自定义时长</nut-cell>
  </nut-cell-group>
  <nut-cell-group title="自定义位置">
    <nut-cell is-Link @click="positionNotify('自定义位置')"
      >自定义位置</nut-cell
    >
  </nut-cell-group>
  <nut-cell-group title="组件调用">
    <nut-cell is-Link @click="_showNotify">组件调用</nut-cell>
    <nut-notify v-model:visible="show" :duration="2000">
      <span>Content</span>
    </nut-notify>
  </nut-cell-group>
</template>
<script lang="ts">
import { ref } from "vue";
import { showNotify } from "@nutui/nutui";
export default {
  setup() {
    const baseNotify = (msg: string) => {
      showNotify.text(msg, {
        onClose: () => {
          console.log("close");
        },
        onClick: () => {
          console.log("click");
        },
      });
    };
    const primaryNotify = (msg: string) => {
      showNotify.primary(msg);
    };
    const successNotify = (msg: string) => {
      showNotify.success(msg);
    };
    const errorNotify = (msg: string) => {
      showNotify.danger(msg);
    };
    const warningNotify = (msg: string) => {
      showNotify.warn(msg);
    };
    const cusBgNotify = (msg: string) => {
      showNotify.text(msg, { color: "#ad0000", background: "#ffe1e1" });
    };
    const timeNotify = (msg: string) => {
      showNotify.text(msg, { duration: 10000 });
    };
    const positionNotify = (msg: string) => {
      showNotify.text(msg, { position: "bottom" });
    };
    const show = ref(false);
    const _showNotify = () => {
      console.log("showNotify");
      show.value = true;
    };
    return {
      primaryNotify,
      successNotify,
      errorNotify,
      warningNotify,
      baseNotify,
      cusBgNotify,
      timeNotify,
      positionNotify,
      show,
      _showNotify,
    };
  },
};
</script>
