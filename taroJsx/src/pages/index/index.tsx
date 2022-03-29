import { defineComponent, ref } from "vue";
import { View } from "@tarojs/components";
import { Cell, Picker, Popup, Button } from "@nutui/nutui-taro";

export default defineComponent({
   name: "Index",
   components: {  Cell, Picker, Popup, Button },
   setup() {
    let show = ref(true);
    let desc = ref('111');
    let columns = ref([
      { text: '南京市', value: 'NanJing' },
      { text: '无锡市', value: 'WuXi' },
      { text: '海北藏族自治区', value: 'ZangZu' },
      { text: '北京市', value: 'BeiJing' },
      { text: '连云港市', value: 'LianYunGang' },
      { text: '浙江市', value: 'ZheJiang' },
      { text: '江苏市', value: 'JiangSu' }
    ]);

    const open = ()=>{
      console.log('打开')
    }
     return () => (
       <View>
         <nut-cell title="请选择城市" desc={desc} onClick={open}></nut-cell>

         <nut-picker
            v-model:visible={show}
            columns={columns}
            title="城市选择"
          >
          </nut-picker>

       </View>
      
     );
   },
});