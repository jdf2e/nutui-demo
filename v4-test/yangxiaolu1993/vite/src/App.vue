<script setup lang="ts">
const themeVars = {
  timeselectTitleFontSize: '10px',
  timeselectTitleColor:'#ff0',
  timeselectTitleWidth:'80px',
  timeselectTitleHeight:'100px'
};
</script>

<template>
  <div id="app">
    <nut-config-provider :theme-vars="themeVars">
      <router-view/>
    </nut-config-provider>
  </div>

</template>

<style scoped>

</style>
