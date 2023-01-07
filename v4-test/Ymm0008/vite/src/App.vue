<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";
const switchChecked = ref(false);
const themeVars = {
  primaryColor: "#008000",
  primaryColorEnd: "#008000",
  backtopBorderColor: "red",
};
</script>

<template>
  <div>
    <img
      src="https://img10.360buyimg.com/imagetools/jfs/t1/149240/34/27661/2999/63721359E4b3545a5/e0344c5b93e62710.png"
      class="logo"
      alt="nutui logo"
    />
  </div>
  <nut-config-provider :theme-vars="themeVars">
    <nut-cell title="切换暗黑">
      <template v-slot:link>
        <nut-switch v-model="switchChecked" @change="switchChange" />
      </template>
    </nut-cell>
    <HelloWorld />
  </nut-config-provider>
</template>

<style scoped>
.logo {
  height: 3em;
  padding: 1.5em;
  will-change: filter;
}
.text {
  padding: 10px;
  background-color: antiquewhite;
  color: brown;
}
</style>
