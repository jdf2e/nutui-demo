<template>
    <nut-noticebar
        text="NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。"
      ></nut-noticebar>
  </template>
  
  
  
  <script lang="ts">
    import { ref } from 'vue';
    export default {
      name:"Index",
      setup(props) {
        const horseLamp1 = ref(['Noticebar 公告栏', 'Cascader 级联选择', 'DatePicker 日期选择器', 'CheckBox 复选按钮']);
        const go = (item:any) => {
          console.log(item)
        }
        return { horseLamp1,go };
      }
    }
  </script>
  <style>
  :root{
   --nut-noticebar-background:red;
  --nut-noticebar-color:white;
  --nut-noticebar-font-size:14px;
  --nut-noticebar-height:40px;
  --nut-noticebar-line-height:24px;
  --nut-noticebar-left-icon-width:16px;
  --nut-noticebar-right-icon-width:16px;
  --nut-noticebar-box-padding:0 16px;
  --nut-noticebar-wrapable-padding:16px;
  --nut-noticebar-lefticon-margin:0px 10px;
  --nut-noticebar-righticon-margin:0px 10px;
  }
  </style>