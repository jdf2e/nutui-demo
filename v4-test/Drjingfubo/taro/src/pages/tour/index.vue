<template>
  
  <nut-cell title="点击试试" @click="showTour = true"></nut-cell>
  
  <div class="ab" id="target1">12</div>
  <div class="ab"  id="target2">34</div>
  <div class="ab" id="target3">56</div>
  <div class="ab" id="target4">78</div>
  <nut-tour
    class="nut-custom-tour"
    v-model:visible="showTour"
    :steps="steps"
    location="bottom"
    :offset="[0, 0]"
    maskWidth="50"
    maskHeight="50"
  ></nut-tour>

  <nut-cell title="点击试试" @click="showTour2 = true">
    <template v-slot:link>
      
    </template>
  </nut-cell>
  <div class="tour-demo-img">
        <img
          id="target6"
          src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
        />
      </div>

  <nut-tour
    v-model:visible="showTour2"
    :steps="steps2"
    type="tile"
    bgColor="#f00"
    theme="dark"
    location="bottom-start"
    :offset="[20, 28]"
  ></nut-tour>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      showTour: false,
      steps: [
        {
          content: '70+ 高质量组件，覆盖移动端主流场景',
          target: 'target1',
          location: 'bottom-start'
        },
        {
          content: '支持一套代码同时开发多端小程序+H5',
          target: 'target2'
        },
        {
          content: '基于京东APP 10.0 视觉规范',
          target: 'target3',
          // location: 'top-end'
        },
        {
          content: '支持定制主题，内置 700+ 个主题变量',
          target: 'target4',
          location: 'bottom'
        }
      ],
      showTour2: false,
      steps2: [
        {
          content: '这里换成关注和粉丝啦，听歌时长点击头像可见',
          target: 'target6',
          popoverOffset: [40, 12],
          arrowOffset: -36
        }
      ]
    });
    return {...toRefs(state)};
  }
};
</script>

<style lang="scss">
.tour-demo-img{
  width: 10px;
  margin: auto;
  >img{
    width: 100%;
  }
}
.ab{
  width: 130px;
  height: 20px;
  background: green;
  margin-top: 20px;

}
</style>
