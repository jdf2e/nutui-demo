<template>
  <nut-comment
    headerType="complex"
    imagesRows="multi"
    :images="cmt.images"
    :videos="cmt.videos"
    :info="cmt.info"
    ellipsis="6"
    @clickImages="clickImages"
  >
    <template #comment-labels>
      <img
        class="nut-comment-header__labels--item"
        src="https://storage.360buyimg.com/imgtools/78925d9440-f9e874d0-e93d-11eb-8e5c-0da9e18a13b1.png"
        style="height: 12px"
      />
    </template>
  
    <template #comment-shop-reply>
      <div class="nut-comment-shop">
        <span>京东美妆国际：</span
        >尊敬的客户您好，非常抱歉给您带来不愉快的购物体验，关于过敏，什么成分都不存在个别性和普遍性。
      </div>
    </template>
  </nut-comment>
  
  </template>
  <script lang="ts">
  import { reactive, ref,onMounted } from 'vue';
  import Taro from '@tarojs/taro'
  export default {
    setup() {
      let cmt = ref({});
      onMounted(()=>{
        Taro.request({
            url: 'https://storage.360buyimg.com/nutui/3x/comment_data.json', //仅为示例，并非真实的接口地址
            success: function (res) {
              cmt.value = res.data.Comment;
            }
          })
      })
      const clickImages = (imgs)=>{
        console.log('进行图片展示',imgs)
      }
      return {
        cmt,
        clickImages
      };
    }
  }
  </script>