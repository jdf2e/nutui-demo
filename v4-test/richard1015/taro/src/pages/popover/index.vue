<template>
  <nut-pagination
    v-model="currentPage3"
    :total-items="500"
    @change="pageChange"
    :show-page-size="5"
  >
  </nut-pagination>
  <nut-swipe>
    <nut-cell round-radius="0" desc="左滑删除" />
    <template #right>
      <nut-button shape="square" style="height: 100%" type="danger"
        >删除</nut-button
      >
    </template>
  </nut-swipe>
  <nut-swipe disabled>
    <nut-cell round-radius="0" desc="禁止滑动" />
    <template #right>
      <nut-button shape="square" style="height: 100%" type="danger"
        >删除</nut-button
      >
    </template>
  </nut-swipe>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from "vue";
export default defineComponent({
  name: "Pagination",

  setup() {
    const state = reactive({
      currentPage: 1,
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
    });
    const pageChange = (value: any) => {
      console.log(value);
    };

    return {
      ...toRefs(state),
      pageChange,
    };
  },
});
</script>
