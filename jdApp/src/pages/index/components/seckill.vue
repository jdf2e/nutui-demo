<template>
    <view class="seckill">
      <view class="seckill-top">
        <view class="seckill-title-countdown">
          <view class="seckill-title">京东秒杀</view>
          <view class="seckill-countdown">
            <view class="seckill-countdown-type">12点场</view>
            <nut-countdown :end-time="end" ></nut-countdown>
          </view>
        </view>
        <view class="seckill-arrow-box">爆款轮番秒 <nut-icon name="arrow-right" size="11"></nut-icon></view>
      </view>
      <view class="seckill-bottom">
        <view v-for="(product, index) in seckillProducts" :key="index" class="seckill-product">
          <view><img :src="product.img" /></view>
          <view class="seckill-product-price">¥{{product.price}}</view>
        </view>
      </view>
    </view>
</template>

<script>
import {reactive,toRefs} from 'vue'

export default {
  name: 'Seckill',
  setup(){
    const state = reactive({
      end: Date.now() + 60 * 1000,
      seckillProducts: [
        {
          img: require('../../../asset/images/seckillProducts/product1.jpeg'),
          price: 11.99
        },
        {
          img: require('../../../asset/images/seckillProducts/product2.jpeg'),
          price: 2289
        },
        {
          img: require('../../../asset/images/seckillProducts/product3.jpeg'),
          price: 109
        },
        {
          img: require('../../../asset/images/seckillProducts/product4.jpeg'),
          price: 600
        },
        {
          img: require('../../../asset/images/seckillProducts/product5.jpeg'),
          price: 48.8
        },
        {
          img: require('../../../asset/images/seckillProducts/product6.jpeg'),
          price: 199
        },
        {
          img: require('../../../asset/images/seckillProducts/product7.jpeg'),
          price: 378
        },
        {
          img: require('../../../asset/images/seckillProducts/product8.jpeg'),
          price: 199
        },
        {
          img: require('../../../asset/images/seckillProducts/product9.jpeg'),
          price: 133
        },
        {
          img: require('../../../asset/images/seckillProducts/product10.jpeg'),
          price: 2369
        },
      ]
    });

    return {
      ...toRefs(state)
    }
  }
}
</script>
