<template>
  <view id="moreDetail" class="anchor"></view>
  <view class="more_detail">
    <nut-tabs v-model="tab1value" background="#fff" :auto-height="true">
      <nut-tabpane
        :title="item.title"
        v-for="(item, index) in tabArr"
        :key="index"
        :pane-key="index"
      >
        <view
          v-html="item.content"
          :class="[index != 0 ? 'table-border' : '', 'iframe-box']"
        ></view>
      </nut-tabpane>
    </nut-tabs>
  </view>
</template>
<script>
import { reactive, toRefs, ref, onMounted } from "vue";
import data from "../mock/moreDetail.json";
export default {
  setup() {
    const state = reactive({
      tab1value: "0",
      tabArr: [
        {
          title: "商品介绍",
          content: data.skuBigField.wdis,
        },
        { title: "规格参数", content: data.skuBigField.propCode },
        { title: "售后保障", content: data.skuBigField.wareQD },
      ],
      originData: data,
    });
    return { ...toRefs(state) };
  },
};
</script>
<style lang="scss">
.more_detail {
  background-color: #fff;
  border-radius: 12px;
  margin-top: 12px;
  padding: 12px 0px;
  position: relative;
  .nut-tabpane {
    padding: 0px;
    img {
      max-width: 100%;
    }

    .iframe-box {
      padding: 10px 0px;
      font-size: 12px;
      background-color: #fff;
      min-height: 80vh;
      body {
        background-color: #fff;
      }
    }
    .table-border {
      padding: 10px;
      .Ptable {
        border: solid 1px #e7e7e7;
        color: #868489;
        td,
        th {
          padding: 10px;
          border-top: solid 1px #e7e7e7;
          border-right: solid 1px #e7e7e7;
        }
      }
    }
  }
}
</style>
