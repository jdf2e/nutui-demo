<template>
    <div class="test-calendar-wrapper" >
      <nut-calendar
          :poppable="false"
          :default-value="date"
          :is-auto-back-fill="true"
          @choose="setChooseValue"
          :start-date="`2020-02-01`"
          :end-date="`2020-12-30`"
      >
      </nut-calendar>
    </div>
  </template>
  <script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        date: '2022-07-08'
      });
      const setChooseValue = param => {
        state.date = param[3];
      };
      return {
        ...toRefs(state),
        setChooseValue
      };
    }
  }
  </script>
  <style lang="scss">
  .test-calendar-wrapper {
    display: flex;
    width: 100%;
    height: 560px;
    overflow: hidden;
  }
  :root{
    --nut-calendar-primary-color: #3542a2;
    --nut-calendar-choose-color: #3542a2;
    --nut-calendar-choose-font-color: var(--nut-primary-color);
    --nut-calendar-base-color: #3542a2;
    --nut-calendar-disable-color: #22b938;
    --nut-calendar-base-font: var(--nut-font-size-3);
    --nut-calendar-title-font: var(--nut-font-size-4);
    --nut-calendar-title-font-weight: 500;
    --nut-calendar-sub-title-font: var(--nut-font-size-2);
    --nut-calendar-text-font: var(--nut-font-size-1);
    --nut-calendar-day-font: 16px;
    --nut-calendar-day-active-border-radius: 10px;
    --nut-calendar-day-width: 14.28%;
    --nut-calendar-day-height: 64px;
    --nut-calendar-day-font-weight: 500;
    --nut-calendar-day67-font-color: var(--nut-primary-color);
    --nut-calendar-month-title-font-size: inherit;
  }
  </style>
  
  