<template>
  <nut-video :source="source" :options="options" @play="play" @pause="pause" @playend="playend">
  </nut-video>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
export default defineComponent({
  name: "video",
  setup() {
    const state = reactive({
      source: {
        src: "https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D",
        type: "video/mp4",
      },
      options: {
        controls: true,
      },
    });
    const play = (elm: any) => console.log("play", elm);
    const pause = (elm: any) => console.log("pause", elm);
    const playend = (elm: any) => console.log("playend", elm);

    return { play, pause, playend, ...toRefs(state) };
  },
});
</script>
