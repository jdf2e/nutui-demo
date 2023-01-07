<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2023-01-07 11:08:51
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-07 14:27:06
-->
<template>
  <div class="demo">
    <nut-swipe disabled>
      <nut-cell round-radius="0" desc="左滑删除" />
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger"
          >删除</nut-button
        >
      </template>
    </nut-swipe>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive, ref, onMounted } from "vue";

interface Item {
  name: string;
  subname?: string;
  color?: string;
  disable?: boolean;
  loading?: boolean;
}
export default {
  props: {},
  setup() {
    const swiper = ref(null);
    const state = reactive({
      page: 2,
      page3: 0,
      current: 1,
    });
    // const handleClickStep = (index: number) => {
    //   console.log(index);
    // };

    const change = (index: number) => {
      state.current = index + 1;
    };

    const handlePrev = () => {
      swiper.value.prev();
    };
    const handleNext = () => {
      swiper.value.next();
    };

    return {
      ...toRefs(state),
      change,
      swiper,
      handlePrev,
      handleNext,
    };
  },
};
</script>

<style lang="scss" scoped>
.demo {
  overflow-x: hidden;
}
</style>
