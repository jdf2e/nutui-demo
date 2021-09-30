<template>
<div style="display:flex">
  <nut-popover
      :visible="visible"
      :list="List"
      @open="open"
      @close="close"
    >
      <template #reference>
        <nut-button type="primary" shape="square">明朗风格</nut-button>
      </template>
    </nut-popover>
</div>



</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Popover",

  setup: () => {
    const visible = ref(false);
    const List =  [{name: '选项一'},{name: '选项二'},{name: '选项三'}];

    const open = () =>{
      visible.value =   true;
    }
    const close = () =>{
      visible.value =  false;
    }

    return {
      visible,
      List,
      open,
      close,
    };
  },

});
</script>
