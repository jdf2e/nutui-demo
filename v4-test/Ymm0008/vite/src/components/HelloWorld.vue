<template>
  <nut-searchbar v-model="searchValue">
    <template v-slot:leftout>
      <Left />
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
import { toRefs, reactive } from "vue";
import { Search2, Left, Photograph, Message } from "@nutui/icons-vue";
export default {
  components: { Search2, Left, Photograph, Message },
  setup() {
    const state = reactive({
      searchValue: "",
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
