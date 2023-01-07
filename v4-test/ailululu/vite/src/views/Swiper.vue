<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2023-01-07 11:08:51
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-07 13:52:35
-->
<template>
  <div class="demo">
    <!-- <nut-swiper
      :init-page="page"
      :pagination-visible="true"
      pagination-color="#426543"
      auto-play="3000"
    >
      <nut-swiper-item v-for="item in list" :key="item">
        <img :src="item" alt="" />
      </nut-swiper-item>
    </nut-swiper> -->
    <br />
    <nut-swiper :init-page="page3" :loop="true" @change="change">
      <nut-swiper-item>
        <img
          src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg"
          alt=""
        />
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
      <template v-slot:page>
        <div class="page">{{ current }}/4</div>
      </template>
    </nut-swiper>
    <nut-swiper
      :init-page="page"
      :loop="true"
      ref="swiper"
      direction="vertical"
      height="150"
      style="height: 150px"
      :is-center="true"
    >
      <nut-swiper-item v-for="item in list1" :key="item">
        <img :src="item" alt="" />
      </nut-swiper-item>
    </nut-swiper>
    <view class="nut-swiper-btns">
      <span class="nut-swiper-btns__left" @click="handlePrev"> left </span>
      <span class="nut-swiper-btns__left" @click="handleNext"> right </span>
    </view>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive, ref, onMounted } from "vue";

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
    const swiper = ref(null);
    const state = reactive({
      page: 2,
      page3: 0,
      current: 1,
      list: [] as string[],
      list1: [
        "https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg",
        "https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg",
        "https://storage.360buyimg.com/jdc-article/welcomenutui.jpg",
        "https://storage.360buyimg.com/jdc-article/fristfabu.jpg",
      ],
    });
    // const handleClickStep = (index: number) => {
    //   console.log(index);
    // };
    onMounted(() => {
      setTimeout(() => {
        state.list = [
          "https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg",
          "https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg",
          "https://storage.360buyimg.com/jdc-article/welcomenutui.jpg",
          "https://storage.360buyimg.com/jdc-article/fristfabu.jpg",
        ];
      }, 3000);
    });

    const change = (index: number) => {
      state.current = index + 1;
    };

    const handlePrev = () => {
      swiper.value.prev();
    };
    const handleNext = () => {
      swiper.value.next();
    };

    return {
      ...toRefs(state),
      change,
      swiper,
      handlePrev,
      handleNext,
    };
  },
};
</script>

<style lang="scss" scoped>
.nut-swiper-item {
  line-height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
}
.page {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 46px;
  height: 22px;
  background: rgba(0, 0, 0, 0.33);
  border-radius: 22px;
  text-align: center;
  color: #fff;
  font-size: 14px;
}
.nut-swiper-item {
  line-height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
  ::v-deep(.nut-swiper-pagination-vertical) {
    i {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      &.active {
        height: 18px;
        border-radius: 5px;
      }
    }
  }
}
</style>
