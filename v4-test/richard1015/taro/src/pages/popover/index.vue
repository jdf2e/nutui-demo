<template>
  <nut-row type="flex">
     <nut-col :span="8" style='margin-left:20px'>
        <nut-popover v-model:visible="visible.showIcon" theme="dark" :list="itemList">
          <template #reference>
            <nut-button type="primary" shape="square">展示图标</nut-button>
          </template>
        </nut-popover>
      </nut-col>
      <nut-col :span="8" style='margin-left:20px'>
        <nut-popover v-model:visible="visible.disableAction" :list="itemListDisabled" location="right">
          <template #reference>
            <nut-button type="primary" shape="square">禁用选项</nut-button>
          </template>
        </nut-popover>
      </nut-col>
    </nut-row>
</template>

<script>
import { reactive, ref,h } from 'vue';
import { Location,Cart2, My2 } from '@nutui/icons-vue-taro';
export default {
  setup() {
    const visible = ref({
      showIcon: false,
      disableAction: false,
    });

    const itemList = reactive([
      {
        name: 'option1',
        icon: ()=>{
          return h(My2,{
            width:'14px',
            color:'rgba(250, 44, 25, 1)'
          })
        }
      },
      {
        name: 'option2',
        icon: Cart2
      },
      {
        name: 'option3',
        icon: Location
      }
    ]);

    const itemListDisabled = reactive([
      {
        name: '选项一',
        disabled: true
      },{
        name: '选项二',
        disabled: true
      },{
        name: '选项三'
      }
    ]);

    return {
        itemList,
        visible,
        itemListDisabled,
      };
    }
}
</script>

<style>
.nut-popover-content {
    width: 120px;
}
.nut-icon{
  width:14px
}
</style>
