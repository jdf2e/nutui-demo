<template>
  <nut-tabbar @tab-switch="tabSwitch">
     <nut-tabbar-item tab-title="标签" :icon="Home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="标签" :icon="Category"> </nut-tabbar-item>
      <nut-tabbar-item tab-title="标签" :icon="Find"></nut-tabbar-item>
      <nut-tabbar-item tab-title="标签" :icon="Cart"></nut-tabbar-item>
      <nut-tabbar-item tab-title="标签" :icon="My"></nut-tabbar-item>
  </nut-tabbar>
</template>
<script lang="ts">
  import { Home,Category,Find,Cart,My} from '@nutui/icons-vue';
  export default{
    components: {Home,Category,Find,Cart, My },
    setup() {
      function tabSwitch(item, index) {
        console.log(item, index);
      }
      return {
        tabSwitch,
        Home,
        Category,
        Find,
        Cart,
        My 
      };
    },
  }
</script>
