<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2023-01-05 19:55:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-05 19:56:29
-->
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

defineProps<{}>();
const data = reactive({
  isVisible: false,
  val: "",
});
</script>
<template>
  <div class="demo-box">
    <div>
      <nut-drag>
        <nut-button type="primary">触摸移动</nut-button>
      </nut-drag>
    </div>
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
