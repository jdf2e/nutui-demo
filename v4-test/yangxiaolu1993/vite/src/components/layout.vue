<template>
  <nut-row>
    <nut-col :span="24">
      <div class="flex-content">span:24</div>
    </nut-col>
  </nut-row>
  <nut-row>
    <nut-col :span="12">
      <div class="flex-content">span:12</div>
    </nut-col>
    <nut-col :span="12">
      <div class="flex-content flex-content-light">span:12</div>
    </nut-col>
  </nut-row>
  <nut-row>
    <nut-col :span="8">
      <div class="flex-content">span:8</div>
    </nut-col>
    <nut-col :span="8">
      <div class="flex-content flex-content-light">span:8</div>
    </nut-col>
    <nut-col :span="8">
      <div class="flex-content">span:8</div>
    </nut-col>
  </nut-row>
  <nut-row>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
</template>
<style lang="scss" scoped>
.nut-row {
  overflow: hidden;
  &:not(:last-child) .nut-col {
    margin-bottom: 15px;
  }
  margin-bottom: 15px;
}
.flex-content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #ff8881;
  &.flex-content-light {
    background: #ffc7c4;
  }
  &.flex-content-height {
    height: 50px;
  }
}
</style>