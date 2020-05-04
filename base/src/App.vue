<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <nut-button>
      定制按钮样式
    </nut-button>
    <nut-switch :active="true">
    </nut-switch>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
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
