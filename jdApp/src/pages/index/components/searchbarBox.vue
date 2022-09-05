<template>
    <view class="searchbar-box">
      <nut-searchbar v-model="searchValue">
        <template v-slot:leftin>
          <nut-icon size="14" name="search2"></nut-icon>
        </template>
        <template v-slot:rightin>
          <nut-icon size="20" name="photograph"></nut-icon>
        </template>
      </nut-searchbar>
      <nut-button type="primary">搜索</nut-button>
    </view>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'SearchbarBox',
  setup(){
    const searchValue = ref('')

    return {
      searchValue
    }
  }
}
</script>
