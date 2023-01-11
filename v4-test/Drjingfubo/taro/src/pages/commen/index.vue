<template>
  <nut-cell>
    <nut-comment :images="cmt.images" :videos="cmt.videos" :info="cmt.info" @click="handleclick"
      @clickImages="clickImages" :operation="['replay']">
      <template #comment-labels>
        <img class="nut-comment-header__labels--item"
          src="https://img11.360buyimg.com/imagetools/jfs/t1/211858/17/4258/12101/618e6f78Ed0edcadc/e83a673555edf59f.jpg" />
      </template>
    </nut-comment>
  </nut-cell>
  <nut-cell>
    <nut-comment imagesRows="multi" :images="cmt.images" :videos="cmt.videos" :info="cmt.info" :follow="cmt.follow"
      @clickImages="clickImages"></nut-comment>
  </nut-cell>
</template>
<script >
import { reactive, ref, onMounted } from 'vue';
import Taro from '@tarojs/taro';
export default {
  setup() {
    let cmt = ref({});
    onMounted(() => {
      Taro.request({
        url: 'https://storage.360buyimg.com/nutui/3x/comment_data.json', //仅为示例，并非真实的接口地址
        success: function (res) {
          cmt.value = res.data.Comment;
        }
      })
    })
    const handleclick = (info: any) => {
      console.log('进行跳转', info);
    };
    const clickImages = (imgs) => {
      console.log('进行图片展示', imgs)
    }
    return {
      cmt,
      handleclick,
      clickImages
    };
  }
}
</script>
<style>
:root {
  --nut-comment-header-user-name-color: red;
  --nut-comment-header-time-color: rgba(153, 153, 153, 1);
  --nut-comment-bottom-label-color: rgba(153, 153, 153, 1);
  --nut-comment-shop-color: var(--nut-primary-color);
}
</style>
