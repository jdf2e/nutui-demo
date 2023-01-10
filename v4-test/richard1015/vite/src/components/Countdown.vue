<script lang="ts" setup>
import { reactive, ref } from "vue";
const end = ref(Date.now() + 60 * 1000);
const serverTime = ref(Date.now() - 20 * 1000);
const asyncEnd = ref(0);
// 模拟异步时间
setTimeout(() => {
  asyncEnd.value = Date.now() + 30 * 1000;
}, 3000);
const state = reactive({
  paused: false,
  end: Date.now() + 60 * 1000,
});
const resetTime = ref({
  d: "1",
  h: "00",
  m: "00",
  s: "00",
});
const Countdown = ref<any>(null);
const start = () => {
  Countdown.value.start();
};
const pause = () => {
  Countdown.value.pause();
};
const reset = () => {
  Countdown.value.reset();
};

const toggle = () => {
  state.paused = !state.paused;
};
const onpaused = (v: any) => {
  console.log("paused: ", v);
};
const onrestart = (v: any) => {
  console.log("restart: ", v);
};
</script>
<template>
  <nut-cell>
    <nut-countdown :end-time="end"></nut-countdown>
  </nut-cell>
  <nut-cell>
    <nut-countdown :endTime="end" format="DD 天 HH 时 mm 分 ss 秒" />
  </nut-cell>
  <nut-cell>
    <nut-countdown :endTime="end" millisecond format="HH:mm:ss:SS" />
  </nut-cell>
  <nut-cell>
    <nut-countdown :startTime="serverTime" :endTime="end"></nut-countdown>
  </nut-cell>
  <nut-cell>
    <nut-countdown :end-time="asyncEnd"></nut-countdown>
  </nut-cell>
  <nut-cell>
    <nut-countdown
      :endTime="end"
      :paused="state.paused"
      @on-paused="onpaused"
      @on-restart="onrestart"
    />
    <div style="position: absolute; right: 10px; top: 9px">
      <nut-button type="primary" size="small" @click="toggle">{{
        state.paused ? "start" : "stop"
      }}</nut-button>
    </div>
  </nut-cell>
  <nut-cell>
    <nut-countdown v-model="resetTime" :endTime="end">
      <div class="countdown-part-box">
        <div class="part-item-symbol">{{ resetTime.d }}天</div>
        <div class="part-item h">{{ resetTime.h }}</div>
        <span class="part-item-symbol">:</span>
        <div class="part-item m">{{ resetTime.m }}</div>
        <span class="part-item-symbol">:</span>
        <div class="part-item s">{{ resetTime.s }}</div>
      </div>
    </nut-countdown>
  </nut-cell>
  <nut-cell>
    <nut-countdown
      time="20000"
      ref="Countdown"
      :autoStart="false"
      format="ss:SS"
    />
  </nut-cell>
  <nut-grid :column-num="3">
    <nut-grid-item
      ><nut-button type="primary" @click="start"
        >开始</nut-button
      ></nut-grid-item
    >
    <nut-grid-item
      ><nut-button type="primary" @click="pause"
        >暂停</nut-button
      ></nut-grid-item
    >
    <nut-grid-item
      ><nut-button type="primary" @click="reset"
        >重置</nut-button
      ></nut-grid-item
    >
  </nut-grid>
</template>
<style lang="scss">
.countdown-part-box {
  display: flex;
  align-items: center;

  .part-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 25px;
    background: #e8220e;
    color: #fff;
    font-size: 14px;
    border-radius: 6px;
  }

  .part-item-symbol {
    margin: 0 5px;
  }
}
:root {
  --nut-countdown-display: flex;
  --nut-countdown-color: rgb(211, 12, 242);
  --nut-countdown-font-size: initial;
}
</style>
