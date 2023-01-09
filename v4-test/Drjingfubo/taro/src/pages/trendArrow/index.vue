<template>
    <nut-cell>
      <nut-trend-arrow :rate="10.2365">
        <template #upIcon><Success color="blue" width="18" height="18" /></template>
      </nut-trend-arrow>
      <nut-trend-arrow :rate="-10.2365">
        <template #downIcon><Failure color="red" /></template>
      </nut-trend-arrow>
    </nut-cell>
  </template>
  <script lang="ts">
    import { Success, Failure } from '@nutui/icons-vue-taro';
    export default {
      components: { Success, Failure },
    };
  </script>
  