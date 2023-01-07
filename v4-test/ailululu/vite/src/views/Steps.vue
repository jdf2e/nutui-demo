<template>
  <div class="demo">
    <nut-steps :current="current1" @click-step="handleClickStep">
      <nut-step title="步骤一" content="步骤描述">
        1
        <template #title>Slots title</template>
        <template #content>Slots content</template>
        <template #icon>icon</template>
      </nut-step>
      <nut-step title="未开始" content="步骤描述">2</nut-step>
      <nut-step title="未开始" content="步骤描述">3</nut-step>
    </nut-steps>
    <div class="steps-button">
      <nut-button size="mini" type="primary" @click="handleStep('current1')"
        >下一步</nut-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive, ref } from "vue";

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
    const elevator = ref<HTMLElement>();
    const state = reactive({
      current1: 1,
      current2: 1,
      current3: 1,
      current4: 1,
      current5: 1,
    });
    const handleClickStep = (index: number) => {
      console.log(index);
    };
    const handleStep = (params: any) => {
      if (state[params] >= 3) {
        state[params] = 1;
      } else {
        state[params] += 1;
      }
    };

    return {
      ...toRefs(state),
      handleClickStep,
      handleStep,
    };
  },
};
</script>

<style lang="scss" scoped>
.custom-wrap {
  padding: 110px 0;
  text-align: center;
}
.nut-cell {
  justify-content: space-between;
}
.custom-content {
  padding: 10px 10px 160px;
}
.nut-theme-dark {
  .custom-content {
    color: white;
  }
}
</style>
