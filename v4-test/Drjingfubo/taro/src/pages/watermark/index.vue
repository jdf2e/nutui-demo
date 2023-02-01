<template>
  <nut-cell class="wrap">
    <nut-button @click="showTextMark">文字水印</nut-button>
    <nut-button @click="showImageMark">图片水印</nut-button>
    <nut-watermark v-if="!flag" class="mark1" :z-index="1" content="nut-ui-water-mark"></nut-watermark>
    <nut-watermark
      v-if="flag"
      class="mark1"
      :image-width="60"
      :image-height="23"
      :z-index="1"
      :image="imgSrc"
    ></nut-watermark>
  </nut-cell>
</template>
<script lang="ts">
  import { ref } from "vue";
  export default {
    setup() {
      const imgSrc = ref('//img11.360buyimg.com/imagetools/jfs/t1/57345/6/20069/8019/62b995cdEd96fef03/51d3302dfeccd1d2.png');
      const flag = ref(false);
      const showTextMark = () => {
        flag.value = false;
      };
      const showImageMark = () => {
        flag.value = true;
      };
      return { imgSrc, showTextMark, showImageMark, flag };
    }
  };
</script>
<style lang="scss" scoped>
  .wrap {
    width: 100%;
    height: 240px;
    display: block;
    background: #fff;
    >img {
      width: 100%;
    }
    .mark1 {
      width: 100%;
      top: 50px;
    }
    .nut-button{
      margin-right: 10px;
    }
  }
</style>
