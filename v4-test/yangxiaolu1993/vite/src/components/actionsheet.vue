<template>
  <div>
  <nut-cell
      :show-icon="true"
      :isLink="true"
      @click="switchActionSheet('isVisible')"
    >
      <span><label>展示取消按钮</label></span>
      <div v-html="state.val"></div>
    </nut-cell>
     <!-- demo 展示取消按钮 -->
    <nut-action-sheet
      v-model:visible="state.isVisible"
      :menu-items="menuItems"
      cancel-txt="取消"
      @choose="chooseItem"
    >
    </nut-action-sheet>
    </div>
</template>
<script>
import { reactive } from 'vue';
export default {
  setup() {
  const state = reactive({
      isVisible: false,
      val: '',
    });
     const menuItems = [
      {
        name: '选项一'
      },
      {
        name: '选项二'
      },
      {
        name: '选项三'
      }
    ];
    const switchActionSheet = ( param ) => {
      state.isVisible = !state.isVisible;
    };
      const chooseItem = (itemParams) => {
      state.val = itemParams.name;
    };
    return {
      state,
      switchActionSheet,
      menuItems,
      chooseItem,
    };
  }
}
 </script>
