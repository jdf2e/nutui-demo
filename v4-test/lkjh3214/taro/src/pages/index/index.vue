<template>
  <nut-input
    v-model="state.event"
    clearable
    placeholder="事件演示"
    @clear="clear"
    @click-input="clickInput"
  />
  <nut-toast :msg="state.msg" v-model:visible="state.show" type="text" />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  import { Toast } from '@nutui/nutui-taro';
  export default {
    components: {
      Toast
    },
    setup() {
      const state = reactive({
        event: '',
        show:false,
        msg:''
      });
      const clear = (value: string | number, event: Event) => {
        console.log('clear:', value, event);
        showToast('clear')
      };
      const showToast = (msg: string) => {
        state.show = true;
        state.msg = msg;
      };
      const clickInput = (value: string | number) => {
        console.log('clickInput:', value);
        showToast('clickInput')

      };
      return {
        state,
        clear,
        clickInput,
      };
    }
  }
</script>