<template>
  <view class="index">
    <my-footer></my-footer>
  </view>
</template>

<script>
import MyFooter from '../../components/footer/footer.vue'

export default {
  name: 'Index',
  components: {
    'my-footer': MyFooter
  },
  setup(){
  }
}
</script>