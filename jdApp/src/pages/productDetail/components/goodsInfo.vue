<template>
  <view class="goods_info" >
    <view id="goodsInfo" ></view>
    <nut-swiper
      pagination-color="#426543"
      auto-play="0"
      :loop="true"
      @change="change"
      height="375"
    >
      <nut-swiper-item v-for="(banner, index) in banners" :key="index">
        <img class="item_img" :src="imgUrlHeader + banner" alt="" />
      </nut-swiper-item>
      <template v-slot:page>
        <div class="page">{{ current }}/{{ banners.length }}</div>
      </template>
    </nut-swiper>
    <view class="price_wrap">
      <nut-price
        :price="10010.01"
        :need-symbol="true"
        size="large"
        :thousands="false"
      />
      <view class="opt_wrap">
        <view class="btn">
          <nut-icon name="s-follow"></nut-icon>
          <view>收藏</view>
        </view>
        <view class="btn">
          <nut-icon name="share"></nut-icon>
          <view>分享</view>
        </view>
      </view>
    </view>
    <view class="text_container">
      <view class="goods_name">
        华为/HUAWEI P50 Pro 原色双影像单元 万象双环设计 基于鸿蒙操作系统
        支持66W快充 8GB+256GB雪域白华为手机
      </view>
      <view class="goods_attr"> <p>商品编号：100030561172</p></view>
    </view>
  </view>
</template>
<script>
import { reactive, toRefs } from "vue";

export default {
  name: "GoodsInfo",
  setup() {
    const state = reactive({
      imgUrlHeader: "https://img14.360buyimg.com/imagetools/s750x750_",
      banners: [
        "jfs/t1/206758/31/20375/94472/6253d30eE4a8c6628/71720ac9bc6ccb0d.jpg",
        "jfs/t1/122521/21/24398/158888/6253d301E37ff8a4e/995e544c1734bfed.jpg",
        "jfs/t1/151136/20/22073/104590/625d3c50E07cffc17/e72f0431b59da28d.jpg",
        "jfs/t1/205426/36/20757/148058/625d3c50E51fa17ed/dfb3f9c22984f568.jpg",
        "jfs/t1/97400/32/28216/121021/625d3c50E330600ce/e1b841465f63aedb.jpg",
        "jfs/t1/106085/29/27959/132904/625d3c50Eeeae667a/ba33d1ae8b19ed06.jpg",
        "jfs/t1/155358/33/21706/117843/625d3c50Ec373678d/ebcff7b25ff9dd41.jpg",
      ],
      current: 1,
    });
    const change = (index) => {
      state.current = index + 1;
    };
    return { ...toRefs(state), change };
  },
};
</script>
<style lang="scss">
.goods_info {
  width: 100%;
  background: #fff;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 0 0 0 #ececee;
  .page {
    position: absolute;
    bottom: 20px;
    right: 0;
    width: 46px;
    height: 22px;
    background: rgba(0, 0, 0, 0.33);
    border-radius: 22px 0 0 22px;
    text-align: center;
    color: #fff;
    font-size: 14px;
  }
  .item_img {
    width: 100%;
    height: 100%;
  }
  .price_wrap {
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0px 12px;
    background-image: url(//storage.jd.com/jdcdkh/welfare/5.5.91-43/img/detail-bg.png);
    background-size: 100%;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .nut-price {
      color: #fff;
    }
    .opt_wrap {
      display: flex;
      align-items: center;
      .btn {
        margin: 0 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 12px;
        height: 100%;
        line-height: 12px;
      }
    }
  }
  .text_container {
    padding: 12px 18px 24px 18px;
    .goods_name {
      font-size: 16px;
      word-break: break-all;
    }
    .goods_attr {
      padding-top: 12px;
      p {
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>
