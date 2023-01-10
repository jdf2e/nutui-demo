<template>
  <nut-picker
    v-model="selectedCascader"
    :columns="cascaderColumns"
    title="城市选择"
    @confirm="confirm"
  ></nut-picker>
</template>
<script lang="ts">
import { ref } from "vue";
import Taro from "@tarojs/taro";
export default {
  setup(props) {
    const selectedCascader = ref(["FuJian", "FuZhou", "TaiJiang"]);
    const cascaderColumns = ref([
      {
        text: "浙江",
        value: "ZheJiang",
        children: [
          {
            text: "杭州",
            value: "HangZhou",
            children: [
              { text: "西湖区", value: "XiHu" },
              { text: "余杭区", value: "YuHang" },
            ],
          },
          {
            text: "温州",
            value: "WenZhou",
            children: [
              { text: "鹿城区", value: "LuCheng" },
              { text: "瓯海区", value: "OuHai" },
            ],
          },
        ],
      },
      {
        text: "福建",
        value: "FuJian",
        children: [
          {
            text: "福州",
            value: "FuZhou",
            children: [
              { text: "鼓楼区", value: "GuLou" },
              { text: "台江区", value: "TaiJiang" },
            ],
          },
          {
            text: "厦门",
            value: "XiaMen",
            children: [
              { text: "思明区", value: "SiMing" },
              { text: "海沧区", value: "HaiCang" },
            ],
          },
        ],
      },
    ]);

    const confirm = ({ selectedValue, selectedOptions }) => {
      Taro.showToast({
        title: selectedOptions.map((val: any) => val.text).join(","),
        icon: "none",
      });
    };

    return { selectedCascader, cascaderColumns, confirm };
  },
};
</script>
