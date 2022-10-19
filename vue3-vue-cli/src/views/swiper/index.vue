<template>
  <nut-swiper
    :init-page="page4"
    :loop="true"
    auto-play="3000"
    direction="vertical"
    height="150"
    :pagination-visible="true"
    style="height: 150px"
  >
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img
        src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg"
        alt=""
      />
    </nut-swiper-item>
    <nut-swiper-item>
      <img
        src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg"
        alt=""
      />
    </nut-swiper-item>
    <nut-swiper-item>
      <img
        src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg"
        alt=""
      />
    </nut-swiper-item>
  </nut-swiper>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: "Swiper",
  setup() {
    const state = reactive({
      page4: 0
    })
    return { ...toRefs(state) }
  }
}
</script>
<style lang="scss" scoped>
.nut-swiper-item {
  line-height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>