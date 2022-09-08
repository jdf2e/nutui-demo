<template>
  <view class="index">
    <!-- 红色背景 -->
    <view class="slider-bg"></view>

    <!-- 搜索框 -->
    <searchbar-box></searchbar-box>

    <!-- 导航 -->
    <nav-box></nav-box>

    <!-- banner 轮播图 -->
    <banner-box></banner-box>

    <!-- icons 图标 -->
    <icons></icons> 

    <!-- 通知 -->
    <notice></notice> 

    <!-- 秒杀 -->
    <seckill></seckill>

    <!-- 商品 feed 流 -->
    <feed-products></feed-products>

    <!-- 底部 -->
    <my-footer></my-footer>
  </view>
</template>

<script>
import {reactive,toRefs} from 'vue'
import FeedProducts from './components/feedProducts.vue'
import Seckill from './components/seckill.vue'
import Icons from './components/icons.vue'
import Notice from './components/notice.vue'
import SearchbarBox from './components/searchbarBox.vue'
import NavBox from './components/navBox.vue'
import BannerBox from './components/bannerBox.vue'
import MyFooter from '../../components/footer/footer.vue'
import './index.scss'

export default {
  name: 'Index',
  components: {
    'my-footer': MyFooter,
    'feed-products': FeedProducts,
    'seckill': Seckill,
    'icons': Icons,
    'notice': Notice,
    'searchbar-box': SearchbarBox,
    'nav-box': NavBox,
    'banner-box': BannerBox
  },
  setup(){
  }
}
</script>