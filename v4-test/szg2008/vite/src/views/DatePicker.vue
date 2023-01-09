<template>
    <nut-date-picker
        v-model="currentDate"
        title="时间选择"
        type="datehour"
        :min-date="minDate"
        :max-date="maxDate"
        :filter="filter"
        :formatter="formatter"
        @confirm="confirm"
    ></nut-date-picker>
  </template>
  <script lang="ts">
    import { ref } from 'vue';
    import { showToast } from '@nutui/nutui';
    import '@nutui/nutui/dist/packages/toast/style';
    export default {
      setup(props) {
        const currentDate = new Date(2022, 4, 10, 0, 0);
        const formatter = (type: string, option) => {
          switch (type) {
            case 'year':
              option.text += '年';
              break;
            case 'month':
              option.text += '月';
              break;
            case 'day':
              option.text += '月';
              break;
            case 'hour':
              option.text += '时';
              break;
            default:
              option.text += '';
          }
          return option;
        };
  
        const filter = (type: string, options) => {
          if (type == 'hour') {
            return options.filter((option) => Number(option.value) % 6 === 0);
          }
          return options;
        };
        const confirm = ( { selectedValue, selectedOptions } )=>{
          showToast.text(selectedOptions.map((option) => option.text).join(''));
        }
        return {
          currentDate,
          minDate: new Date(2020, 0, 1),
          maxDate: new Date(2025, 10, 1),
          confirm,
          formatter,
          filter
        };
      }
    };
  </script>
  