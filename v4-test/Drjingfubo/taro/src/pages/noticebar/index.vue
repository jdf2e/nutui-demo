<template>
  <nut-noticebar
      text="NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。"
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
    ></nut-noticebar>
  <nut-noticebar :closeMode="true" :background="`rgba(251, 248, 220, 1)`" :color="`#D9500B`">
    NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。
  </nut-noticebar>
 
  <nut-noticebar
      :closeMode="true"
      right-icon="circle-close"
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
      >
      NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。
  </nut-noticebar>

  <nut-noticebar
      text="NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。"
      wrapable
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
    ></nut-noticebar>
    <nut-noticebar 
      direction='vertical' 
      :list="horseLamp1" 
      :speed='10' 
      :standTime='1000' 
      @click='go' 
      :closeMode="true" 
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`">
  </nut-noticebar>




</template>
<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const horseLamp1 = ref(['Noticebar 公告栏', 'Cascader 级联选择', 'DatePicker 日期选择器', 'CheckBox 复选按钮']);
      const go = (item) => {
        console.log(item)
      }
      return { horseLamp1,go };
    }
  }
</script>


<style>
:root{
--nut-noticebar-background:green; /**不对 */
--nut-noticebar-color:red;  /**不对 */ 
--nut-noticebar-font-size:14px; 
--nut-noticebar-height:40px;  /** 纵向不生效 */
--nut-noticebar-line-height:14px;
--nut-noticebar-left-icon-width:116px;  /**不对 */ 
--nut-noticebar-right-icon-width:161px;  /**不对  */ 
--nut-noticebar-box-padding:0 16px; 
--nut-noticebar-wrapable-padding:16px;
--nut-noticebar-lefticon-margin:0px 10px;
--nut-noticebar-righticon-margin:0px 10px;
}

</style>
