<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nutui-demo
      </h1>
      <h2 class="subtitle">
        My unreal Nuxt.js project
      </h2>
      <nut-tab @tab-switch="tabSwitch">
        <nut-tab-panel tab-title="页签1">
          <p>页签1</p>
          <nut-button>定制按钮样式</nut-button>
          <nut-switch :active="true"></nut-switch>
        </nut-tab-panel>
        <nut-tab-panel tab-title="页签2">页签2</nut-tab-panel>
        <nut-tab-panel tab-title="页签3">页签3</nut-tab-panel>
      </nut-tab>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
export default {
  components: {
    Logo
  },
  methods: {
    tabSwitch(index, event) {
      console.log(index + "--" + event.target);
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
