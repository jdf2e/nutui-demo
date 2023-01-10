<template>
  <nut-config-provider :theme-vars="themeVars">
    <hello />
  </nut-config-provider>
</template>
<script lang="ts">
import { ref } from "vue";
import hello from "./../hello/index.vue";

export default {
  components: { hello },
  setup() {
    const range = ref(30);
    const themeVars = {
      ecardBgColor: "orange",
      // progressInnerBackgroundColor: "green",
      // progressInsidetextBackground: "green",
      // progressOuterBackgroundColor: "green",
      // progressOuterBorderRadius: "0",
      // progressInsidetextBorderRadius: "0",
      // progressInsidetextPadding: "20px",
      // progressInsidetextTop: "30px", //无效
      // progressSmallHeight: "50px",
      // progressSmallTextFontSize: "20px",
      // progressSmallTextLineHeight: "100px",
      // progessSmallTextPadding: "30px", //无效
      // progessSmallTextTop: "-100%", //无效
      // progressBaseHeight: "100px",
      // progressBaseTextFontSize: "10px",
      // progressBaseTextLineHeight: "130px",
      // progressBaseTextPadding: "20px",
      // progressBaseTextTop: "13px", //无效
      // progressLargeHeight: "100px",
      // progressLargeTextFontSize: "20px",
      // progressLargeTextLineHeight: "180px",
      // progressLargeTextPadding: "33px",
      // progressLargeTextTop: "20px", //无效
    };
    // 当然，你也可以选择使用组件变量去替换，如果同时设置了基础变量和组件变量，组件变量会覆盖基础变量。
    //  const themeVars = {
    //   rangeBgColor: 'rgba(25,137,250,0.15)',
    //   rangeBarBgColor: '#0289fa',
    //   rangeBarBtnBorder: '1px solid #0289fa'
    // };

    return { range, themeVars };
  },
};
</script>
