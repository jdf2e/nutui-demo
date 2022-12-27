<template>
  <nut-drag>
    <nut-button type="primary">触摸移动</nut-button>
  </nut-drag>
  <nut-drag direction="x" :style="{ top: '200px', left: '8px' }">
    <nut-button type="primary">只能X轴拖拽</nut-button>
  </nut-drag>
  <nut-drag direction="y" :style="{ top: '200px', right: '50px' }">
    <nut-button type="primary">只能Y轴拖拽</nut-button>
  </nut-drag>
  <nut-drag direction="x" :attract="true">
    <nut-button type="primary">拖动我</nut-button>
  </nut-drag>
  <div class="drag-boundary"></div>
  <nut-drag
    :boundary="{ top: 100, left: 9, bottom: bottom(), right: right() }"
    :style="{ top: '100px', left: '50px' }"
  >
    <nut-button type="primary">限制拖拽边界</nut-button>
  </nut-drag>
</template>
<script lang="ts">
export default {
  setup() {
    function right() {
      return document.documentElement.clientWidth - 300 - 9;
    }
    function bottom() {
      return document.documentElement.clientHeight - 300;
    }
    return {
      right,
      bottom,
    };
  },
};
</script>

<style>
.drag-boundary {
  position: absolute;
  top: 100px;
  left: 8px;
  width: 300px;
  height: 200px;
  border: 1px solid red;
}
</style>
