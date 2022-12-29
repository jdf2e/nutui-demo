<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-12-29 15:49:18
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-29 17:59:05
-->
<script setup lang="ts">
import { ref, reactive } from "vue";
import { TriangleDown, Checked } from "@nutui/icons-vue";
const state = reactive({
  options1: [
    { text: "全部商品", value: 0 },
    { text: "新款商品", value: 1 },
    { text: "活动商品", value: 2 },
  ],
  options2: [
    { text: "默认排序", value: "a" },
    { text: "好评排序", value: "b" },
    { text: "销量排序", value: "c" },
  ],
  options3: [
    { text: "全部商品", value: 0 },
    { text: "家庭清洁/纸品", value: 1 },
    { text: "个人护理", value: 2 },
    { text: "美妆护肤", value: 3 },
    { text: "食品饮料", value: 4 },
    { text: "家用电器", value: 5 },
    { text: "母婴", value: 6 },
    { text: "数码", value: 7 },
    { text: "电脑、办公", value: 8 },
    { text: "运动户外", value: 9 },
    { text: "厨具", value: 10 },
    { text: "医疗保健", value: 11 },
    { text: "酒类", value: 12 },
    { text: "生鲜", value: 13 },
    { text: "家具", value: 14 },
    { text: "传统滋补", value: 15 },
    { text: "汽车用品", value: 16 },
    { text: "家居日用", value: 17 },
  ],
  value1: 0,
  value2: "a",
  value3: 0,
});

const handleChange = (val) => {
  console.log("val", val);
};

const item = ref("");

const onConfirm = () => {
  item.value.toggle();
};
</script>

<template>
  <div class="demo-box">
    <h2>基本用法</h2>
    <nut-menu>
      <nut-menu-item v-model="state.value1" :options="state.options1" />
      <nut-menu-item
        v-model="state.value2"
        @change="handleChange"
        :options="state.options2"
      />
    </nut-menu>
    <h2>自定义菜单内容</h2>
    <nut-menu>
      <nut-menu-item v-model="state.value1" :options="state.options1" />
      <nut-menu-item title="筛选" ref="item">
        <div
          :style="{
            display: 'flex',
            flex: 1,
            'justify-content': 'space-between',
            'align-items': 'center',
          }"
        >
          <div :style="{ marginRight: '10px' }">自定义内容</div>
          <nut-button @click="onConfirm">确认</nut-button>
        </div>
      </nut-menu-item>
    </nut-menu>
    <h2>一行两列</h2>
    <nut-menu>
      <nut-menu-item
        v-model="state.value3"
        :cols="2"
        :options="state.options3"
      />
    </nut-menu>
    <h2>自定义选中态颜色</h2>
    <nut-menu active-color="green">
      <nut-menu-item v-model="state.value1" :options="state.options1" />
      <nut-menu-item
        v-model="state.value2"
        @change="handleChange"
        :options="state.options2"
      />
    </nut-menu>
    <h2>自定义图标</h2>
    <nut-menu>
      <template #icon>
        <TriangleDown />
      </template>
      <nut-menu-item v-model="state.value1" :options="state.options1" />
      <nut-menu-item
        v-model="state.value2"
        @change="handleChange"
        :options="state.options2"
      >
        <template #icon>
          <Checked></Checked>
        </template>
      </nut-menu-item>
    </nut-menu>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
