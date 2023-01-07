<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2023-01-05 19:55:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-06 11:22:26
-->
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

defineProps<{}>();
const data = reactive({
  showBasic: false,
});
</script>
<template>
  <div class="demo-box">
    <nut-cell
      title="展示弹出层"
      is-link
      @click="data.showBasic = true"
    ></nut-cell>
    <nut-popup
      :style="{ padding: '30px 50px' }"
      v-model:visible="data.showBasic"
      >正文</nut-popup
    >
  </div>
</template>

<style scoped>
.demo {
  margin-bottom: 30px;
}

.nut-voice {
  display: flex;
  justify-content: space-between;
  width: 100px;
  height: 20px;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 18px;
}
</style>
