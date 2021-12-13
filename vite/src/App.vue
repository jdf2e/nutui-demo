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
  <nut-fixednav :position="{bottom:'70px' }" v-model:visible="visible" :nav-list="navList" />
  <nut-cell title="自定义 Icon 字体">
    <!-- 通过 class-prefix 指定类名为 my-icon -->
    <nut-icon font-class-name="iconfont" class-prefix="icon" name="mianji" />
    <span class="iconfont icon-mianji"></span>
  </nut-cell>

  <nut-form>
    <nut-form-item label="选择地址">
      <input
        class="nut-input-text"
        @click="state.visible = true"
        :value="state.value"
        readonly
        placeholder="请选择地址"
        type="text"
      />
      <nut-cascader
        title="地址选择"
        v-model:visible="state.visible"
        v-model="state.value"
        @change="events.change"
        @path-change="events.pathChange"
        :options="state.options"
      ></nut-cascader>
    </nut-form-item>
  </nut-form>

  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { ref, reactive } from "vue";
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
  visible: false,
  value: ["湖南"],
  options: [
    {
      value: "浙江",
      text: "浙江",
      children: [
        {
          value: "杭州",
          text: "杭州",
          disabled: true,
          children: [
            { value: "西湖区", text: "西湖区" },
            { value: "余杭区", text: "余杭区" },
          ],
        },
        {
          value: "温州",
          text: "温州",
          children: [
            { value: "鹿城区", text: "鹿城区" },
            { value: "瓯海区", text: "瓯海区" },
          ],
        },
      ],
    },
    {
      value: "湖南",
      text: "湖南",
      disabled: true,
    },
    {
      value: "福建",
      text: "福建",
      children: [
        {
          value: "福州",
          text: "福州",
          children: [
            { value: "鼓楼区", text: "鼓楼区" },
            { value: "台江区", text: "台江区" },
          ],
        },
      ],
    },
  ],
});
const events = {
  change(...args) {
    console.log("change", ...args);
  },
  pathChange(...args) {
    console.log("pathChange", ...args);
  },
};
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
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
