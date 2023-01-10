<template>
  <nut-config-provider :theme="theme">
      <nut-cell :title="'title1'">
        <template v-slot:link>
          <nut-switch v-model="switchChecked" @change="switchChange" />
        </template>
      </nut-cell>
      <nut-cell :title="'title2'" :sub-title="'title3'" :desc="'desc'"></nut-cell>

      <nut-form>
        <nut-form-item :label="'switch'">
          <nut-switch v-model="formData2.switch"></nut-switch>
        </nut-form-item>
        <nut-form-item :label="'checkbox'">
          <nut-checkbox v-model="formData2.checkbox">{{ 'checkbox' }}</nut-checkbox>
        </nut-form-item>
        <nut-form-item :label="'radiogroup'">
          <nut-radio-group direction="horizontal" v-model="formData2.radio">
            <nut-radio label="1">option1</nut-radio>
            <nut-radio disabled label="2">option2</nut-radio>
            <nut-radio label="3">option3</nut-radio>
          </nut-radio-group>
        </nut-form-item>
        <nut-form-item :label="'rate'">
          <nut-rate v-model="formData2.rate" />
        </nut-form-item>
        <nut-form-item :label="'inputnumber'">
          <nut-input-number v-model="formData2.number" />
        </nut-form-item>
        <nut-form-item :label="'range'">
          <nut-range hidden-tag v-model="formData2.range"></nut-range>
        </nut-form-item>
        <nut-form-item :label="'uploader'">
          <nut-uploader url="http://apiurl" v-model:file-list="formData2.defaultFileList" maximum="3" multiple>
          </nut-uploader>
        </nut-form-item>
        <nut-form-item :label="'address'">
          <input
            class="nut-input-text"
            v-model="formData2.address"
            @click="addressModule.methods.show"
            readonly
            :placeholder="'addressTip1'"
            type="text"
          />
          <!-- nut-address -->
          <nut-address
            v-model:visible="addressModule.state.show"
            :province="addressModule.state.province"
            :city="addressModule.state.city"
            :country="addressModule.state.country"
            :town="addressModule.state.town"
            @change="addressModule.methods.onChange"
            :custom-address-title="'addressTip2'"
          ></nut-address>
        </nut-form-item>
      </nut-form>
    </nut-config-provider>
</template>
<script lang="ts">
  import { ref, reactive } from 'vue';
  export default {
    setup() {
      const switchChecked = ref(false);
      const theme = ref('');
      const switchChange = (v: boolean) => {
        theme.value = v ? 'dark' : '';
      };
      const formData2 = reactive({
      switch: false,
      checkbox: false,
      radio: 0,
      number: 0,
      rate: 3,
      range: 30,
      address: '',
      defaultFileList: [
        {
          name: 'file 1.png',
          url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
          status: 'success',
          message: 'success',
          type: 'image'
        },
        {
          name: 'file 2.png',
          url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
          status: 'uploading',
          message: 'uploading',
          type: 'image'
        }
      ]
    });

    const addressModule = reactive({
      state: {
        show: false,
        province: [
          { id: 1, name: '北京' },
          { id: 2, name: '广西' },
          { id: 3, name: '江西' },
          { id: 4, name: '四川' }
        ],
        city: [
          { id: 7, name: '朝阳区' },
          { id: 8, name: '崇文区' },
          { id: 9, name: '昌平区' },
          { id: 6, name: '石景山区' }
        ],
        country: [
          { id: 3, name: '八里庄街道' },
          { id: 9, name: '北苑' },
          { id: 4, name: '常营乡' }
        ],
        town: []
      },
      methods: {
        show() {
          addressModule.state.show = !addressModule.state.show;
          if (addressModule.state.show) {
            formData2.address = '';
          }
        },
        onChange({ custom, next, value }: any) {
          formData2.address += value.name;
          const name = addressModule.state[next];
          if (name.length < 1) {
            addressModule.state.show = false;
          }
        }
      }
    });

      return { switchChecked, switchChange, theme, formData2,
      addressModule};
    }
  };
</script>
