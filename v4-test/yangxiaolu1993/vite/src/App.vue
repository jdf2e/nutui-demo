<script setup lang="ts">
const themeVars = {
  buttonBorderRadius: '10px'
};
</script>

<template>
  <div id="app">
    <!-- <nut-config-provider :theme-vars="themeVars"> -->
      <router-view/>
    <!-- </nut-config-provider> -->
  </div>

</template>

<style scoped>

</style>
