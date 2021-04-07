<template>
  <nut-button type="primary" @click="testNavBar">测试NavBar按钮</nut-button>
  <nut-tabbar :bottom="true" v-model:visible="active" @tab-switch="tabSwitch">
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
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "Tabbar",
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
