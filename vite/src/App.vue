<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <nut-button>Button 3.0</nut-button>
  <nut-button type="primary">主要按钮</nut-button>
  <nut-button type="info">信息按钮</nut-button>
  <nut-button type="default">默认按钮</nut-button>
  <nut-button type="danger">危险按钮</nut-button>
  <nut-button type="warning">警告按钮</nut-button>
  <nut-button type="success">成功按钮</nut-button>
  <nut-cell title="123123213312">123123</nut-cell>
  <nut-icon name="dongdong"></nut-icon>
  <nut-fixednav
    :position="{ bottom: '70px' }"
    v-model:visible="visible"
    :nav-list="navList"
  />
  <nut-cell title="自定义 Icon 字体">
    <!-- 通过 class-prefix 指定类名为 my-icon -->
    <nut-icon font-class-name="iconfont" class-prefix="icon" name="mianji" />
    <span class="iconfont icon-mianji"></span>
  </nut-cell>
  <nut-cell
    is-link
    title="自定义Cell 中 Icon 字体"
    font-class-name="iconfont"
    class-prefix="icon"
    icon="mianji"
    right-icon="mianji"
  ></nut-cell>

  <nut-menu font-class-name="iconfont" class-prefix="icon" title-icon="mianji">
    <nut-menu-item v-model="state.value1" :options="state.options1" />
    <nut-menu-item
      v-model="state.value2"
      @change="handleChange"
      :options="state.options2"
      font-class-name="iconfont"
      class-prefix="icon"
      option-icon="mianji"
    />
  </nut-menu>

  <nut-cell
    title="选择地址"
    @click="
      () => {
        show = true;
      }
    "
  ></nut-cell>
  <nut-picker
    v-model:visible="show"
    :columns="columns"
    @confirm="confirm"
  ></nut-picker>

  <div>11</div>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { ref, reactive, computed } from "vue";
const visible = ref(false);
const navList = reactive([
  {
    id: 1,
    text: "首页",
    icon: "https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png",
  },
  {
    id: 2,
    text: "分类",
    icon: "https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png",
  },
  {
    id: 3,
    text: "购物车",
    num: 2,
    icon: "https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png",
  },
  {
    id: 4,
    text: "我的",
    icon: "https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png",
  },
]);

const state = reactive({
  options1: [
    { text: "全部商品", value: 0 },
    { text: "新款商品", value: 1 },
    { text: "活动商品", value: 2 },
  ],
  options2: [
    { text: "默认排序", value: "a" },
    { text: "好评排序", value: "b" },
    { text: "销量排序", value: "c" },
  ],
  value1: 0,
  value2: "a",
});

const handleChange = (val) => {
  console.log("val", val);
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
const show = ref(false);

const columns = computed(() => [
  { text: "南京", value: "NanJing" },
  { text: "wuXi", value: "WuXi" },
  { text: "zangZu", value: "ZangZu" },
  { text: "beiJing", value: "BeiJing" },
  { text: "lianYunGang", value: "LianYunGang" },
  { text: "zheJiang", value: "ZheJiang" },
  { text: "jiangSu", value: "JiangSu" },
]);

const confirm = ({ selectedValue }) => {
  console.log(11, selectedValue);
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
