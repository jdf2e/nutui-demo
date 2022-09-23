<template>
  <view id="recommendList" class="anchor"></view>
  <view class="recommend_list">
    <view class="cart_title">
      猜你喜欢
    </view>
    <nut-swiper
      pagination-color="#f2270c"
      :pagination-visible="true"
      height="450"
    >
      <nut-swiper-item v-for="swiperItem in list">
        <view class="goods_wrap">
          <view v-for="goodsItem in swiperItem" class="goods_item">
            <product :info="goodsItem"></product>
          </view>
        </view>
      </nut-swiper-item>
    </nut-swiper>
  </view>
</template>
<script>
import { reactive, toRefs } from "vue";
import data from "../mock/product.json";
import product from "./product.vue";
export default {
  components: {
    product: product,
  },
  setup() {
    const state = reactive({
      list: data.mainProducts,
    });
    return { ...toRefs(state) };
  },
};
</script>
<style lang="scss">
.recommend_list {
  background-color: #fff;
  border-radius: 12px;
  margin-top: 12px;
  padding: 12px 18px;
  position: relative;
  .cart_title {
    margin-bottom: 12px;
  }
  .goods_wrap {
    display: flex;
    flex-flow: wrap;
    width: 100%;
    .goods_item {
      width: 106px;
      margin-right: 9px;
    }
  }
}
</style>
