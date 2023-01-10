<template>
  <nut-cell title="点击查看更多方向" @click="handlePicker"></nut-cell>
  <nut-popup position="bottom" v-model:visible="showPicker">
      <nut-picker
        :columns="columns"
        title=""
        @change="change"
        :swipe-duration="500"
        @confirm="closePicker"
        @close="closePicker"
      >
        <template #top>
          <div class="brickBox">
            <div class="brick" id="pickerTarget"></div>
          </div>
        </template>
      </nut-picker>
    </nut-popup>

    <nut-popover
      v-model:visible="customPositon"
      targetId="pickerTarget"
      :location="curPostion"
      theme="dark"
      :list="positionList"
    >
    </nut-popover>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';
export default {
  setup() {
    const showPicker = ref(false);
    const customPositon = ref(false);
    const curPostion = ref('top');
    const positionList = reactive([
      {
        name: 'option1'
      },
      {
        name: 'option2'
      }
    ]);
    const closePicker = () => {
      customPositon.value = false;
      showPicker.value = false;
    };

    const change = ({ selectedValue }) => {
      curPostion.value = selectedValue[0];
      if (showPicker.value) customPositon.value = true;
    };

    const handlePicker = () => {
      showPicker.value= true;
      setTimeout(() => {
        customPositon.value = true;
      }, 1000);
    };

     const columns = ref([
      { text: 'top', value: 'top' },
      { text: 'top-start', value: 'top-start' },
      { text: 'top-end', value: 'top-end' },
      { text: 'right', value: 'right' },
      { text: 'right-start', value: 'right-start' },
      { text: 'right-end', value: 'right-end' },
      { text: 'bottom', value: 'bottom' },
      { text: 'bottom-start', value: 'bottom-start' },
      { text: 'bottom-end', value: 'bottom-end' },
      { text: 'left', value: 'left' },
      { text: 'left-start', value: 'left-start' },
      { text: 'left-end', value: 'left-end' }
    ]);

      return {
        positionList,
        showPicker,
        customPositon,
        curPostion,
        closePicker,
        change,
        handlePicker,
        columns
      };
    }
};
</script>

<style lang="scss">

.nut-popover-content {
    width: 120px;
}

.brickBox {
  margin: 80px 0;
  display: flex;
  justify-content: center;
  .brick {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #fa2c19 0%, #fa6419 100%);
    border-radius: 10px;
  }
}
</style>
