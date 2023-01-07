<style>
.vertical_div {
  height: 180px;
  padding: 10px;
}
.div {
  width: 150px;
}
</style>
<template>
  <div>
    <nut-cell class="cell">
      <nut-range
        v-model="value12"
        @change="onChange"
        :marks="marks"
        :hiddenRange="true"
      ></nut-range>
    </nut-cell>
    <nut-cell class="cell">
      <nut-range
        range
        v-model="value13"
        @change="onChange"
        :marks="marks"
        :hiddenRange="true"
      ></nut-range>
    </nut-cell>
    <nut-cell class="vertical_div">
      <div class="div">
        <nut-range
          v-model="value14"
          @change="onChange"
          :vertical="true"
          :marks="marks"
          :hiddenRange="true"
        ></nut-range>
      </div>
      <div class="div">
        <nut-range
          range
          v-model="value15"
          @change="onChange"
          :vertical="true"
          :marks="marks"
          :hiddenRange="true"
        ></nut-range>
      </div>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRefs } from "vue";
import { showToast } from "@nutui/nutui";
import "@nutui/nutui/dist/packages/toast/style";
export default {
  setup() {
    const state = reactive({
      value12: 60,
      value13: [20, 80],
      value14: 60,
      value15: [20, 80],
    });
    const marks = ref({
      0: 0,
      20: 20,
      40: 40,
      60: 60,
      80: 80,
      100: 100,
    });
    const onChange = (value) => showToast.text("当前值：" + value);
    return {
      ...toRefs(state),
      marks,
      onChange,
    };
  },
};
</script>
