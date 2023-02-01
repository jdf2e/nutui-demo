<template>
  <nut-cell>
    <nut-ecard
      v-model="money"
      @input-change="inputChange"
      @change="change"
      @change-step="changeStep"
      :data-list="dataList"
    ></nut-ecard>
  </nut-cell>
</template>
<script lang="ts">
  import {ref, reactive, toRefs } from 'vue';
  export default {
    setup() {
      const dataList=reactive([
        {
          price:10
        },
        {
          price:20
        },
        {
          price:30
        },
        {
          price:40
        },
      ])
    const money = ref(10);
    const inputChange = (val: number) => {
      money.value = val;
    };
    const change = (item: { price: number; }) => {
      money.value = item.price;
    };
    const changeStep = (num: number,price: number) => {
      const val = price * num;
      money.value = val;
    };
      return {
        dataList,
        inputChange,
        change,
        money,
        changeStep
      };
    }
  };
</script>
