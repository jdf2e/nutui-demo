<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <nut-button @click="openCalendar">
      打开日历
    </nut-button>
    <nut-switch :active="true">
    </nut-switch>

    <nut-calendar :is-visible.sync="isVisible" :default-value="date" type="range" :start-date="null" :end-date="null"
      :animation="`nutSlideUp`" @close="switchPickerClose" @choose="setChooseValue">
    </nut-calendar>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      date: null
    };
  },
  mounted() {},
  methods: {
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
