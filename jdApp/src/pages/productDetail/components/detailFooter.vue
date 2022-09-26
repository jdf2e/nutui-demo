<template>
  <view class="detail_footer">
    <view class="icon_wrap">
      <view class="cart">
        <nut-icon name="cart"></nut-icon>
        <view>购物车</view>
      </view>
      <view class="service">
        <nut-icon name="dongdong"></nut-icon>
        <view>联系客服</view>
      </view>
    </view>
    <view class="btn_wrap">
      <nut-button type="primary">加入购物车</nut-button>
      <nut-button type="warning">立即购买</nut-button>
    </view>
  </view>
</template>
<script>
export default {};
</script>
<style lang="scss">
.detail_footer {
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  height: 60px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 20;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 0 20px;
  box-sizing: border-box;
  .icon_wrap{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .cart{
    margin-right: 15px;
  }
  .cart,.service{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
  .btn_wrap{
    .nut-button:first-child{
      margin-right: 10px;
    }
  }
}
</style>
