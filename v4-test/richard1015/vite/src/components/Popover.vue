<template>
  <nut-popover v-model:visible="visible.customColor" :list="itemList" location="right-start" bgColor="#f00" theme="dark">
      <template #reference>
        <nut-button type="primary" shape="square" >自定义颜色</nut-button>
      </template>
    </nut-popover>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';
export default {
  setup() {
    const visible = reactive({
      customColor:false
    });

    const itemList = reactive([
      {name: 'option1'},
      {name: 'option2'},
      {name: 'option3'}
    ]);

    return {
        itemList,
        visible
      };
    }
}

</script>
<style>
#app{
  margin-top:300px
}
.nut-popover-content {
  width: 120px;
}
</style>
