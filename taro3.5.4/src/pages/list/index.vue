<template>
  <view class="index">
    <nut-list :height="50" :listData="count" @scroll-bottom="handleScroll">
      <template v-slot="{ item }">
          <div class="list-item">
          {{ item }}
          </div>
      </template>
    </nut-list>
  </view>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue';
export default {
  name: 'List',
  setup(){
    const state = reactive({
      count: new Array(100).fill(0)
    });

    onMounted(() => {
        state.count = state.count.map((item, index) => index + 1);
    })

    const handleScroll = () => {
        let arr = new Array(100).fill(0);
        const len = state.count.length;
        state.count = state.count.concat(arr.map((item, index) => len + index + 1));
    };

    return {
      ...toRefs(state),
      handleScroll
    }
  }
}
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  background-color: #f4a8b6;
  border-radius: 10px;
}
</style>
