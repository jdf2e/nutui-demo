<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <nut-button type="info" icon="star-fill">信息按钮</nut-button>
  <nut-button type="default">默认按钮</nut-button>
  <nut-button type="danger">危险按钮</nut-button>
  <nut-button type="warning">警告按钮</nut-button>
  <nut-button type="success">成功按钮</nut-button>
  <nut-input v-model="state.val1" @change="change" @focus="focus" @clear="clear" @blur="blur" label="文本" />
  <nut-price :price="1010" :need-symbol="false" :thousands="true" />
</template>

<script>
import {reactive} from 'vue';
export default {
  name: "App",
  components: {},
  setup() {
    const state = reactive({
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
