<template>
    <view class="main-products">
      <view v-for="(mainProduct, index) in mainProducts" :key="index" class="main-product">
        <view class="main-product-image"><img :src="mainProduct.img" /></view>
        <view class="main-product-name">{{mainProduct.name}}</view>
        <nut-price :price="10010.01" :need-symbol="true" size="normal" :thousands="false" />
        <view class="comment-points">
          <view class="comment">{{mainProduct.comments}}条评论</view>
          <view class="points">
            <view class="point"></view>
            <view class="point"></view>
            <view class="point"></view>
          </view>
        </view>
      </view>
    </view>
</template>

<script>
import {reactive,toRefs} from 'vue'

export default {
  name: 'mainProducts',
  setup(){
    const state = reactive({
      mainProducts: [
        {
          img: require('../../../asset/images/mainProducts/mainProduct1.jpeg'),
          name: '森马 【同款特价】2022夏季新款英伦风高帮马丁靴中帮雪地男鞋工装潮鞋板鞋高帮休闲 K5卡其 39',
          price: '1001.01',
          comments: 1000
        },
        {
          img: require('../../../asset/images/mainProducts/mainProduct1.jpeg'),
          name: '森马 【同款特价】2022夏季新款英伦风高帮马丁靴中帮雪地男鞋工装潮鞋板鞋高帮休闲 K5卡其 39',
          price: '1001.01',
          comments: 2000
        },
        {
          img: require('../../../asset/images/mainProducts/mainProduct1.jpeg'),
          name: '森马 【同款特价】2022夏季新款英伦风高帮马丁靴中帮雪地男鞋工装潮鞋板鞋高帮休闲 K5卡其 39',
          price: '1001.01',
          comments: 3000
        },
        {
          img: require('../../../asset/images/mainProducts/mainProduct1.jpeg'),
          name: '森马 【同款特价】2022夏季新款英伦风高帮马丁靴中帮雪地男鞋工装潮鞋板鞋高帮休闲 K5卡其 39',
          price: '1001.01',
          comments: 4000
        },
        {
          img: require('../../../asset/images/mainProducts/mainProduct1.jpeg'),
          name: '森马 【同款特价】2022夏季新款英伦风高帮马丁靴中帮雪地男鞋工装潮鞋板鞋高帮休闲 K5卡其 39',
          price: '1001.01',
          comments: 5000
        },
      ]
    });

    return {
      ...toRefs(state),
    }
  }
}
</script>
