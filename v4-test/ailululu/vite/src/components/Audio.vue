<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-12-27 15:14:11
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-29 09:48:39
-->
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import {
  Voice,
  PlayDoubleBack,
  PlayDoubleForward,
  PlayStart,
  PlayStop,
} from "@nutui/icons-vue";
defineProps<{
  msg: string;
}>();
const audioDemo = ref(null);
const data = reactive({
  muted: false,
  autoplay: false,
});
const duration = ref(0);
onMounted(() => {
  setTimeout(() => {
    duration.value = audioDemo.value.second.toFixed();
  }, 500);
});
const playing = ref(false);

const fastBack = (progress) => {
  console.log("倒退", progress);
};

const forward = (progress) => {
  console.log("快进", "当前时间" + progress);
};

const changeStatus = (status) => {
  console.log("当前播放状态", status);
  playing.value = status;
};

const ended = () => {
  console.log("播放结束");
};

const changeProgress = (val) => {
  console.log("改变进度条", val);
};
const mute = (val) => {
  console.log("静音", val);
};
</script>
<template>
  <div class="demo-box">
    <div class="demo">
      <nut-audio
        url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
        :muted="false"
        :autoplay="false"
        :loop="true"
        type="icon"
      ></nut-audio>
    </div>
    <div class="demo">
      <nut-audio
        url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
        :muted="data.muted"
        :autoplay="data.autoplay"
        :loop="false"
        type="none"
        ref="audioDemo"
      >
        <div class="nut-voice">
          <div><Voice></Voice></div>
          <div>{{ duration }}"</div>
        </div>
      </nut-audio>
    </div>
    <div class="demo">
      <nut-audio
        url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
        :muted="false"
        :autoplay="false"
        :loop="true"
        type="progress"
        @forward="forward"
        @fastBack="fastBack"
        @play="changeStatus"
        @ended="ended"
        @changeProgress="changeProgress"
        @mute="mute"
      >
        <div class="nut-audio-operate-group">
          <nut-audio-operate type="back"></nut-audio-operate>
          <nut-audio-operate type="play"></nut-audio-operate>
          <nut-audio-operate type="forward"></nut-audio-operate>
          <nut-audio-operate type="mute"></nut-audio-operate>
        </div>
      </nut-audio>
    </div>
    <div class="demo">
      <nut-audio
        url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
        :muted="false"
        :autoplay="false"
        :loop="false"
        type="progress"
        @forward="forward"
        @fastBack="fastBack"
        @play="changeStatus"
        @ended="ended"
        @changeProgress="changeProgress"
      >
        <div class="nut-audio-operate-group">
          <nut-audio-operate type="back">
            <PlayDoubleBack width="35px" height="35px"></PlayDoubleBack>
          </nut-audio-operate>
          <nut-audio-operate type="play">
            <PlayStart v-if="!playing" width="35px" height="35px"></PlayStart>
            <PlayStop v-else width="35px" height="35px"></PlayStop>
          </nut-audio-operate>
          <nut-audio-operate type="forward">
            <PlayDoubleForward width="35px" height="35px"></PlayDoubleForward>
          </nut-audio-operate>
        </div>
      </nut-audio>
    </div>
  </div>
</template>

<style scoped>
.demo {
  margin-bottom: 30px;
}

.nut-voice {
  display: flex;
  justify-content: space-between;
  width: 100px;
  height: 20px;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 18px;
}
</style>
