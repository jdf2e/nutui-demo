<template>
  <nut-cell
    :show-icon="true"
    title="选择多个日期"
    :desc="date7 && date7.length ? `已选择${date7.length}个日期` : '请选择'"
    @click="openSwitch('isVisible7')"
  >
  </nut-cell>
  <nut-calendar
    v-model:visible="isVisible7"
    :default-value="date7"
    type="multiple"
    :start-date="`2022-01-01`"
    :end-date="`2022-09-10`"
    @close="closeSwitch('isVisible7')"
    @choose="setChooseValue7"
  >
  </nut-calendar>
</template>
<script lang="ts">
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      date7: [],
      isVisible7: false,
    });
    const openSwitch = (param) => {
      state[`${param}`] = true;
    };
    const closeSwitch = (param) => {
      state[`${param}`] = false;
    };
    const setChooseValue7 = (chooseData: any) => {
      let dateArr = chooseData.map((item: any) => {
        return item[3];
      });
      state.date7 = [...dateArr];
    };
    const select = (param: string) => {
      console.log(param);
    };
    return {
      ...toRefs(state),
      openSwitch,
      closeSwitch,
      setChooseValue7,
      select,
    };
  },
};
</script>
