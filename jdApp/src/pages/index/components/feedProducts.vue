<template>
    <view class="feed-products">
      <view v-for="(feedProduct, index) in feedProducts" :key="index" class="feed-product">
        <view class="feed-product-image"><img :src="feedProduct.img" /></view>
        <view class="feed-product-name">{{feedProduct.name}}</view>
        <!-- <view class="nut-price">
          <view class="nut-price--symbol nut-price--symbol-normal">¥</view>
          <view class="nut-price--normal">{{feedProduct.price.split('.')[0]}}</view>
          <view class="nut-price--decimal-normal">.</view>
          <view class="nut-price--decimal-normal">{{feedProduct.price.split('.')[1]}}</view>
        </view> -->
        <nut-price :price="10010.01" :need-symbol="true" size="normal" :thousands="false" />
        <view class="comment-points">
          <view class="comment">{{feedProduct.comments}}条评论</view>
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
  name: 'FeedProducts',
  setup(){
    const state = reactive({
      feedProducts: [
        {
          img: require('../../../asset/images/feedProducts/feedProduct1.jpeg'),
          name: '森马 【同款特价】2022夏季新款英伦风高帮马丁靴中帮雪地男鞋工装潮鞋板鞋高帮休闲 K5卡其 39',
          price: '1001.01',
          comments: 1000
        },
        {
          img: require('../../../asset/images/feedProducts/feedProduct1.jpeg'),
          name: '森马 【同款特价】2022夏季新款英伦风高帮马丁靴中帮雪地男鞋工装潮鞋板鞋高帮休闲 K5卡其 39',
          price: '1001.01',
          comments: 2000
        },
        {
          img: require('../../../asset/images/feedProducts/feedProduct1.jpeg'),
          name: '森马 【同款特价】2022夏季新款英伦风高帮马丁靴中帮雪地男鞋工装潮鞋板鞋高帮休闲 K5卡其 39',
          price: '1001.01',
          comments: 3000
        },
        {
          img: require('../../../asset/images/feedProducts/feedProduct1.jpeg'),
          name: '森马 【同款特价】2022夏季新款英伦风高帮马丁靴中帮雪地男鞋工装潮鞋板鞋高帮休闲 K5卡其 39',
          price: '1001.01',
          comments: 4000
        },
        {
          img: require('../../../asset/images/feedProducts/feedProduct1.jpeg'),
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
