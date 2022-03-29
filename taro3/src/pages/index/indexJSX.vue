<script>
import { View } from "@tarojs/components";
import { defineComponent, ref } from "vue";
import { Button, Picker, Popup } from "@nutui/nutui-taro";
export default {
  setup() {
    let show = ref(true);
    let desc = ref("11");
    let columns = ref([
      { text: "南京市", value: "NanJing" },
      { text: "无锡市", value: "WuXi" },
      { text: "海北藏族自治区", value: "ZangZu" },
      { text: "北京市", value: "BeiJing" },
      { text: "连云港市", value: "LianYunGang" },
      { text: "浙江市", value: "ZheJiang" },
      { text: "江苏市", value: "JiangSu" },
    ]);

    return () => (
      <View>
        <nut-cell
          title="请选择城市"
          desc={desc}
          click={() => {
            show = true;
          }}
        ></nut-cell>{" "}
        <nut-picker
          v-model:visible={show}
          columns={columns}
          title="城市选择"
        ></nut-picker>
      </View>
    );
  },
};
</script>