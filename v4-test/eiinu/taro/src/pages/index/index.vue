<template>
  <div class="demo">
    <div style="height: 200px"></div>
    <nut-badge>
      <template #icons>
        <Check color="#ffffff" width="12px" height="12px"></Check>
      </template>
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge>
      <template #icons>
        <Link color="#ffffff" width="12px" height="12px"></Link>
      </template>
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge>
      <template #icons>
        <Download color="#ffffff" width="12px" height="12px"></Download>
      </template>
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
  </div>
</template>

<script setup>
import { Check, Link, Download } from '@nutui/icons-vue-taro';
</script>

<style lang="scss" scoped>
.demo{
  padding: 30px 17px 0 17px;
}
.nut-badge {
  margin-right: 40px;
}
.nut-icon {
  width: 12px;
  height: 12px;
  font-size: 12px;
  line-height: 12px;
}
</style>

