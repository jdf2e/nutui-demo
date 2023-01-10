<template>
    <nut-noticebar direction='vertical' :list="horseLamp1" :speed='10' :standTime='1000' :background="`rgba(251, 248, 220, 1)`" :color="`#D9500B`">
      <template v-slot:rightIcon>
        <Fabulous />
      </template>
    </nut-noticebar>
</template>

<script>
  import { ref } from 'vue';
  import { Fabulous } from '@nutui/icons-vue-taro';
  export default {
    components: { Fabulous },
    setup(props) {
      const horseLamp1 = ref(['Noticebar 公告栏', 'Cascader 级联选择', 'DatePicker 日期选择器', 'CheckBox 复选按钮']);
      return { horseLamp1 };
    }
  }
</script>
