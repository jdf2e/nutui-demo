<template>
  <view class="index">
    <nut-avatar>
      <img
        src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
      />
    </nut-avatar>
    <nut-avatar><My /></nut-avatar>
    <nut-avatar>王</nut-avatar>
    <nut-address-list
      :data="data"
      @click-item="clickItem"
      @del-icon="delClick"
      @edit-icon="editClick"
      :show-bottom-button="false"
      :dataMapOptions="dataOptions"
      swipe-edition
    >
    </nut-address-list>
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
    <nut-swipe>
      <nut-cell round-radius="0" desc="左滑删除" />
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger"
          >删除</nut-button
        >
      </template>
    </nut-swipe>
    <nut-swipe disabled>
      <nut-cell round-radius="0" desc="禁止滑动" />
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger"
          >删除</nut-button
        >
      </template>
    </nut-swipe>
    <nut-swipe>
      <template #left>
        <nut-button shape="square" style="height: 100%" type="success"
          >选择</nut-button
        >
      </template>
      <nut-cell round-radius="0" desc="左滑右滑都可以哦" />
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger"
          >删除</nut-button
        >
        <nut-button shape="square" style="height: 100%" type="info"
          >收藏</nut-button
        >
      </template>
    </nut-swipe>
    <nut-swipe name="last" ref="refSwipe" @open="open" @close="close">
      <nut-cell title="异步打开关闭">
        <template v-slot:link>
          <nut-switch
            v-model="checked"
            @change="changSwitch"
            active-text="开"
            inactive-text="关"
          />
        </template>
      </nut-cell>
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger"
          >删除</nut-button
        >
      </template>
    </nut-swipe>
    <nut-swipe>
      <template #left>
        <nut-button shape="square" style="height: 100%" type="success"
          >选择</nut-button
        >
      </template>
      <nut-cell title="商品描述">
        <template v-slot:link>
          <nut-input-number v-model="number" />
        </template>
      </nut-cell>
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger"
          >删除</nut-button
        >
        <nut-button shape="square" style="height: 100%" type="info"
          >收藏</nut-button
        >
      </template>
    </nut-swipe>
  </view>
</template>

<script>
import { reactive, toRefs, ref, onMounted } from "vue";
import { My } from '@nutui/icons-vue';
export default {
  name: "Index",
  components: {},
  setup() {
    const elevator = ref(null);
    const swiper = ref<HTMLElement>();
      const data = ref([
      {
        testid:3,
        testaddressName:'姓名',
        phone:'123****4567',
        defaultAddress:false,
        fullAddress:'北京市通州区测试测试测试测试测试测试测试测试测试'
      },
      {
        testid:4,
        testaddressName:'姓名',
        phone:'123****4567',
        defaultAddress:true,
        fullAddress:'北京市通州区测试测试测试测试测试测试测试测试测试'
      },
    ]);
    const dataOptions = reactive({
      id: 'testid',
      addressDetail:'testaddressDetail',
      addressName:'testaddressName'
    });
    const clickItem = ()=>{
      console.log('Click To Address');
    }
    const delClick = ()=>{
      console.log('Click To Delete');
    }
    const editClick = ()=>{
      console.log('Click To Edit');
    }
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

    // const clickItem = (key, item) => {
    //   console.log(key, JSON.stringify(item));
    // };

    const clickIndex = (key) => {
      console.log(key);
    };

    const handleClick = () => {
      console.log("scrollTo");
      elevator.value.scrollTo(0);
    };

    const handleStep = (params) => {
      if (state[params] >= 3) {
        state[params] = 1;
      } else {
        state[params] += 1;
      }
    };

    const handleClickStep = (index) => {
      console.log(index);
    };

    const change = (index) => {
      console.log("swiper", index);
      state.current = index + 1;
    };

    const handlePrev = () => {
      swiper.value.prev();
    };
    const handleNext = () => {
      swiper.value.next();
    };

    const number = ref(0);
    const refSwipe = ref<HTMLElement>();
    const checked = ref(false);
    const changSwitch = (value) => {
      if (value) {
        refSwipe.value?.open("left");
      } else {
        refSwipe.value?.close();
      }
    };
    const open = (obj) => {
      console.log('open', obj);
      checked.value = true;
    };
    const close = (obj) => {
      console.log('close', obj);
      checked.value = false;
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
      checked,
      changSwitch,
      refSwipe,
      open,
      close,
      number,
      data,
      clickItem,
      delClick,
      editClick,
      dataOptions
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
  overflow-x: hidden;
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
