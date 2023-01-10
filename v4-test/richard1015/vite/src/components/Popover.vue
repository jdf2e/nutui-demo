<script lang="ts" setup>
import { h, reactive, ref } from "vue";
import { Cart2, My2 } from "@nutui/icons-vue";
const visible = ref({
  darkTheme: false,
  lightTheme: false,
  showIcon: false,
  disableAction: false,
  customColor: false,
});
const iconItemList = reactive([
  { name: "选项一" },
  { name: "选项二" },
  { name: "选项三" },
]);

const itemList = reactive([
  {
    name: "option1",
    icon: () => {
      return h(My2, {
        width: "14px",
        color: "rgba(250, 44, 25, 1)",
      });
    },
  },
  {
    name: "option2",
    icon: Cart2,
  },
  {
    name: "option3",
    icon: Location,
  },
]);

const itemListDisabled = reactive([
  {
    name: "选项一",
    disabled: true,
  },
  {
    name: "选项二",
    disabled: true,
  },
  {
    name: "选项三",
  },
]);
const handle = (str: string) => {
  console.log(str);
};
</script>
<template>
  <nut-popover
    @choose="handle('choose')"
    @open="handle('open')"
    @close="handle('close')"
    v-model:visible="visible.lightTheme"
    :duration="0.3"
    :list="iconItemList"
  >
    <template #reference>
      <nut-button type="primary" shape="square">明朗风格</nut-button>
    </template>
  </nut-popover>

  <nut-popover
    v-model:visible="visible.darkTheme"
    theme="dark"
    :list="iconItemList"
  >
    <template #reference>
      <nut-button type="primary" shape="square">暗黑风格</nut-button>
    </template>
  </nut-popover>
  <!-- 
  <nut-popover v-model:visible="visible.showIcon" theme="dark" :list="itemList">
    <template #reference>
      <nut-button type="primary" shape="square">展示图标</nut-button>
    </template>
  </nut-popover>

  <nut-popover v-model:visible="visible.disableAction" :list="itemListDisabled">
    <template #reference>
      <nut-button type="primary" shape="square">禁用选项</nut-button>
    </template>
  </nut-popover>

  <nut-popover
    v-model:visible="visible.customColor"
    :list="itemList"
    location="right-start"
    bgColor="#f00"
    theme="dark"
  >
    <template #reference>
      <nut-button type="primary" shape="square">自定义颜色</nut-button>
    </template>
  </nut-popover> -->
</template>
<style lang="scss">
:root {
  --nut-popover-white-background-color: rgba(255, 255, 255, 1);
  --nut-popover-dark-background-color: rgba(75, 76, 77, 1);
  --nut-popover-border-bottom-color: rgba(229, 229, 229, 1);
  --nut-popover-primary-text-color: rgba(51, 51, 51, 1);
  --nut-popover-disable-color: rgba(154, 155, 157, 1);
  --nut-popover-menu-item-padding: 8px 0;
  --nut-popover-menu-item-margin: 0 8px;
  --nut-popover-menu-name-line-height: normal;
}
</style>
