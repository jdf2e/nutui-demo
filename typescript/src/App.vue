<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <nut-button>定制按钮样式</nut-button>
    <nut-switch :active="true"></nut-switch>
    <nut-drag direction="y" :style="{right:'0px',bottom:'50px'}">
      <nut-fixednav active-text="右侧收起" un-active-text="右侧展开" :nav-list="navList">
      </nut-fixednav>
    </nut-drag>

    <nut-countup :init-num='0' :end-num='200'></nut-countup>

    <nut-countup :init-num='150.00' :end-num='0.00' :speed='2.62' :to-fixed='2'></nut-countup>

    <nut-countup :init-num='1000.00' :end-num='0.00' :speed='6.3' :start-flag='startNum' :to-fixed='2'></nut-countup>

    <nut-magic  :data="dataArr"></nut-magic>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  mounted(): void {
    this.$toast.text("欢迎您使用nutui");

    this.$notify.text("欢迎您使用nutui");
  }

  dataArr: any[] = [
    {
      type: "rank",
      name: "name1",
      pictureUrl:
        "https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg",
      desc: "desc",
      link: "link",
    },
    {
      type: "rank",
      name: "name2",
      pictureUrl:
        "https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg",
      desc: "desc",
      link: "link",
    },
    {
      type: "lbs",
      name: "name3",
      pictureUrl:
        "https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg",
      desc: "desc",
      link: "link",
    },
    {
      type: "lbs",
      name: "name4",
      pictureUrl:
        "https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg",
      desc: "desc",
      link: "link",
    },
    {
      type: "act",
      name: "name5",
      pictureUrl:
        "https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg",
      desc: "desc",
      link: "link",
    },
    {
      type: "act",
      name: "name6",
      pictureUrl:
        "https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg",
      desc: "desc",
      link: "link",
    },
    {
      type: "rank",
      name: "name7",
      pictureUrl:
        "https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg",
      desc: "desc",
      link: "link",
    },
    {
      type: "rank",
      name: "name8",
      pictureUrl:
        "https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg",
      desc: "desc",
      link: "link",
    },
  ];

  navList: any[] = [
    {
      id: 1,
      text: "首页",
      icon: "https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png",
    },
    {
      id: 2,
      text: "分类",
      icon: "https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png",
    },
    {
      id: 3,
      text: "购物车",
      num: 2,
      icon: "https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png",
    },
    {
      id: 4,
      text: "我的",
      icon: "https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png",
    },
  ];
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
