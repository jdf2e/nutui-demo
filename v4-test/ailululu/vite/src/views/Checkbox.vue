<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-12-30 09:53:11
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-07 16:56:35
-->
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { Checklist } from "@nutui/icons-vue";
const state = reactive({
  checkbox1: false,
  checkbox2: false,
  checkbox5: true,
  checkbox6: true,
  checkbox9: true,
});
</script>
<template>
  <div class="demo-box">
    <nut-cell-group title="基本用法-左右">
      <nut-cell>
        <nut-checkbox v-model="state.checkbox1" label="复选框"
          >复选框</nut-checkbox
        >
      </nut-cell>
      <nut-cell>
        <nut-checkbox v-model="state.checkbox2" text-position="left"
          >复选框</nut-checkbox
        >
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="半选状态">
      <nut-cell>
        <nut-checkbox
          v-model="state.checkbox9"
          :indeterminate="true"
          label="复选框"
          >复选框</nut-checkbox
        >
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="自定义尺寸">
      <nut-cell>
        <nut-checkbox v-model="state.checkbox5" icon-size="25"
          >自定义尺寸25</nut-checkbox
        >
        <nut-checkbox v-model="state.checkbox6" icon-size="10"
          >自定义尺寸10</nut-checkbox
        >
      </nut-cell>
    </nut-cell-group>
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
