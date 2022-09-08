<template>
    <view class="icons">
      <nut-swiper :pagination-visible="true" pagination-color="#426543">
        <nut-swiper-item>
          <!-- <view v-for="(item, index) in list[0]" :key="index" class="icon">
            <view><img :src="item.img" /></view>
            <view class="name">{{item.name}}</view>
          </view> -->
          <nut-grid>
            <nut-grid-item v-for="(item, index) in list[0]" :key="index" :icon="item.img" :text="item.name"></nut-grid-item>
          </nut-grid>
        </nut-swiper-item>
        <nut-swiper-item>
          <!-- <view v-for="(item, index) in list[1]" :key="index" class="icon">
            <view><img :src="item.img" /></view>
            <view class="name">{{item.name}}</view>
          </view> -->
          <nut-grid>
            <nut-grid-item v-for="(item, index) in list[1]" :key="index" :icon="item.img" :text="item.name"></nut-grid-item>
          </nut-grid>
        </nut-swiper-item>
      </nut-swiper>
    </view>
</template>

<script>
import {reactive,toRefs} from 'vue'

export default {
  name: 'Icons',
  setup(){
    const state = reactive({
      list: [
      [
        {
          img: require('../../../asset/images/icons/icon1.png'),
          name: '京东超市'
        },
        {
          img: require('../../../asset/images/icons/icon2.png'),
          name: '数码电器'
        },
        {
          img: require('../../../asset/images/icons/icon3.png'),
          name: '京东新百货'
        },
        {
          img: require('../../../asset/images/icons/icon4.png'),
          name: '京东生鲜'
        },
        {
          img: require('../../../asset/images/icons/icon5.png'),
          name: '京东到家'
        },
        {
          img: require('../../../asset/images/icons/icon6.png'),
          name: '充值缴费'
        },
        {
          img: require('../../../asset/images/icons/icon7.png'),
          name: '附近好店'
        },
        {
          img: require('../../../asset/images/icons/icon8.png'),
          name: '领券'
        },
        {
          img: require('../../../asset/images/icons/icon9.png'),
          name: '领金贴'
        },
        {
          img: require('../../../asset/images/icons/icon10.png'),
          name: 'PLUS会员'
        }
      ],
      [
        {
          img: require('../../../asset/images/icons/icon11.png'),
          name: '京东国际'
        },
        {
          img: require('../../../asset/images/icons/icon12.png'),
          name: '京东拍卖'
        },
        {
          img: require('../../../asset/images/icons/icon13.png'),
          name: '玩3C'
        },
        {
          img: require('../../../asset/images/icons/icon14.png'),
          name: '沃尔玛'
        },
        {
          img: require('../../../asset/images/icons/icon15.png'),
          name: '美妆馆'
        },
        {
          img: require('../../../asset/images/icons/icon16.png'),
          name: '京东旅行'
        },
        {
          img: require('../../../asset/images/icons/icon17.png'),
          name: '拍拍二手'
        },
        {
          img: require('../../../asset/images/icons/icon18.png'),
          name: '潮燃青年'
        }
      ]
      ]
    });

    return {
      ...toRefs(state)
    }
  }
}
</script>
