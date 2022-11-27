<template>
  <div class="goods_sku">
    <div class="selected_info" @click="showSku">
      <span>已选</span>
      <p>雪域白 8+256 【标准版】-4G全网通 1件</p>
      <nut-icon name="more-x"></nut-icon>
    </div>
    <nut-sku
      v-model:visible="flag"
      :sku="sku"
      :goods="goods"
      @selectSku="selectSku"
      @clickBtnOperate="clickBtnOperate"
    ></nut-sku>
  </div>
</template>

<script>
import { reactive, refs, toRefs, onMounted } from "vue";
import data from "../mock/sku.json";

export default {
  name: "GoodsSku",
  setup() {
    const state = reactive({
      flag: false,
      sku: [],
      goods: {},
    });
    const showSku = () => {
      state.flag = true;
    };
    onMounted(() => {
      const { Sku, Goods, imagePathMap } = data;
      state.sku = Sku;
      state.goods = Goods;
    });
    // 切换规格类目
    const selectSku = (ss) => {
      const { sku, skuIndex, parentSku, parentIndex } = ss;
      if (sku.disable) return false;
      state.sku[parentIndex].list.forEach((s) => {
        s.active = s.id == sku.id;
      });
      state.goods = {
        skuId: sku.id,
        price: "4599.00",
        imagePath:
          "//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg",
      };
    };
    // 底部操作按钮触发
    const clickBtnOperate = (op) => {
      console.log("点击了操作按钮", op);
      state.flag = false;
    };
    return { ...toRefs(state), selectSku, clickBtnOperate, showSku };
  },
};
</script>
<style lang="scss">
.goods_sku {
  background-color: #fff;
  border-radius: 12px;
  margin-top: 12px;

  .selected_info {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 18px;
    font-size: 13px;
    color: #333;
    span {
      width: 38px;
      font-weight: 700;
      flex-shrink: 0;
    }
    p {
      flex: 1;
    }
  }
}
</style>
