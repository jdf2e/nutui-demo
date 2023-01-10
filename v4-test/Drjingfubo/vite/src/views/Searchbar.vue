<template>
  <nut-searchbar v-model="searchValue">
    <template v-slot:leftout>
      <Left @click="clickLeft" />
    </template>
    <template v-slot:leftin>
      <Search2 />
    </template>
    <template v-slot:rightin>
      <Photograph />
    </template>
    <template v-slot:rightout>
      <Message />
    </template>
  </nut-searchbar> 
</template>
<script lang="ts">
  import { toRefs, reactive } from 'vue';
  import { Search2, Left, Photograph, Message } from '@nutui/icons-vue';
  export default {
    components: { Search2, Left, Photograph, Message },
    setup() {
      const state = reactive({
        searchValue: ""
      });

      return {
        ...toRefs(state),
      };
    }
  };
</script>

<style>
:root{
  /* --nut-searchbar-background:red; */
/* --nut-searchbar-right-out-color:red; */
--nut-searchbar-padding: 9px 16px;
--nut-searchbar-width:100%;
--nut-searchbar-input-background:#f7f7f7;
--nut-searchbar-input-padding:0 0 0 13px;
--nut-searchbar-input-height:32px;
--nut-searchbar-input-width:100%;
--nut-searchbar-input-border-radius:16px;
--nut-searchbar-input-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.04);
--nut-searchbar-input-bar-color:inherit;
--nut-searchbar-input-bar-placeholder-color:inherit;
}

</style>
