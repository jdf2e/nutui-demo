<template>
  <nut-tabbar @tab-switch="switchTab" v-model:visible="selected" bottom>
    <nut-tabbar-item
      tab-title="首页"
      img="http://img13.360buyimg.com/uba/jfs/t1/29316/38/1115/3203/5c0f3d61E35d0c7da/9e557f2cb5c9dab6.jpg"
      activeImg="http://img20.360buyimg.com/uba/jfs/t1/9996/36/8646/4833/5c0f3d61E7c1b7e0f/c98ad61124172e93.jpg"
    ></nut-tabbar-item>
    <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
    <nut-tabbar-item tab-title="购物车" icon="cart"></nut-tabbar-item>
    <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
  </nut-tabbar>
</template>

<script>
import Taro from "@tarojs/taro";
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  props: {},
  setup() {
    const store = useStore();
    const selected = computed(() => store.getters.getSelected);
    const url = [
      "/pages/index/index",
      "/pages/cate/index",
      "/pages/cart/index",
      "/pages/my/index",
    ];
    function switchTab(item, index) {
      console.log(index);
      setSelected(index);
      Taro.switchTab({
        url: url[index],
      });
    }

    function setSelected(index) {
      store.dispatch("setSelected", index);
    }
    return{
      switchTab,
      selected,

    }
  },
};
</script>

<style lang="scss">
</style>
