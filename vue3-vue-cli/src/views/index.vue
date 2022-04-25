<template>
  <div>
    <div class="demo">rem 转换</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <nut-pagination v-model="state.currentPage" :total-items="25" :items-per-page="5" />
    <nut-tabs v-model="state.tab1value">
      <nut-tabpane title="Tab 1">
        Tab 1
      </nut-tabpane>
      <nut-tabpane title="Tab 2">
        Tab 2
      </nut-tabpane>
      <nut-tabpane title="Tab 3">
        Tab 3
      </nut-tabpane>
    </nut-tabs>
    <nut-cell title="请选择城市" :desc="desc" @click="()=>{show=true}"></nut-cell>
    <nut-picker
      v-model:visible="show"
      v-model="selectedValue"
      :columns="cascaderColumns"
      title="城市选择"
      @change="change"
      @confirm="confirm"
    >
    </nut-picker>
  </div>
</template>

<script>
import { reactive,ref } from "vue";
export default {
  name: "Index",
  components: {
  },
  setup() {
    const state = reactive({
      tab1value: "0",
      val0: "",
      val1: "初始数据",
      val2: "禁止修改",
      val3: "readonly 只读",
      val4: "",
      val5: "",
      val6: "",
      val7: "",
      val8: "文案",
      currentPage: 1,
    });
    const show = ref(false);
    const desc = ref('');
     const selectedValue = ref(['ZheJiang']);
    const columns = ref([
      { text: '南京市', value: 'NanJing' },
      { text: '无锡市', value: 'WuXi' },
      { text: '海北藏族自治区', value: 'ZangZu' },
      { text: '北京市', value: 'BeiJing' },
      { text: '连云港市', value: 'LianYunGang' },
      { text: '浙江市', value: 'ZheJiang' },
      { text: '江苏市', value: 'JiangSu' }
    ]);
    const multipleColumns = ref([
        // 第一列
        [
          { text: '周一', value: 'Monday' },
          { text: '周二', value: 'Tuesday' },
          { text: '周三', value: 'Wednesday' },
          { text: '周四', value: 'Thursday' },
          { text: '周五', value: 'Friday' }
        ],
        // 第二列
        [
          { text: '上午', value: 'Morning' },
          { text: '下午', value: 'Afternoon' },
          { text: '晚上', value: 'Evening' }
        ]
      ]);
       const cascaderColumns = ref([
        {
          text: '浙江',
          value: 'ZheJiang',
          children: [
            {
              text: '杭州',
              value: 'HangZhou',
              children: [
                { text: '西湖区', value: 'XiHu' },
                { text: '余杭区', value: 'YuHang' }
              ]
            },
            {
              text: '温州',
              value: 'WenZhou',
              children: [
                { text: '鹿城区', value: 'LuCheng' },
                { text: '瓯海区', value: 'OuHai' }
              ]
            }
          ]
        },
        {
          text: '福建',
          value: 'FuJian',
          children: [
            {
              text: '福州',
              value: 'FuZhou',
              children: [
                { text: '鼓楼区', value: 'GuLou' },
                { text: '台江区', value: 'TaiJiang' }
              ]
            },
            {
              text: '厦门',
              value: 'XiaMen',
              children: [
                { text: '思明区', value: 'SiMing' },
                { text: '海沧区', value: 'HaiCang' }
              ]
            }
          ]
        }
      ]);
  
    const confirm = ( { selectedValue,selectedOptions })=>{
      desc.value = selectedValue.join(',');
      console.log(selectedOptions)
    }
    const change = ({ selectedValue }) => {
      console.log(selectedValue);
    };

    setTimeout(function () {
      state.val1 = "异步数据";
    }, 2000);
    // const change = (value, event) => {
    //   console.log("change: ", value, event);
    // };
    const focus = (value, event) => {
      console.log("focus:", value, event);
    };
    const blur = (value, event) => {
      console.log("blur:", value, event);
    };
    const clear = (value) => {
      console.log("clear:", value);
    };

    return {
      state,
      change,
      blur,
      clear,
      focus,
      show,desc,columns,confirm,
      selectedValue,
      multipleColumns,
      cascaderColumns
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.demo{
  width: 50px;
}
</style>
