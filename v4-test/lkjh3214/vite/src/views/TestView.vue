<template>
  <nut-cell
    :showIcon="true"
    title="自定义按钮"
    :desc="date && date[0] ? `${date[0]}至${date[1]}` : '请选择'"
    @click="openSwitch('isVisible')"
  >
  </nut-cell>
  <nut-calendar
    ref="calendarRef"
    v-model:visible="isVisible"
    :default-value="date"
    type="range"
    @close="closeSwitch('isVisible')"
    @choose="setChooseValue"
  >
    <template v-slot:btn>
      <div class="wrapper">
        <div class="d_div">
          <span class="d_btn" @click="goDate">去某个时间</span>
        </div>
        <div class="d_div"> 
          <span class="d_btn" @click="clickBtn">最近七天</span>
        </div>
        <div class="d_div"> 
          <span class="d_btn" @click="clickBtn1">当月</span>
        </div>
      </div>
    </template>
    <template v-slot:day="date">
      <span>{{ date.date.day }}</span>
    </template>
  </nut-calendar>
</template>

<script lang="ts">
import { reactive, toRefs, ref } from 'vue';
export default {
  setup() {
    const state = reactive({
      date: [],
      isVisible: false
    });
    const calendarRef = ref(null);
    const getNumTwoBit = function(n: number): string {
      n = Number(n);
      return (n > 9 ? '' : '0') + n;
    };
    const date2Str =  function(date: Date, split?: string): string {
      split = split || '-';
      const y = date.getFullYear();
      const m = getNumTwoBit(date.getMonth() + 1);
      const d = getNumTwoBit(date.getDate());
      return [y, m, d].join(split);
    };
    const getDay = function(i: number): string {
      i = i || 0;
      let date = new Date();
      const diff = i * (1000 * 60 * 60 * 24);
      date = new Date(date.getTime() + diff);
      return date2Str(date);
    };
    const isLeapYear= function(y: number): boolean {
      return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0;
    };
    const getMonthDays= function(year: string, month: string): number {
      if (/^0/.test(month)) {
        month = month.split('')[1];
      }
      return ([
        0,
        31,
        isLeapYear(Number(year)) ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
      ] as number[])[month as any];
    };
    const openSwitch = param => {
      state[`${param}`] = true;
    };
    const closeSwitch = param => {
      state[`${param}`] = false;
    };
     const setChooseValue = param => {
      state.date= param[3];
    };
    const clickBtn = () => {
      let date = [date2Str(new Date()), getDay(6)];
      state.date = date;
    };
    const clickBtn1 = () => {
      let date = new Date();
      let year = date.getFullYear();
      let month: any = date.getMonth() + 1;
      month = month < 10 ? '0' + month : month + '';
      let yearMonth = `${year}-${month}`;
      let currMonthDays = getMonthDays(year + '', month + '');
      state.date = [`${yearMonth}-01`, `${yearMonth}-${currMonthDays}`];
    };
    const goDate = () => {
      if (calendarRef.value) {
        var date1 = new Date();
        date1.setDate(date1.getDate() + 30);
        calendarRef.value.scrollToDate(date2Str(date1));
      }
    };
    return {
      ...toRefs(state),
      setChooseValue,
      openSwitch,
      closeSwitch,
      clickBtn,
      calendarRef,
      goDate,
      clickBtn1
    };
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  padding: 0 40px;
}
.d_div {
  margin: 0px 5px;
  .d_btn {
    background: #fa3f19;
    color: #fff;
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 4px;
    display: inline-block;
  }
}

</style>
