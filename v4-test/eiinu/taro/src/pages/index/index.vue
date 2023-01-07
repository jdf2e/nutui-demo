<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-config-provider :theme-vars="{
      'list-item-margin': '0 0 30px 0'
    }"> 
      <nut-list :height="50" :listData="count" @scroll-bottom="handleScroll">
        <template v-slot="{ item }">
          <div class="list-item" @click="onClick(item)">
            {{ item }}
          </div>
        </template>
      </nut-list>
    </nut-config-provider>
  </div>
</template>
<script lang="ts">
import { onMounted, reactive, toRefs } from 'vue';
export default {
  props: {},
  setup() {
    const state = reactive({
      count: new Array(100).fill(0)
    });

    const handleScroll = () => {
      let arr = new Array(100).fill(0);
      const len = state.count.length;
      state.count = state.count.concat(arr.map((item: number, index: number) => len + index + 1));
    };

    onMounted(() => {
      state.count = state.count.map((item: number, index: number) => index + 1);
    })

    const onClick = (item: any) => {
      console.log(item);
    }

    return { ...toRefs(state), handleScroll, onClick };
  }
};
</script>
<style lang="scss">
body {
  width: 100%;
  height: 100vh;
}
#app {
  width: 100%;
  height: 100%;
}
.demo {
  height: 100%;
  .nut-cell {
    height: 100%;
  }
  .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #f4a8b6;
    border-radius: 10px;
  }
}
</style>
