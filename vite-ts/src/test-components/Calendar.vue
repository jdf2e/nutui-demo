<template>
  <nut-cell :showIcon="true" title="选择单个日期" :desc="date ? `${date} ${dateWeek}` : '请选择'" @click="openSwitch()">
  </nut-cell>
  <nut-calendar v-model:visible="isVisible" :default-value="date" @close="closeSwitch('isVisible')"
    @choose="setChooseValue" :start-date="`2019-10-11`" :end-date="`2022-11-11`">
  </nut-calendar>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "Calendar",

  setup: () => {
    const state = reactive({
      isVisible: false,
      date: "",
      dateWeek: "",
    });
    const openSwitch = () => {
      state.isVisible = true;
    };
    const closeSwitch = (param) => {
      state[`${param}`] = false;
    };
    const setChooseValue = (param) => {
      state.date = param[3];
      state.dateWeek = param[4];
    };
    return {
      ...toRefs(state),
      openSwitch,
      closeSwitch,
      setChooseValue,
    };
  },
});
</script>
