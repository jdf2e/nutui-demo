<script lang="ts" setup>
import { reactive, ref } from "vue";
const show = ref(true);
const close = () => {
  show.value = false;
};
</script>
<template>
  <nut-cell-group title="基础用法">
    <nut-cell title="primary 类型">
      <template v-slot:link>
        <nut-tag type="primary">标签</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="success 类型">
      <template v-slot:link>
        <nut-tag type="success">标签</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="danger 类型">
      <template v-slot:link>
        <nut-tag type="danger">标签</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="warning 类型">
      <template v-slot:link>
        <nut-tag type="warning">标签</nut-tag>
      </template>
    </nut-cell>
  </nut-cell-group>
  <nut-cell-group title="样式风格">
    <nut-cell title="空心样式">
      <template v-slot:link>
        <nut-tag plain>标签</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="圆角样式">
      <template v-slot:link>
        <nut-tag round type="primary">标签</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="标记样式">
      <template v-slot:link>
        <nut-tag mark type="primary">标签</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="可关闭标签">
      <template v-slot:link>
        <nut-tag v-if="show" closeable @close="close" type="primary"
          >标签</nut-tag
        >
      </template>
    </nut-cell>
  </nut-cell-group>
  <nut-cell-group title="颜色自定义">
    <nut-cell title="背景颜色">
      <template v-slot:link>
        <nut-tag color="#FA685D">标签</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="文字颜色">
      <template v-slot:link>
        <nut-tag color="#E9E9E9" textColor="#999999">标签</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="空心颜色">
      <template v-slot:link>
        <nut-tag color="#FA2400" plain>标签</nut-tag>
      </template>
    </nut-cell>
  </nut-cell-group>
</template>
<style lang="scss">
:root {
  --nut-tag-font-size: 12px;
  --nut-tag-default-border-radius: 4px;
  --nut-tag-round-border-radius: 8px;
  --nut-tag-default-background-color: #ec2f2f;
  --nut-tag-primary-background-color: #8392c9;
  --nut-tag-success-background-color: #161b19;
  --nut-tag-danger-background-color: linear-gradient(
    135deg,
    rgba(242, 20, 12, 1) 0%,
    rgba(232, 34, 14, 1) 70%,
    rgba(242, 77, 12, 1) 100%
  );
  --nut-tag-danger-background-color-plain: #df3526;
  --nut-tag-warning-background-color: #f3812e;
  --nut-tag-default-color: #ffffff;
  --nut-tag-border-width: 1px;
  --nut-tag-plain-background-color: #fff;
  --nut-tag-height: auto;
}
</style>
