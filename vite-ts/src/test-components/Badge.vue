<template>
<div style="display:flex">
<nut-badge :value="8" top="5" right="5">
  <nut-avatar icon="my" shape="square"></nut-avatar>
</nut-badge>
<nut-badge :value="76" top="10" right="10">
  <nut-avatar icon="my" shape="square"></nut-avatar>
</nut-badge>
<nut-badge value="NEW">
  <nut-avatar icon="my" shape="square"></nut-avatar>
</nut-badge>
</div>



</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Badge",

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
