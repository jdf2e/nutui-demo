<template>
  <div class="sticky-container" ref="container">
    <nut-sticky top="100" :container="container" z-index="1">
      <nut-button type="info">指定容器</nut-button>
    </nut-sticky>
  </div>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const container = ref(null);
      return {
        container
      };
    }
  };
</script>
<style lang="scss" scoped>
.sticky-container{
  width: 100%;
  height: 300px;
  background-color: #fff;
}
</style>
<style lang="scss">
#app{
  height: auto !important;
}
</style>
