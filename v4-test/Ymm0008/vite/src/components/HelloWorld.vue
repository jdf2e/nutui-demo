<template>
  <nut-table :columns="columns" :data="data" @sorter="handleSorter"></nut-table>
</template>
<script lang="ts">
import { reactive, toRefs } from "vue";
import { showToast } from "@nutui/nutui";
import "@nutui/nutui/dist/packages/toast/style";
export default {
  setup() {
    const state = reactive({
      columns: [
        {
          title: "姓名",
          key: "name",
          align: "center",
          sorter: true,
        },
        {
          title: "性别",
          key: "sex",
        },
        {
          title: "学历",
          key: "record",
        },
        {
          title: "年龄",
          key: "age",
          sorter: (row1: any, row2: any) => {
            return row1.age - row2.age;
          },
        },
      ],
      data: [
        {
          name: "Tom",
          sex: "男",
          record: "小学",
          age: 10,
        },
        {
          name: "Lucy",
          sex: "女",
          record: "本科",
          age: 30,
        },
        {
          name: "Jack",
          sex: "男",
          record: "高中",
          age: 4,
        },
      ],
    });

    const handleSorter = (item: TableColumnProps) => {
      showToast.text(`${JSON.stringify(item)}`);
    };

    return {
      ...toRefs(state),
      handleSorter,
    };
  },
};
</script>
