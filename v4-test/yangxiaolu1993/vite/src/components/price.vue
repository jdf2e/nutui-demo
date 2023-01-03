<template>
    <nut-audio
      url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
      :muted="muted"
      :autoplay="autoplay"
      :loop="true"
      type="progress"
    >
      <div class="nut-audio-operate-group">
        <nut-audio-operate type="back"></nut-audio-operate>
        <nut-audio-operate type="play"></nut-audio-operate>
        <nut-audio-operate type="forward"></nut-audio-operate>
        <nut-audio-operate type="mute"></nut-audio-operate>
      </div>
    </nut-audio>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const data = reactive({
      muted: false,
      autoplay: false
    });
    return {
      ...toRefs(data)
    };
  }
};
</script>
