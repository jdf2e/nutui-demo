<template>
  <view class="index">
    <h2>自定义索引</h2>
    <nut-elevator
      ref="elevator"
      :index-list="dataList2"
      :height="220"
      @click-item="clickItem"
      @click-index="clickIndex"
    >
    </nut-elevator>
    <view class="btn">
      <nut-button type="primary" @click="handleClick">点我</nut-button>
    </view>
    <h2>自定义内容</h2>
    <nut-elevator
      :index-list="dataList"
      :height="260"
      @click-item="clickItem"
      @click-index="clickIndex"
      :is-sticky="true"
    >
      <template v-slot:default="slotProps">
        自定义<span :style="{ marginLeft: '15px' }">{{
          slotProps.item.name
        }}</span>
      </template>
    </nut-elevator>
    <h2>steps</h2>
    <nut-steps :current="current1" @click-step="handleClickStep">
      <nut-step title="步骤一" content="步骤描述">
        1
        <template #title>Slots title</template>
        <template #content>Slots content</template>
        <template #icon>icon</template>
      </nut-step>
      <nut-step title="未开始" content="步骤描述">2</nut-step>
      <nut-step title="未开始" content="步骤描述">3</nut-step>
    </nut-steps>
    <div class="steps-button">
      <nut-button size="mini" type="primary" @click="handleStep('current1')"
        >下一步</nut-button
      >
    </div>
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
  </view>
</template>

<script>
import { reactive, toRefs, ref, onMounted } from "vue";
export default {
  name: "Index",
  components: {},
  setup() {
    const elevator = ref(null);
    const swiper = ref(null);
    const state = reactive({
      acceptKey: "num",
      dataList: [
        {
          title: "A",
          list: [
            {
              name: "安徽",
              id: 1,
            },
          ],
        },
        {
          title: "B",
          list: [
            {
              name: "北京",
              id: 2,
            },
          ],
        },
        {
          title: "G",
          list: [
            {
              name: "广西",
              id: 3,
            },
            {
              name: "广东",
              id: 4,
            },
          ],
        },
        {
          title: "H",
          list: [
            {
              name: "湖南",
              id: 5,
            },
            {
              name: "湖北",
              id: 6,
            },
          ],
        },
      ],
      dataList2: [
        {
          num: "一",
          list: [
            {
              name: "北京",
              id: 1,
            },
            {
              name: "上海",
              id: 2,
            },
            {
              name: "深圳",
              id: 3,
            },
            {
              name: "广州",
              id: 4,
            },
            {
              name: "杭州",
              id: 5,
            },
          ],
        },
        {
          num: "二",
          list: [
            {
              name: "成都",
              id: 6,
            },
            {
              name: "西安",
              id: 7,
            },
            {
              name: "天津",
              id: 8,
            },
            {
              name: "武汉",
              id: 9,
            },
            {
              name: "长沙",
              id: 10,
            },
            {
              name: "重庆",
              id: 11,
            },
            {
              name: "苏州",
              id: 12,
            },
            {
              name: "南京",
              id: 13,
            },
          ],
        },
        {
          num: "三",
          list: [
            {
              name: "西宁",
              id: 14,
            },
            {
              name: "兰州",
              id: 15,
            },
            {
              name: "石家庄",
              id: 16,
            },
            {
              name: "秦皇岛",
              id: 17,
            },
            {
              name: "大连",
              id: 18,
            },
            {
              name: "哈尔滨",
              id: 19,
            },
            {
              name: "长春",
              id: 20,
            },
            {
              name: "太原",
              id: 21,
            },
          ],
        },
      ],
      current1: 1,
      page: 2,
      page3: 0,
      current: 1,
      list: [],
      list1: [
        "https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg",
        "https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg",
        "https://storage.360buyimg.com/jdc-article/welcomenutui.jpg",
        "https://storage.360buyimg.com/jdc-article/fristfabu.jpg",
      ],
    });

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

    const clickItem = (key: string, item: any) => {
      console.log(key, JSON.stringify(item));
    };

    const clickIndex = (key: string) => {
      console.log(key);
    };

    const handleClick = () => {
      console.log("scrollTo");
      elevator.value.scrollTo(0);
    };

    const handleStep = (params: any) => {
      if (state[params] >= 3) {
        state[params] = 1;
      } else {
        state[params] += 1;
      }
    };

    const handleClickStep = (index: number) => {
      console.log(index);
    };

    const change = (index: number) => {
      console.log("swiper", index);
      state.current = index + 1;
    };

    const handlePrev = () => {
      swiper.value.prev();
    };
    const handleNext = () => {
      swiper.value.next();
    };

    return {
      elevator,
      ...toRefs(state),
      clickItem,
      clickIndex,
      handleClick,
      handleClickStep,
      handleStep,
      change,
      swiper,
      handlePrev,
      handleNext,
    };
  },
};
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.nut-swiper-item {
  line-height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
}

.nut-swiper-item {
  line-height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
  // &::v-deep(.nut-swiper-pagination-vertical) {
  //   i {
  //     width: 6px;
  //     height: 6px;
  //     border-radius: 50%;
  //     &.active {
  //       height: 18px;
  //       border-radius: 5px;
  //     }
  //   }
  // }
}
</style>
