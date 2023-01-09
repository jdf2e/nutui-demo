<script lang="ts" setup>
import { reactive, ref } from "vue";
import { Download } from "@nutui/icons-vue";
</script>
<template>
  <nut-badge>
    <template #icons>
      <Download color="#ffffff" width="12px" height="12px"></Download>
    </template>
    <nut-avatar shape="square"> </nut-avatar>
  </nut-badge>
  <nut-badge :value="76">
    <nut-avatar shape="square"></nut-avatar>
  </nut-badge>
  <nut-badge value="NEW">
    <nut-avatar shape="square"></nut-avatar>
  </nut-badge>
  <nut-badge dot>
    <nut-avatar shape="square"></nut-avatar>
  </nut-badge>
</template>
<style lang="scss">
:root {
  --nut-badge-background-color: linear-gradient(135deg, blue, yellow);
  --nut-badge-color: #fff;
  --nut-badge-font-size: var(--nut-font-size-1);
  --nut-badge-border-radius: 14px;
  --nut-badge-padding: 0 5px;
  --nut-badge-content-transform: translate(50%, -50%);
  --nut-badge-z-index: 1;
  --nut-badge-dot-width: 7px;
  --nut-badge-dot-height: 7px;
  --nut-badge-dot-border-radius: 7px;
  --nut-badge-dot-padding: 0px;
}
.nut-badge {
  margin-right: 40px;
}
</style>
