<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2023-01-05 19:49:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-05 19:51:48
-->
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

defineProps<{}>();
const data = reactive({
  isVisible: false,
  val: "",
});
const menuItems = [
  {
    name: "选项一",
  },
  {
    name: "选项二",
  },
  {
    name: "选项三",
  },
];
const switchActionSheet = (param) => {
  data.isVisible = !data.isVisible;
};
const chooseItem = (itemParams) => {
  data.val = itemParams.name;
};

const changeProgress = (val) => {
  console.log("改变进度条", val);
};
const mute = (val) => {
  console.log("静音", val);
};
</script>
<template>
  <div class="demo-box">
    <div>
      <nut-cell
        :show-icon="true"
        :isLink="true"
        @click="switchActionSheet('isVisible')"
      >
        <span><label>基础用法</label></span>
        <div v-html="data.val"></div>
      </nut-cell>
      <!-- demo 基础用法 -->
      <nut-action-sheet
        v-model:visible="data.isVisible"
        :menu-items="menuItems"
        @choose="chooseItem"
      >
      </nut-action-sheet>
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
