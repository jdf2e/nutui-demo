<template>
  <div class="demo">
    <nut-video
      :source="source"
      :options="options"
      @play="play"
      @pause="pause"
      @playend="playend"
      @time="time"
    >
    </nut-video>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive, ref, onMounted } from "vue";

export default {
  props: {},
  setup() {
    const state = reactive({
      source: {
        src: "https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D",
        type: "video/mp4",
      },
      options: {
        controls: true,
        // autoplay: true,
        muted: true,
        playsinline: true,
        poster:
          "https://img12.360buyimg.com/ling/s345x208_jfs/t1/168105/33/8417/54825/603df06dEfcddc4cb/21f9f5d0a1b3dad4.jpg.webp",
      },
    });
    const play = (elm: any) => console.log("play", elm);
    const pause = (elm: any) => console.log("pause", elm);
    const playend = (elm: any) => console.log("playend", elm);

    const time = (current: string, total: string) =>
      console.log("time", current, total);

    return { ...toRefs(state), play, pause, playend, time };
  },
};
</script>

<style lang="scss" scoped>
.nut-swiper-item {
  line-height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
}
.page {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 46px;
  height: 22px;
  background: rgba(0, 0, 0, 0.33);
  border-radius: 22px;
  text-align: center;
  color: #fff;
  font-size: 14px;
}
.nut-swiper-item {
  line-height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
  ::v-deep(.nut-swiper-pagination-vertical) {
    i {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      &.active {
        height: 18px;
        border-radius: 5px;
      }
    }
  }
}
</style>
