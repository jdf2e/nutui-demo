<template>
  <nut-tabbar @tab-switch="tabSwitch">
     <nut-tabbar-item tab-title="标签" :icon="Home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="标签" :icon="Category"> </nut-tabbar-item>
      <nut-tabbar-item tab-title="标签" :icon="Find"></nut-tabbar-item>
      <nut-tabbar-item tab-title="标签" :icon="Cart"></nut-tabbar-item>
      <nut-tabbar-item tab-title="标签" :icon="My"></nut-tabbar-item>
  </nut-tabbar>
  <div @click="textToast('成功提示')">1233</div>
</template>
<script lang="ts">
  import { Home,Category,Find,Cart,My} from '@nutui/icons-vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';
  export default{
    name:"Index",
    components: {Home,Category,Find,Cart, My },
    setup() {
      function tabSwitch(item: any, index: any) {
        console.log(item, index);
      }
      const textToast = (msg: string) => {
        showToast.success(msg, {
        duration: 0
      });
    };
      return {
        tabSwitch,
        textToast,
        Home,
        Category,
        Find,
        Cart,
        My 
      };
    },
  }
</script>
