<template>

 <nut-tag type="primary">标签</nut-tag>
 <nut-tag type="success">标签</nut-tag>
 <nut-tag type="danger">标签</nut-tag>
 <nut-tag type="warning">标签</nut-tag>
<nut-tag plain>标签</nut-tag>
 <nut-tag round type="primary">标签</nut-tag>
  <nut-tag mark type="primary">标签</nut-tag>
   <nut-tag v-if="show" closeable  @close="close" type="primary">标签</nut-tag>
    <nut-tag color="#FA685D">标签</nut-tag>
 <nut-tag color="#E9E9E9" text-color="#999999">标签</nut-tag>
 <nut-tag color="#FA2400" plain>标签</nut-tag>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Tag",

  setup: () => {
  const show = ref(true);
  const close = () => {
      show.value = false;
    };

    return {
      close,
    };
  },
});
</script>
