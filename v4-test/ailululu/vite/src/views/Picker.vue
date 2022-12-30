<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-12-27 15:14:11
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-29 15:43:46
-->
<script setup lang="ts">
import { ref, reactive, onMounted, getCurrentInstance } from "vue";
import {
  Voice,
  PlayDoubleBack,
  PlayDoubleForward,
  PlayStart,
  PlayStop,
} from "@nutui/icons-vue";
defineProps<{
  msg: string;
}>();
onMounted(() => {});
let { proxy } = getCurrentInstance() as any;
const columns = ref([
  { text: "南京市", value: "NanJing" },
  { text: "无锡市", value: "WuXi" },
  { text: "海北藏族自治区", value: "ZangZu" },
  { text: "北京市", value: "BeiJing" },
  { text: "连云港市", value: "LianYunGang" },
  { text: "浙江市", value: "ZheJiang" },
  { text: "江苏市", value: "JiangSu" },
]);

const confirm = ({ selectedValue, selectedOptions }) => {
  proxy.$toast.text(selectedOptions.map((val: any) => val.text).join(","));
};

const show = ref(false);
const popupDesc = ref();

const popupConfirm = ({ selectedValue, selectedOptions }) => {
  console.log("selectedValue", selectedValue);
  console.log("selectedOptions", selectedOptions);
  popupDesc.value = selectedOptions.map((val: any) => val.text).join(",");
  show.value = false;
};
const change = ({ selectedValue, selectedOptions }) => {
  console.log(selectedValue);
};
</script>
<template>
  <div class="demo-box">
    <div class="demo">
      <nut-picker
        :columns="columns"
        title="城市选择"
        @confirm="confirm"
        @change="change"
      >
        <div>default</div>
        <template #top> top </template>
      </nut-picker>
    </div>
    <div class="demo">
      <nut-cell
        title="请选择城市"
        :desc="popupDesc"
        @click="show = true"
      ></nut-cell>
      <nut-popup position="bottom" v-model:visible="show">
        <nut-picker
          :columns="columns"
          title="请选择城市"
          @confirm="popupConfirm"
          @cancel="show = false"
        >
          <nut-button block type="primary">永远有效</nut-button>
        </nut-picker>
      </nut-popup>
    </div>
    <div class="demo"></div>
    <div class="demo"></div>
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
