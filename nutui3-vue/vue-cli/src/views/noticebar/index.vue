<template>
  <div class="noticebar">
    <nut-noticebar
      text="华为畅享9新品即将上市"
      :scrollable="true"
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
    ></nut-noticebar>
    <p></p>
    <nut-noticebar
      text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
      :scrollable="false"
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
    ></nut-noticebar>
    <p></p>
    <nut-noticebar
      text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
      wrapable
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
    ></nut-noticebar>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "NoticeBar",
  components: {},
  setup() {
    const state = reactive({
      tab1value: "0",
      val0: "",
    });

    return {
      state,
    };
  },
};
</script>

<style>
.noticebar {
  text-align: left;
}
</style>
