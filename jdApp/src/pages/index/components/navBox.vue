<template>
    <view class="nav-box">
      <view class="nav">
        <view 
          class="nav-item" 
          :class="{cur: item === curItem}" 
          v-for="(item, index) in navItems" 
          :key="index"
          @click="handleToggleNavItem(item)"
        >
          {{item}}
          <nut-icon name="joy-smile"></nut-icon>
        </view>
      </view>
      <nut-icon :name="arrowName" @click="handleToggleNav"></nut-icon>
    </view>
</template>

<script>
import {reactive,toRefs} from 'vue'
export default {
  name: 'NavBox',
  setup(){
    const state = reactive({
      curItem: '首页',
      arrowName: 'down-arrow',
      navItems: ['首页','补贴爆品', '手机', '大家电', '美妆', '女鞋', '宠物', '爱车', '箱包皮具', '男鞋', '钟表', '女装', 
    '房产', '拍拍二手', '奢侈品', '图书', '童装', '珠宝首饰', '装修定制', '工业品', '玩具乐器', '个护清洁']
    });
    const handleToggleNavItem = item => {
      state.curItem = item;
    }
    const handleToggleNav = () => {
      if(state.arrowName === 'arrow-up') {
        state.arrowName = 'down-arrow'
      } else {
        state.arrowName = 'arrow-up'
      }
    }
    return {
      ...toRefs(state),
      handleToggleNavItem,
      handleToggleNav
    }
  }
}
</script>