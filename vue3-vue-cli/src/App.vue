<template>
  <div>
    <router-view></router-view>
   
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  components: {},
  setup() {
    const state = reactive({
      tab1value: "0",
      val0: "",
      val1: "初始数据",
      val2: "禁止修改",
      val3: "readonly 只读",
      val4: "",
      val5: "",
      val6: "",
      val7: "",
      val8: "文案",
    });
    setTimeout(function () {
      state.val1 = "异步数据";
    }, 2000);
    const change = (value, event) => {
      console.log("change: ", value, event);
    };
    const focus = (value, event) => {
      console.log("focus:", value, event);
    };
    const blur = (value, event) => {
      console.log("blur:", value, event);
    };
    const clear = (value) => {
      console.log("clear:", value);
    };

    return {
      state,
      change,
      blur,
      clear,
      focus,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
