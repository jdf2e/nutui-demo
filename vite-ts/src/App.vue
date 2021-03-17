<template>
  <ShortPassword></ShortPassword>
  <Button></Button>
  <Price></Price>
  <Tabbar></Tabbar>
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import HelloWorld from "./test-components/HelloWorld.vue";
import ShortPassword from "./test-components/ShortPassword.vue";
import Button from "./test-components/Button.vue";
import Price from "./test-components/Price.vue";
import Tabbar from "./test-components/Tabbar.vue";
export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    ShortPassword,
    Button,
    Price,
    Tabbar,
  },
  setup() {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
