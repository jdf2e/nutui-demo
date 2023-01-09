<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2023-01-07 16:13:58
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-07 16:29:43
-->
<template>
  <div class="demo">
    <nut-infinite-loading
      v-model="infinityValue"
      :has-more="hasMore"
      @load-more="loadMore"
    >
      <div class="infiniteLi" v-for="(item, index) in defultList" :key="index">
        {{ item }}
      </div>
    </nut-infinite-loading>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive, ref, onMounted } from "vue";

export default {
  props: {},
  setup() {
    const letter: any[] = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "IJ",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const data = reactive({
      infinityValue: true,
      defultList: [],
    });
    onMounted(() => {
      data.defultList = [].concat(letter);
    });

    let cycle = 0;
    // const infinityValue = ref(false);
    const hasMore = ref(true);
    // const defultList = ref([]);
    const loadMore = (done: any) => {
      setTimeout(() => {
        data.defultList = data.defultList.concat(letter);
        cycle++;
        if (cycle > 2) hasMore.value = false;
        data.infinityValue = false;
        console.log("data.defultList", data.defultList);
      }, 1000);
    };

    return { loadMore, hasMore, ...toRefs(data) };
  },
};
</script>

<style lang="scss" scoped>
.demo {
  .nut-theme-dark {
    .infiniteLi {
      color: $dark-color;
    }
  }

  .nut-tabs__titles {
    background: #fff !important;
    box-shadow: 0px 4px 10px 0px rgb(0 0 0 / 7%);
    margin-top: 10px;
    margin-bottom: 3px;
    z-index: 99;
  }

  .nut-tab-pane {
    padding: 0 !important;
    padding-left: 16px !important;
  }
  .infiniteUl {
    width: 100%;
    height: calc(100vh - 120px);
    padding: 0;
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .infiniteLi {
    font-size: 14px;
    color: #333;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
  }

  .loading {
    display: block;
    width: 100%;
    text-align: center;
  }
}
</style>
