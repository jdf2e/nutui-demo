<template>
  <nut-shortpassword
    v-model:value="state.value"
    v-model:visible="state.visible"
    :no-button="state.noButton"
    :length="state.length"
    :error-msg="state.errorMsg"
    @change="methods.onChange"
    @complete="methods.onComplete"
    @ok="methods.onOk"
    @tips="methods.onTips"
  >
  </nut-shortpassword>
  <nut-cell title="短密码组件测试" is-link @click="methods.test"></nut-cell>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, reactive } from "vue";
export default defineComponent({
  name: "ShortPassword",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    let { ctx } = getCurrentInstance();

    const state = reactive({
      visible: false,
      noButton: true,
      value: "",
      errorMsg: "",
      length: 6,
    });
    const methods = {
      onChange(val: string) {
        val && ctx.$toast.text(val);
      },
      onOk(val: string) {
        val && ctx.$toast.text(val);
        state.visible = false;
      },
      onComplete() {},
      onTips() {
        ctx.$toast.text("执行忘记密码逻辑");
      },
      test() {
        state.visible = true;
        ctx.$toast.text("短密码组件测试");
      },
    };
    return {
      state,
      methods,
    };
  },
});
</script>
