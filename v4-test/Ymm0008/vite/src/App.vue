<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";
const themeVars = {
  tableTrEvenBgColor: "green",
  tableTrOddBgColor: "red",
  progressSmallTextPadding: "20px",
  // progressInnerBackgroundColor: "green",
  // progressInsidetextBackground: "green",
  // progressOuterBackgroundColor: "green",
  // progressOuterBorderRadius: "0",
  // progressInsidetextBorderRadius: "0",
  // progressInsidetextPadding: "20px",
  // progressInsidetextTop: "30px", 无效
  // progressSmallHeight: "50px",
  // progressSmallTextFontSize: "12px",
  // progressSmallTextLineHeight: "100px",
  // progessSmallTextPadding: "30px", 无效
  // progessSmallTextTop: "-100%",无效
  // progressBaseHeight: "100px",
  // progressBaseTextFontSize: "10px",
  // progressBaseTextLineHeight: "130px",
  // progressBaseTextPadding: "20px",
  // progressBaseTextTop: "13px",无效
  // progressLargeHeight: "100px",
  // progressLargeTextFontSize: "20px",
  // progressLargeTextLineHeight: "180px",
  // progressLargeTextPadding: "33px",
  // progressLargeTextTop: "20px",
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
