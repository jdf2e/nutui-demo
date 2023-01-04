<template>
    <nut-button loading type="info"></nut-button>
    <nut-button loading type="warning">加载中...</nut-button>
    <nut-button :loading="isLoading" block=0 type="success" @click="changeLoading">Click me!</nut-button>

    <nut-button color="#7232dd">单色按钮</nut-button>
    <nut-button color="#7232dd" plain>单色按钮</nut-button>
    <nut-button color="linear-gradient(to right, #ff6034, #ee0a24)"> 渐变色按钮 </nut-button>

    <div class="" @click="changeLoading">qqqqq</div>
  </template>
  
  <script>
    import { ref } from 'vue';
    export default {
      setup(props) {
        let isLoading = ref(false);
        const changeLoading = (e) => {
            console.log(e)
          isLoading.value = true;
          setTimeout(() => {
            isLoading.value = false;
          }, 3000);
        };
        return {
          isLoading,
          changeLoading
        };
      }
    };
  </script>
  