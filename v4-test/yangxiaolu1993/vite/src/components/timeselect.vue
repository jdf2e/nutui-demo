<template>
  <nut-cell @click="handleClick2">
    <span><label>请选择配送时间</label></span>
  </nut-cell>
  <nut-time-select v-model:visible="visible2" height="50%" :current-key="currentKey2" :current-time="currentTime2" @select="handleSelected2">
    <template #title>
      <div class="timeselect-title">
        <p class="title">我是标题</p>
        <p class="subtitle">我是副标题</p>
      </div>
    </template>
    <template #pannel>
      <nut-time-pannel name="2月23日(今天)" pannel-key="0" @change="handleChange2"></nut-time-pannel>
      <nut-time-pannel name="2月24日(星期三)" pannel-key="1" @change="handleChange2"></nut-time-pannel>
    </template>
    <template #detail>
      <nut-time-detail :times="times2" @select="selectTime2"></nut-time-detail>
    </template>
  </nut-time-select>
</template>
<script lang="ts">
  import { reactive, toRefs, onMounted } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style'; 
  export default {
    props: {},
    setup() {
      const state = reactive({
        visible2: false,
        currentKey2: 0,
        currentTime2: [] as any[],
        times2: [
          {
            key: 0,
            list: ['9:00-10:00', '10:00-11:00', '11:00-12:00']
          },
          {
            key: 1,
            list: ['9:00-10:00', '10:00-11:00']
          },
        ]
      });

      const handleChange2 = (pannelKey: number) => {
        state.currentKey2 = pannelKey;
        let curTime = state.currentTime2.find((item: any) => item.key == pannelKey);
        if(!curTime) {
          state.currentTime2.push({
            key: pannelKey,
            list: []
          });
        }
      };

      const handleClick2 = () => {
        state.visible2 = true;
      };

      const selectTime2 = (item: string) => {
        let findIndex = state.currentTime2.findIndex((item: any) => item.key == state.currentKey2);
        let curTimeIndex = state.currentTime2[findIndex]['list'].findIndex((time: string) => time === item);
        if(curTimeIndex === -1) {
          state.currentTime2[findIndex]['list'].push(item);
        } else {
          state.currentTime2[findIndex]['list'].splice(curTimeIndex, 1);
        }
      };

      const handleSelected2 = (obj: any) => {
        console.log(`您选择了：${JSON.stringify(obj)}`);
      };

      onMounted(() => {
        state.currentTime2.push({
          key: state.currentKey2,
          list: []
        });
      });

      return { 
        ...toRefs(state), 
        handleChange2,
        handleSelected2,
        selectTime2,
        handleClick2, 
      };
    }
  };
</script>
<style lang="scss" scoped>
.timeselect-title {
  height: 50px;
  p {
    line-height: 1;
    padding: 0;
    margin: 0;
    &.title {
      margin: 10px 0;
      font-size: 16px;
      font-weight: bold;
    }
    &.subtitle {
      color: #999;
    }
  }
}
</style>

