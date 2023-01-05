<template>
  <main :style="{ paddingTop: '50px' }">
    <nut-cell>
      <nut-button type="primary">主要按钮</nut-button>
      <nut-button type="info">信息按钮</nut-button>
      <nut-button type="default">默认按钮</nut-button>
      <nut-button type="danger">危险按钮</nut-button>
      <nut-button type="warning">警告按钮</nut-button>
      <nut-button type="success">成功按钮</nut-button>
    </nut-cell>
    <nut-cell>
      <nut-button plain type="primary">朴素按钮</nut-button>
      <nut-button plain type="info">朴素按钮</nut-button>
    </nut-cell>
    <nut-cell>
      <nut-button disabled type="primary">禁用状态</nut-button>
      <nut-button plain disabled type="info">禁用状态</nut-button>
      <nut-button plain disabled type="primary">禁用状态</nut-button>
    </nut-cell>
    <nut-cell>
      <nut-button shape="square" type="primary">方形按钮</nut-button>
      <nut-button type="info">圆形按钮</nut-button>
    </nut-cell>
    <nut-cell>
      <nut-button loading type="info"></nut-button>
      <nut-button loading type="warning">加载中...</nut-button>
      <nut-button :loading="isLoading" type="success" @click="changeLoading">
        Click me!
      </nut-button>
    </nut-cell>
    <nut-cell>
      <nut-button shape="square" plain type="primary">
        <template #icon>
          <StarFill></StarFill>
        </template>
      </nut-button>
      <nut-button shape="square" type="primary">
        <template #icon>
          <Star />
        </template>
        收藏
      </nut-button>
    </nut-cell>
    <nut-cell>
      <nut-button size="large" type="primary">大号按钮</nut-button>
      <nut-button type="primary">普通按钮</nut-button>
      <nut-button size="small" type="primary">小型按钮</nut-button>
      <nut-button size="mini" type="primary">迷你按钮</nut-button>
    </nut-cell>
    <nut-cell title="">
      <nut-button block type="primary">块级元素</nut-button>
    </nut-cell>
    <nut-cell title="">
      <nut-button color="#7232dd">单色按钮</nut-button>
      <nut-button color="#7232dd" plain>单色按钮</nut-button>
      <nut-button color="linear-gradient(to right, #ff6034, #ee0a24)">
        渐变色按钮
      </nut-button>
    </nut-cell>
    <div>
      <Add color="red"></Add>
      <StarFill></StarFill>
      <IconFont name="dongdong"></IconFont>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { StarFill, Star, Loading, Add, IconFont } from "@nutui/icons-vue";
const isLoading = ref(false);
const changeLoading = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
};
</script>
