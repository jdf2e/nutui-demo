<template>
    <nut-cell class="wrap">
      <img :src="src" alt="" />
      <nut-watermark :fullPage="false" font-color="#fa2c19" content="nut-ui"></nut-watermark>
    </nut-cell>
  </template>
  <script lang="ts">import { ref } from 'vue';

    export default {
      setup() {
       const src = ref('//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg');
        return { src };
      }
    };
  </script>
  <style lang="scss" scoped>
    .wrap {
      width: 100%;
      height: 240px;
      display: block;
      background: #fff;
       > img {
        width: 100%;
      }
    }
  </style>
  