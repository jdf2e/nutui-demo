<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />

  <nut-button type="primary" @click="testNavBar">主要按钮</nut-button>
  <nut-button type="info">信息按钮</nut-button>
  <nut-button type="default">默认按钮</nut-button>
  <nut-button type="danger">危险按钮</nut-button>
  <nut-button type="warning">警告按钮</nut-button>
  <nut-button type="success">成功按钮</nut-button>

  <nut-tabbar :bottom="true" :show="active" @tab-switch="tabSwitch">
    <nut-tabbar-item
      v-for="item in tests"
      :tab-title="item.title"
      :href="item.href"
      :icon="item.icon"
      :num="item.num"
    ></nut-tabbar-item>
  </nut-tabbar>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const tests = reactive([
      { title: "首页", icon: "home", href: "", num: 0 },
      { title: "分类", icon: "category", href: "https://m.jd.com", num: 1 },
    ]);
    const active = ref(0);
    function tabSwitch(item: object, index: number) {
      console.log(item, index);
    }
    function testNavBar() {
      tests.push({ title: "发现", icon: "find", href: "", num: 0 });
      tests[0].href = "https://m.jd.com";
      active.value = 2;
      tests[0].num = 3;
    }
    return {
      testNavBar,
      tabSwitch,
      tests,
      active,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 100px;
}
</style>
