<template>
  <nut-picker
    :columns="columns"
    title="城市选择"
    @confirm="confirm"
  ></nut-picker>
</template>
<script lang="ts">
import { ref } from "vue";
import { showToast } from "@nutui/nutui";
import "@nutui/nutui/dist/packages/toast/style";
export default {
  setup(props) {
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
      showToast.text(selectedOptions.map((val: any) => val.text).join(","));
    };

    return { columns, confirm };
  },
};
</script>
