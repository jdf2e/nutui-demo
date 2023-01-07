<script lang="ts" setup>
import {
  SwipeCell as VanSwipeCell,
  Cell as VanCell,
  Button as VanButton,
} from "vant";
import "vant/lib/index.css";
</script>
<template>
  <van-swipe-cell>
    <template #left>
      <van-button square type="primary" text="选择" />
    </template>
    <van-cell :border="false" title="单元格" value="内容" />
    <template #right>
      <van-button square type="danger" text="删除" />
      <van-button square type="primary" text="收藏" />
    </template>
  </van-swipe-cell>
  <nut-swipe>
    <nut-cell round-radius="0" desc="左滑删除" />
    <template #right>
      <nut-button shape="square" style="height: 100%" type="danger"
        >删除</nut-button
      >
    </template>
  </nut-swipe>
</template>
