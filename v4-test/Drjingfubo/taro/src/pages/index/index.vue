<template>
  <nut-tabbar v-model="activeName" @tab-switch="tabSwitch">
       <nut-tabbar-item v-for="(item,index) in List" :name="item.name" :tab-title="item.title" :icon="item.icon"> </nut-tabbar-item>
     </nut-tabbar>
 </template>
 <script>
 import{ref,h} from 'vue'
   import { Home,Category,Find,Cart,My} from '@nutui/icons-vue-taro';
   export default{
     components: {Home,Category,Find,Cart, My },
     setup() {
       const activeName = ref("category");
       const List=[
       {
         title:'标签',
         icon: h(Home),
         name:'home'
       },
       {
         title:'标签',
         icon: h(Category),
         name:'category'
       },
       {
         title:'标签',
         icon: h(Find),
         name:'find',
         
       },
       {
         title:'标签',
         icon: h(Cart),
         name:'cart'
       },
       {
         title:'标签',
         icon: h(My),
         name:'my'
       }
     ]
       function tabSwitch(item, index) {
         console.log(item, index);
       }
       return {
         tabSwitch,
         List,
         activeName,
       };
     },
   }
 </script>
 