<template>
  <view class="detail-products">
    <view class="detail-product">
      <view class="detail-product-image">
        <img :src="info.img"  mode="widthFix" />
      </view>
      <view class="detail-product-name">{{ info.name }}</view>
      <nut-price
        :price="info.price"
        :need-symbol="true"
        size="normal"
        :thousands="false"
      />
    </view>
  </view>
</template>

<script>
import { reactive, toRefs } from "vue";
import data from "../mock/product.json";
export default {
  name: "product",
  props: {
    info: {},
  },
  setup() {
    const state = reactive({
      mainProducts: data.mainProducts,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
<style lang="scss">
// 商品区域
.detail-products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .detail-product {
    margin-bottom: 15px;
    &-image {
      width: 100%;
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 8px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    &-name {
      color: #333;
      font-size: 12px;
      font-weight: 400;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .comment-points {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .comment {
        color: #999;
        font-size: 12px;
      }

      .points {
        display: flex;
      }

      .point {
        width: 3px;
        height: 3px;
        background-color: #999;
        border-radius: 50%;
        margin-right: 3px;
      }
    }
  }
}
</style>
