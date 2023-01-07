<template>
  <nut-form>
   <nut-form-item label="选择地址" @click="state.visible = true">
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
       :convertConfig="state.convertConfig"
     ></nut-cascader>
   </nut-form-item>
  </nut-form>
 </template>
 <script lang="ts">
 import { reactive } from 'vue';
 export default {
   setup() {
     const state = reactive({
       visible: false,
       value: ['广东省', '广州市'],
       convertConfig: {
         topId: null,
         idKey: 'id',
         pidKey: 'pid',
         sortKey: ''
       },
       options: [
         { value: '北京', text: '北京', id: 1, pid: null },
         { value: '朝阳区', text: '朝阳区', id: 11, pid: 1 },
         { value: '亦庄', text: '亦庄', id: 111, pid: 11 },
         { value: '广东省', text: '广东省', id: 2, pid: null },
         { value: '广州市', text: '广州市', id: 21, pid: 2 }
       ]
     });
     const events = {
       change(...args: any) {
         console.log('change', ...args);
       },
       pathChange(...args: any) {
         console.log('pathChange', ...args);
       },
     };
 
     return { state, events };
   }
 }
 </script>
 