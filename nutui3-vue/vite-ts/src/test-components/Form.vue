<template>
  <h3>动态表单</h3>
  <nut-form :model-value="dynamicForm.state" ref="dynamicRefForm">
    <nut-form-item label="姓名" prop="name" required :rules="[{ required: true, message: '请填写姓名' }]">
      <input class="nut-input-text" v-model="dynamicForm.state.name" placeholder="请输入姓名" type="text" />
    </nut-form-item>
    <nut-form-item :label="'联系方式'+index" :prop="'tels.' + index + '.value'" required
      :rules="[{ required: true, message: '请填写联系方式'+index }]" :key="item.key"
      v-for="(item,index) in dynamicForm.state.tels">
      <input class="nut-input-text" v-model="item.value" :placeholder="'请输入联系方式'+index" type="text" />
    </nut-form-item>
    <nut-cell>
      <nut-button size="small" style="margin-right: 10px" @click="dynamicForm.methods.add">添加</nut-button>
      <nut-button size="small" style="margin-right: 10px" @click="dynamicForm.methods.remove">删除</nut-button>
      <nut-button type="primary" size="small" @click="dynamicForm.methods.submit">提交</nut-button>
    </nut-cell>
  </nut-form>
  <h3>表单校验</h3>
  <nut-form :model-value="formData" ref="ruleForm">
    <nut-form-item label="姓名" prop="name" required :rules="[{ required: true, message: '请填写姓名' }]">
      <input class="nut-input-text" @blur="customBlurValidate('name')" v-model="formData.name"
        placeholder="请输入姓名，blur 事件校验" type="text" />
    </nut-form-item>
    <nut-form-item label="年龄" prop="age" required :rules="[
      { required: true, message: '请填写年龄' },
      { validator: customValidator, message: '必须输入数字' },
      { regex: /^(\d{1,2}|1\d{2}|200)$/, message: '必须输入0-200区间' }
    ]">
      <input class="nut-input-text" v-model="formData.age" placeholder="请输入年龄，必须数字且0-200区间" type="text" />
    </nut-form-item>
    <nut-form-item label="联系电话" prop="tel" required :rules="[
      { required: true, message: '请填写联系电话' },
      { validator: asyncValidator, message: '电话格式不正确' }
    ]">
      <input class="nut-input-text" v-model="formData.tel" placeholder="请输入联系电话，异步校验电话格式" type="text" />
    </nut-form-item>
    <nut-form-item label="地址" prop="address" required :rules="[{ required: true, message: '请填写地址' }]">
      <input class="nut-input-text" v-model="formData.address" placeholder="请输入地址" type="text" />
    </nut-form-item>
    <nut-cell>
      <nut-button type="primary" size="small" style="margin-right: 10px" @click="submit">提交</nut-button>
      <nut-button size="small" @click="reset">重置提示状态</nut-button>
    </nut-cell>
  </nut-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "video",
  setup() {
    const dynamicRefForm = ref<any>(null);
    const dynamicForm = {
      state: reactive({
        name: "",
        tels: new Array({
          key: 1,
          value: "",
        }),
      }),

      methods: {
        submit() {
          dynamicRefForm.value.validate().then(({ valid, errors }: any) => {
            if (valid) {
              console.log("success", dynamicForm);
            } else {
              console.log("error submit!!", errors);
            }
          });
        },
        remove() {
          dynamicForm.state.tels.splice(dynamicForm.state.tels.length - 1, 1);
        },
        add() {
          let newIndex = dynamicForm.state.tels.length;
          dynamicForm.state.tels.push({
            key: Date.now(),
            value: "",
          });
        },
      },
    };
    const formData = reactive({
      name: "",
      age: "",
      tel: "",
      address: "",
    });
    const validate = (item: any) => {
      console.log(item);
    };
    const ruleForm = ref<any>(null);

    const submit = () => {
      ruleForm.value.validate().then(({ valid, errors }: any) => {
        if (valid) {
          console.log("success", formData);
        } else {
          console.log("error submit!!", errors);
        }
      });
    };
    const reset = () => {
      ruleForm.value.reset();
    };
    // 失去焦点校验
    const customBlurValidate = (prop: string) => {
      ruleForm.value.validate(prop).then(({ valid, errors }: any) => {
        if (valid) {
          console.log("success", formData);
        } else {
          console.log("error submit!!", errors);
        }
      });
    };
    // 函数校验
    const customValidator = (val: string) => /^\d+$/.test(val);
    // Promise 异步校验
    const asyncValidator = (val: string) => {
      return new Promise((resolve) => {
        Toast.loading("模拟异步验证中...");
        setTimeout(() => {
          Toast.hide();
          resolve(
            /^400(-?)[0-9]{7}$|^1\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/.test(val)
          );
        }, 1000);
      });
    };
    return {
      ruleForm,
      formData,
      validate,
      customValidator,
      asyncValidator,
      customBlurValidate,
      submit,
      reset,
      dynamicForm,
      dynamicRefForm,
    };
  },
});
</script>
