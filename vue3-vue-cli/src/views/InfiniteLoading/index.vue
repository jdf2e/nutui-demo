<template>
  <div class="noticebar">
    <nut-infiniteloading :has-more="hasMore" @load-more="loadMore">
      <div class="infiniteLi" v-for="(item, index) in defultList" :key="index">
        {{ item }}
      </div>
    </nut-infiniteloading>
  </div>
</template>

<script>
import { reactive,ref,onMounted,toRefs } from "vue";
export default {
  name: "Infinite",
  components: {},
  setup() {
    const hasMore = ref(true);
    const data = reactive({
      defultList: [],
    });
    const loadMore = (done) => {
      setTimeout(() => {
        const curLen = data.defultList.length;
        for (let i = curLen; i < curLen + 10; i++) {
          data.defultList.push(`InfiniteLoading 滚动加载${i}`);
        }
        if (data.defultList.length > 30) hasMore.value = false;
        done();
      }, 500);
    };
    const init = () => {
      for (let i = 0; i < 10; i++) {
        data.defultList.push(`InfiniteLoading 滚动加载${i}`);
      }
    };
    onMounted(() => {
      init();
    });
    return { loadMore, hasMore, ...toRefs(data) };
  },
};
</script>

<style>
.noticebar {
    height: 100vh;
    padding: 0 20px;

    
}
.infiniteLi{
    padding: 8px 6px;
    border-bottom: 1px solid #f00;
}
</style>
