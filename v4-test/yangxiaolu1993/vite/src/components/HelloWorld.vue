<template>
  <div>
    <nut-image-preview :show="showPreview" :images="imgData" :init-no="3" @close="hideFn"/>
    <nut-cell title="我是标题" desc="描述文字1" @click="showFn"></nut-cell>


    <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
      <nut-swiper-item v-for="item in list" :key="item">
          <img :src="item" alt="" />
        </nut-swiper-item>
    </nut-swiper>

    <nut-cell-group title="标签式使用">
      <nut-cell title="组件调用" @click="componentClick"></nut-cell>
      <nut-dialog
        teleport="#app"
        title="组件调用"
        content="如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。"
        v-model:visible="visible"
      >
      </nut-dialog>
      <!-- <nut-cell title="底部按钮 垂直使用" @click="componentvVrticalClick"></nut-cell>
      <nut-dialog
        footer-direction="vertical"
        teleport="#app"
        title="组件调用"
        content="如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。"
        v-model:visible="visible1"
      >
      </nut-dialog> -->
    </nut-cell-group>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs,ref,onMounted } from 'vue';
export default {
  setup() {
      const resData = reactive({
          showPreview: false,
          imgData: [
              {
                  src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg',
              },
              {
                  src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
              },
              {
                  src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
              },
              {
                  src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
              },
          ],
          page: 2,
          list: [] as string[]
      });

      const showFn = () => {
          resData.showPreview = true;
      }

      const hideFn = () => {
          resData.showPreview = false;
      }

      const visible = ref(false);
      const visible1 = ref(false);
      const componentClick = () => {
        visible.value = true;
      };

      onMounted(() => {
        setTimeout(() => {
          resData.list = [
            'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
            'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
            'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
            'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
          ];
        }, 3000);
      });
      
      return {
          ...toRefs(resData),
          showFn,
          hideFn,
          componentClick,
          visible,
          visible1
      };
  }
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
</style>