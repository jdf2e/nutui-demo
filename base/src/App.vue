<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <nut-button @click="openCalendar">
      打开日历
    </nut-button>
    <nut-button @click="openDate=true">
      打开日期
    </nut-button>
    <nut-datepicker :is-visible="openDate" title="请选择日期" type="date" />
    <nut-button @click="showPopup=true">
      打开地址组件
    </nut-button>
    <nut-switch :active="true">
    </nut-switch>

    <nut-calendar :is-visible.sync="isVisible" :default-value="date" type="range" :start-date="null" :end-date="null"
      :animation="`nutSlideUp`" @close="switchPickerClose" @choose="setChooseValue">
    </nut-calendar>

    <nut-address v-model="showPopup" :province="province" :city="city" :country="country" :town="town"
      @onChange="onChange" customAddressTitle="请选择所在地区"></nut-address>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      date: null,
      showPopup: false,
      openDate: false,
      province: [
        { id: 1, name: "北京" },
        { id: 2, name: "广西" },
        { id: 3, name: "江西" },
        { id: 4, name: "四川" }
      ], // 省
      city: [
        { id: 7, name: "朝阳区" },
        { id: 8, name: "崇文区" },
        { id: 9, name: "昌平区" },
        { id: 6, name: "石景山区" }
      ], // 市
      country: [
        { id: 3, name: "八里庄街道" },
        { id: 9, name: "北苑" },
        { id: 4, name: "常营乡" }
      ], // 县
      town: [] // 镇
    };
  },
  mounted() {},
  methods: {
    onChange(event) {
      console.log(event);
    },
    openCalendar() {
      this.isVisible = true;
    },
    switchPickerClose(event) {
      console.log("switchPickerClose", event);
    },
    setChooseValue(param) {
      this.date = [...[param[0][3], param[1][3]]];
      console.log(this.date);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    height: 200px;
    width: 200px;
  }

  .nut-button {
    margin-bottom: 20px;
  }
}
</style>
