<template>
  <nut-comment :images="cmt.images" :videos="cmt.videos" :info="cmt.info" :labels="labels" @click="handleclick"
    @clickImages="clickImages" :operation="['replay']">
    <template #comment-labels>
      <img class="nut-comment-header__labels--item"
        src="https://img11.360buyimg.com/imagetools/jfs/t1/211858/17/4258/12101/618e6f78Ed0edcadc/e83a673555edf59f.jpg" />
    </template>
  </nut-comment>
  <nut-comment headerType="complex" imagesRows="multi" :images="cmt.images" :videos="cmt.videos" :info="cmt.info"
    ellipsis="6" @clickImages="clickImages">
    <template #comment-labels>
      <img class="nut-comment-header__labels--item"
        src="https://storage.360buyimg.com/imgtools/78925d9440-f9e874d0-e93d-11eb-8e5c-0da9e18a13b1.png"
        style="height: 12px" />
    </template>

    <template #comment-shop-reply>
      <div class="nut-comment-shop">
        <span>京东美妆国际：</span>尊敬的客户您好，非常抱歉给您带来不愉快的购物体验，关于过敏，什么成分都不存在个别性和普遍性。
      </div>
    </template>
  </nut-comment>

  <nut-comment imagesRows="multi" :images="cmt.images" :videos="cmt.videos" :info="cmt.info" :follow="cmt.follow"
    @clickImages="clickImages" :operation="['like']"></nut-comment>
</template>
<script>
import { reactive, ref, onMounted } from 'vue';
export default {
  setup() {
    let cmt = ref({});
    const labels = () => {
      return '<Dongdong/>';
    };
    onMounted(() => {
      fetch('//storage.360buyimg.com/nutui/3x/comment_data.json')
        .then((response) => response.json())
        .then((res) => {
          cmt.value = res.Comment;
        })
        .catch((err) => console.log('Oh, error', err));
    })
    const handleclick = (info) => {
      console.log('进行跳转', info);
    };
    const clickImages = (imgs) => {
      console.log('进行图片展示', imgs)
    }
    return {
      cmt,
      labels,
      handleclick,
      clickImages
    };
  }
}
</script>
