<template>
  <div class="demo">
    
    <!-- <nut-comment :images="cmt.images" :videos="cmt.videos" :info="cmt.info" :labels="labels" @click="handleclick"
    @clickImages="clickImages" :operation="['replay']">
    <template #comment-labels>
      <img class="nut-comment-header__labels--item"
      style="width: 20px; height: 12px"
        src="https://img11.360buyimg.com/imagetools/jfs/t1/211858/17/4258/12101/618e6f78Ed0edcadc/e83a673555edf59f.jpg" />
    </template>
  </nut-comment> -->
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
  <nut-comment
  imagesRows="multi"
  :images="cmt.images"
  :videos="cmt.videos"
  :info="cmt.info"
  :follow="cmt.follow"
  @clickImages="clickImages"
></nut-comment>


  </div>

</template>
<script>
import { reactive, ref, onMounted } from 'vue';
import { Dongdong } from '@nutui/icons-vue';
export default {
  setup() {
    let cmt = ref({});
    const labels = () => {
      return '<Dongdong/>';
    };
    onMounted(() => {
      cmt.value = {
            "videos": [
              {
                "mainUrl": "https://img.300hu.com/4c1f7a6atransbjngwcloud1oss/3a5abb98377496264567160833/imageSampleSnapshot/1604738160_777980391.100_1344.jpg",
                "videoUrl": "https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/3a5abb98377496264567160833/v.f30.mp4?source=1&h265=v.f1022_h265.mp4"
              }
            ],
            "images": [
              {
                "smallImgUrl": "",
                "bigImgUrl": "",
                "imgUrl": "https://img30.360buyimg.com/imagetools/jfs/t1/153847/3/5051/62777/5fa65e01Ec88cecb9/36ba206949050b39.jpg"
              },
              {
                "smallImgUrl": "",
                "bigImgUrl": "",
                "imgUrl": "https://img30.360buyimg.com/imagetools/jfs/t1/131794/19/15190/57841/5fa65e03E75c12ef1/0d1ac3a87ff9e398.jpg"
              },
              {
                "smallImgUrl": "",
                "bigImgUrl": "",
                "imgUrl": "https://img30.360buyimg.com/imagetools/jfs/t1/155091/12/4926/68141/5fa65e03E9d8c5120/9c71b6e49f1eb3c3.jpg"
              },
              {
                "smallImgUrl": "",
                "bigImgUrl": "",
                "imgUrl": "https://img30.360buyimg.com/imagetools/jfs/t1/138774/29/13635/70364/5fa65e04E1669ad70/c97839098a18d92e.jpg"
              },
              {
                "smallImgUrl": "",
                "bigImgUrl": "",
                "imgUrl": "https://img30.360buyimg.com/imagetools/jfs/t1/120265/1/17811/70109/5fa65e05Eb23a84e3/e156fc1d316922c4.jpg"
              },
              {
                "smallImgUrl": "",
                "bigImgUrl": "",
                "imgUrl": "https://img30.360buyimg.com/imagetools/jfs/t1/120265/1/17811/70109/5fa65e05Eb23a84e3/e156fc1d316922c4.jpg"
              },
              {
                "smallImgUrl": "",
                "bigImgUrl": "",
                "imgUrl": "https://img30.360buyimg.com/imagetools/jfs/t1/155091/12/4926/68141/5fa65e03E9d8c5120/9c71b6e49f1eb3c3.jpg"
              },
              {
                "smallImgUrl": "",
                "bigImgUrl": "",
                "imgUrl": "https://img30.360buyimg.com/imagetools/jfs/t1/138774/29/13635/70364/5fa65e04E1669ad70/c97839098a18d92e.jpg"
              },
              {
                "smallImgUrl": "",
                "bigImgUrl": "",
                "imgUrl": "https://img30.360buyimg.com/imagetools/jfs/t1/138774/29/13635/70364/5fa65e04E1669ad70/c97839098a18d92e.jpg"
              }
            ],
            "info": {
              "content": "产品包装：塑料瓶，但是能接受，也很喜欢。",
              "nickName": "星***_",
              "score": 5,
              "avatar": "https://img30.360buyimg.com/imagetools/jfs/t1/131794/19/15190/57841/5fa65e03E75c12ef1/0d1ac3a87ff9e398.jpg",
              "time": "2021-09-09",
              "size": "雪域白【碎屏险套装】全网通；8G+256【12期免息】",
              "replay": 23,
              "like": 1
            },
            "follow": {
              "days": 128,
              "content": "12月份开始用，用到现在，我的脸干的不行，一天都紧紧巴巴，打算换套别的用，不知道是不是不合适，还是假的呢！",
              "images": [
                "//img30.360buyimg.com/imagetools/jfs/t1/120265/1/17811/70109/5fa65e05Eb23a84e3/e156fc1d316922c4.jpg"
              ]
            }
          };
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
<style>
.demo{
  padding: 20px;
}
page{
--nut-comment-header-user-name-color:red;
--nut-comment-header-time-color:red;
--nut-comment-bottom-label-color:red;
--nut-comment-shop-color:green;
}
</style>

