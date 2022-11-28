<template>
  <view class="top_nav " :class="[showTab ? 'scroll_in' : '']">
    <view class="nav ">
      <nut-tabs
        v-model="tabValue"
        background="#fff"
        :auto-height="true"
        @click="clickTab"
      >
        <nut-tabpane :title="item.name" v-for="item in tabArr"> </nut-tabpane>
      </nut-tabs>
    </view>
  </view>
</template>
<script>
import { ref, onMounted, onUnmounted } from "vue";
import Taro, {
  usePullDownRefresh,
  usePageScroll,
  useReady,
} from "@tarojs/taro";
import { nextTick } from "process";

export default {
  setup() {
    const showTab = ref(false);
    const tabArr = ref([
      { name: "商品", selector: "#goodsInfo" },
      { name: "评价", selector: "#goodsComment" },
      { name: "详情", selector: "#moreDetail" },
      { name: "推荐", selector: "#recommendList" },
    ]);
    const targetRect = ref({
      goodsInfo: "",
      goodsComment: "",
      moreDetail: "",
      recommendList: "",
    });
    const tabValue = ref("0");
    const appH = ref(0);
    const flag = ref(false);
    useReady(() => {
      Taro.nextTick(() => {
        for (let key in targetRect.value) {
          Taro.createSelectorQuery()
            .select(`#${key}`)
            .boundingClientRect()
            .exec((res) => {
              targetRect.value[key] = res;
            });
        }
        appH.value = Taro.getWindowInfo().windowHeight;
      });
    });
    usePageScroll((res) => {
      if (res.scrollTop >= 50) {
        showTab.value = true;
      } else {
        showTab.value = false;
      }
      if (flag.value) {
        return;
      }
      judgeScroll(res.scrollTop);
    });
    const judgeScroll = (scrollTop) => {
      let currentArr = [];
      let topValue = scrollTop + appH.value / 2 + 100;
      if (Taro.getEnv() == "WEAPP") {
        topValue =
          scrollTop + appH.value / 2 - 50 * Taro.getWindowInfo().pixelRatio;
      }
      for (let key in targetRect.value) {
        let item = targetRect.value[key];
        if (topValue >= item[0].top) {
          currentArr.push(item[0]);
        }
      }
      if (currentArr.length == 2) {
        tabValue.value = "3";
        return;
      }
      if (currentArr.length == 3) {
        tabValue.value = "1";
        return;
      }
      if (currentArr.length == 4) {
        tabValue.value = "2";
        return;
      }
      tabValue.value = "0";
    };
    const scrollTo = (id) => {
      Taro.pageScrollTo({
        selector: id,
        success: () => {
          flag.value = false;
        },
      });
    };
    const clickTab = (val) => {
      let key = Number(val.paneKey);
      let current = tabArr.value[key];
      flag.value = true;
      scrollTo(current.selector);
    };
    usePullDownRefresh(() => {
      nextTick(() => {
        Taro.stopPullDownRefresh();
      });
    });
    return { tabArr, tabValue, showTab, clickTab };
  },
};
</script>
<style lang="scss">
.top_nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
  .more,
  .back {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #666;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav {
    flex: 1;
    opacity: 0;
    visibility: hidden;
    .nut-tabs__content {
      display: none;
    }
  }
}
.scroll_in {
  background: #fff;
  border-bottom: 1px solid #e5e5e5;

  .back {
    background-color: #fff;
  }
  .more {
    background-color: #fff;
  }
  .nav {
    opacity: 1;
    visibility: initial;
  }
}
</style>
