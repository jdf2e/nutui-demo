<template>
  <nut-price :price="1010" :need-symbol="false" :thousands="true" />
  <nut-price :price="10010.01" :need-symbol="true" :thousands="false" />
  <nut-price
    :price="15213.122"
    :decimal-digits="3"
    :need-symbol="true"
    :thousands="true"
  />
  <nut-price
    :price="price"
    :decimal-digits="3"
    :need-symbol="true"
    :thousands="true"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Price",

  setup: () => {
    const price = ref(0);
    setInterval(() => {
      price.value = Math.random() * 10000000;
    }, 1000);
    return {
      price,
    };
  },
});
</script>
