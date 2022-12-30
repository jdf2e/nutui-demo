<template>
  <view class="index">
    <text>{{ msg }}</text>
    <nut-button type="primary" >nutui</nut-button>
  </view>
</template>

<script>
import { ref } from 'vue'
import './index.scss'

export default {
  setup () {
    const msg = ref('Hello world')
    return {
      msg
    }
  }
}
</script>
