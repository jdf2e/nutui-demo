<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nutui-demo
      </h1>
      <h2 class="subtitle">
        My unreal Nuxt.js project
      </h2>
      <nut-tab @tab-switch="tabSwitch">
        <nut-tab-panel tab-title="页签1">
          <p>页签1</p>
          <nut-button>定制按钮样式</nut-button>
          <nut-switch :active="true"></nut-switch>
        </nut-tab-panel>
        <nut-tab-panel tab-title="页签2">页签2</nut-tab-panel>
        <nut-tab-panel tab-title="页签3">页签3</nut-tab-panel>
      </nut-tab>

      <nut-drag direction="y" :style="{right:'0px',bottom:'50px'}">
        <nut-fixednav active-text="右侧收起" un-active-text="右侧展开" :nav-list="navList">
        </nut-fixednav>
      </nut-drag>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
export default {
  data() {
    return {
      navList: [
        {
          id: 1,
          text: "首页",
          icon:
            "https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png"
        },
        {
          id: 2,
          text: "分类",
          icon:
            "https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png"
        },
        {
          id: 3,
          text: "购物车",
          num: 2,
          icon:
            "https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png"
        },
        {
          id: 4,
          text: "我的",
          icon:
            "https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png"
        }
      ]
    };
  },
  components: {
    Logo
  },
  methods: {
    tabSwitch(index, event) {
      console.log(index + "--" + event.target);
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
