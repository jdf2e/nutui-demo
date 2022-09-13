<template>
  <nut-backtop :bottom="80">
    <template v-slot:content>
      <view class="index">
        <!-- 红色背景 -->
        <view class="slider-bg"></view>

        <!-- 搜索框 -->
        <search-bar-box></search-bar-box>

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

        <!-- 主商品区域 -->
        <main-products></main-products>
      </view>
    </template>
  </nut-backtop>

  <!-- 底部 -->
  <my-footer></my-footer>
</template>

<script>
import {reactive,toRefs} from 'vue'
import MainProducts from './components/mainProducts.vue'
import Seckill from './components/seckill.vue'
import Icons from './components/icons.vue'
import Notice from './components/notice.vue'
import SearchBarBox from './components/searchBarBox.vue'
import NavBox from './components/navBox.vue'
import BannerBox from './components/bannerBox.vue'
import MyFooter from '../../components/footer/footer.vue'
import './index.scss'
export default {
  name: 'Index',
  components: {
    'my-footer': MyFooter,
    'main-products': MainProducts,
    'seckill': Seckill,
    'icons': Icons,
    'notice': Notice,
    'search-bar-box': SearchBarBox,
    'nav-box': NavBox,
    'banner-box': BannerBox
  },
  setup(){
  }
}
</script>