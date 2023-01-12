<template>
  <nut-tabbar :bottom="true">
    <nut-tabbar-item id="target1" tab-title="首页"></nut-tabbar-item>
    <nut-tabbar-item id="target2" tab-title="分类"></nut-tabbar-item>
    <nut-tabbar-item id="target3" tab-title="购物车"></nut-tabbar-item>
    <nut-tabbar-item id="target4" tab-title="我的"></nut-tabbar-item>
  </nut-tabbar>
  <nut-cell title="点击试试" @click="showTour = true"></nut-cell>
  <nut-tour
    class="nut-custom-tour"
    v-model="showTour"
    :steps="steps"
    location="top-start"
    :offset="[0, 0]"
    maskWidth="50"
    maskHeight="50"
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
          target: 'target1'
        },
        {
          content: '支持一套代码同时开发多端小程序+H5',
          target: 'target2'
        },
        {
          content: '基于京东APP 10.0 视觉规范',
          target: 'target3',
          location: 'top-end'
        },
        {
          content: '支持定制主题，内置 700+ 个主题变量',
          target: 'target4',
          location: 'top-end'
        }
      ],
    });
    return {...toRefs(state)};
  }
};
</script>
<style>
  #app{
    padding-top:200px
  }
</style>

