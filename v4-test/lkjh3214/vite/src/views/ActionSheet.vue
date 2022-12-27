<template>
  <div class="demo">
    <h2>基本用法</h2>
    <nut-cell
      :show-icon="true"
      :isLink="true"
      @click="switchActionSheet('isVisible1')"
    >
      <span><label>基本用法</label></span>
      <div class="selected-option" v-html="state.val1"></div>
    </nut-cell>
    <nut-cell
      :showIcon="true"
      :isLink="true"
      @click="switchActionSheet('isVisible2')"
    >
      <span><label>展示取消按钮</label></span>
      <div class="selected-option" v-html="state.val2"></div>
    </nut-cell>
    <nut-cell :isLink="true" @click="switchActionSheet('isVisible3')">
      <span><label>展示描述信息</label></span>
      <div class="selected-option" v-html="state.val3"></div>
    </nut-cell>
    <h2>选项状态</h2>

    <nut-cell :isLink="true" @click="switchActionSheet('isVisible4')">
      <span><label>选项状态</label></span>
      <div class="selected-option" v-html="state.val4"></div>
    </nut-cell>

    <h2>自定义内容</h2>

    <nut-cell :isLink="true" @click="switchActionSheet('isVisible5')">
      <span><label>自定义内容</label></span>
      <div class="selected-option"></div>
    </nut-cell>

    <!-- demo 基础用法 -->
    <nut-action-sheet
      :safe-area-inset-bottom="true"
      v-model:visible="state.isVisible1"
      :menu-items="menuItemsOne"
      @choose="chooseItem"
    >
    </nut-action-sheet>
    <!-- demo(带取消按钮） -->
    <nut-action-sheet
      v-model:visible="state.isVisible2"
      :cancel-txt="'取消'"
      :menu-items="menuItemsOne"
      @choose="chooseItemTwo"
    >
    </nut-action-sheet>
    <!-- 展示描述信息 -->
    <nut-action-sheet
      v-model:visible="state.isVisible3"
      :title="'标题'"
      :description="desc"
      :menu-items="menuItemsTwo"
      @choose="chooseItemThree"
      :cancel-txt="'取消'"
    >
    </nut-action-sheet>
    <!-- demo 选项状态-->
    <nut-action-sheet
      v-model:visible="state.isVisible4"
      :cancel-txt="'取消'"
      :menu-items="menuItemsThree"
      @choose="chooseItemFour"
      :choose-tag-value="chooseTagValue"
    ></nut-action-sheet>
    <!-- 自定义面板-->
    <nut-action-sheet v-model:visible="state.isVisible5" :title="'标题'">
      <div class="custom-content">自定义内容</div>
    </nut-action-sheet>
  </div>
</template>

<script lang="ts">
import { computed, reactive } from "vue";

interface Item {
  name: string;
  subname?: string;
  color?: string;
  disable?: boolean;
  loading?: boolean;
}
export default {
  props: {},
  setup() {
    const state = reactive({
      isVisible1: false,
      isVisible2: false,
      isVisible3: false,
      isVisible4: false,
      isVisible5: false,
      val1: "",
      val2: "",
      val3: "",
      val4: "",
    });
    const chooseTagValue = computed(() => "着色选项");
    const desc = computed(() => "这是一段展示信息");
    const menuItemsOne = computed(() => [
      {
        name: "选项一",
      },
      {
        name: "选项二",
      },
      {
        name: "选项三",
      },
    ]);
    const menuItemsTwo = computed(() => [
      {
        name: "选项一",
      },
      {
        name: "选项二",
      },
      {
        name: "选项三",
        subname: "描述信息",
      },
    ]);
    const menuItemsThree = computed(() => [
      {
        name: "着色选项",
      },
      {
        name: "禁用选项",
        disable: true,
      },
    ]);
    const switchActionSheet = (
      param:
        | "isVisible1"
        | "isVisible2"
        | "isVisible3"
        | "isVisible4"
        | "isVisible5"
    ) => {
      state[param] = !state[param];
    };

    const chooseItem = (itemParams: any) => {
      state.val1 = itemParams.name;
    };

    function chooseItemTwo(itemParams: Item) {
      state.val2 = itemParams.name;
    }
    function chooseItemThree(itemParams: Item) {
      state.val3 = itemParams.name;
    }
    function chooseItemFour(itemParams: Item) {
      state.val4 = itemParams.name;
    }

    return {
      state,
      menuItemsOne,
      menuItemsTwo,
      menuItemsThree,
      chooseTagValue,
      desc,
      chooseItem,
      chooseItemTwo,
      chooseItemThree,
      chooseItemFour,
      switchActionSheet,
    };
  },
};
</script>

<style lang="scss" scoped>
.custom-wrap {
  padding: 110px 0;
  text-align: center;
}
.nut-cell {
  justify-content: space-between;
}
.custom-content {
  padding: 10px 10px 160px;
}
.nut-theme-dark {
  .custom-content {
    color: white;
  }
}
</style>
