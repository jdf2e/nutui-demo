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

    <nut-price :price="0" size="small" :need-symbol="false" :thousands="true" />
    <nut-price :price="0" size="normal" :need-symbol="false" :thousands="true" />
    <nut-price :price="0" size="large" :need-symbol="false" :thousands="true" />
    <nut-price :price="999.4999" :decimal-digits="0" size="normal" :need-symbol="true" :thousands="true" />
    <nut-price :price="price" :decimal-digits="3" :need-symbol="true" :thousands="true" />


</template>
<script lang="ts">
import { reactive, toRefs, ref } from 'vue';
export default {
  setup() {
    const data = reactive({
      muted: false,
      autoplay: false
    });

    const price = ref(0);
            setInterval(() => {
                price.value = Math.random()*10000000;
            }, 1000);

            console.log(11)
    return {
        price,
      ...toRefs(data)
    };
  }
};
</script>
