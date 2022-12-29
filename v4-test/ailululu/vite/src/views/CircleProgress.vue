<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-12-29 15:49:18
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-29 17:26:15
-->
<script setup lang="ts">
import { ref } from "vue";
const gradientColor = {
  "0%": "#FF5E5E",
  "100%": "#FFA062",
};
const percent = ref(30);
const setAddVal = () => {
  if (percent.value >= 100) {
    return;
  }
  percent.value += 10;
};
const setReduceVal = () => {
  if (percent.value - 10 <= 0) {
    percent.value = 0;
    return;
  }
  percent.value -= 10;
};
</script>

<template>
  <div class="demo-box">
    <nut-cell>
      <nut-circle-progress :progress="20" :clockwise="false">
      </nut-circle-progress>
    </nut-cell>
    <nut-cell>
      <nut-circle-progress :progress="50" strokeWidth="10">
      </nut-circle-progress>
    </nut-cell>
    <nut-cell>
      <nut-circle-progress :progress="50" color="red" />
      <nut-circle-progress :progress="100" :color="gradientColor" />
    </nut-cell>
    <nut-cell>
      <nut-circle-progress :progress="50" radius="60" stroke-linecap="butt"
        >butt</nut-circle-progress
      >
    </nut-cell>
    <nut-cell>
      <nut-circle-progress :progress="50" radius="60" stroke-linecap="square"
        >square</nut-circle-progress
      >
    </nut-cell>
    <div>
      <div>
        <nut-circle-progress :progress="percent"></nut-circle-progress>
      </div>
      <div>
        <nut-button type="primary" @click="setReduceVal">减少</nut-button>
        <nut-button type="primary" @click="setAddVal">增加</nut-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
