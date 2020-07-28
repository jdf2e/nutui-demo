<template>
  <div id="app">
    <nut-noticebar :close-mode="true">华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！
    </nut-noticebar>
    <nut-navbar style="position:fixed;left:0;top:0;right:0;z-index:1111" @on-click-back="back" @on-click-close="close"
      @on-click-title="title" @on-click-search="search" @on-click-more="more">
    </nut-navbar>
    <nut-tab>
      <nut-tab-panel tab-title="页签一">

        <nut-button @click="openCalendar">
          打开日历
        </nut-button>

      </nut-tab-panel>
      <nut-tab-panel tab-title="页签二">
        <nut-switch :active="true">
        </nut-switch>
      </nut-tab-panel>
      <nut-tab-panel tab-title="页签三">
        <nut-button @click="openDate=true">
          打开日期
        </nut-button>

      </nut-tab-panel>
      <nut-tab-panel tab-title="页签四">

        <nut-button @click="showPopup=true">
          打开地址组件
        </nut-button>
        <nut-button @click.native="popupshow= true">展示弹出层</nut-button>
      </nut-tab-panel>
    </nut-tab>
    <nut-datepicker startDate='2020-05-18' endDate='2021-05-20' :is-visible="openDate" @close="openDate=false"
      title="请选择日期" type="date" />
    <nut-calendar :is-visible.sync="isVisible" :default-value="date" type="range" :start-date="null" :end-date="null"
      :animation="`nutSlideUp`" @close="switchPickerClose" @choose="setChooseValue">
    </nut-calendar>

    <nut-address v-model="showPopup" :province="province" :city="city" :country="country" :town="town"
      @onChange="onChange" customAddressTitle="请选择所在地区"></nut-address>

    <nut-popup position="bottom" :style="{ height: '80%' }" v-model="popupshow" @close="popupClose"
      :destroy-on-close="true">
      <div class="matter-container">
        <section class="matter-content">
          <nut-searchbar ref='mySearchBarInput' v-model="searchBarValue" @clear="clear" customClass="search_bar"
            placeText="ERP/姓名/邮箱" :hasIcon="true" :hasSearchButton="false">
          </nut-searchbar>
        </section>
      </div>
    </nut-popup>

    <div class="cell-box" style="width:100%">
      <nut-cell :show-icon="true" title="我的主页" @click-cell="clickEvnt">
        <template slot="avatar">
          <img width="24" height="24" class="avatar-img" src="./assets/img/ic_me.png" />
        </template>
      </nut-cell>
      <nut-cell :show-icon="true" title="店铺定位" desc="查看店铺" @click-cell="clickEvnt">
        <template slot="avatar">
          <img width="24" height="24" class="avatar-img" src="./assets/img/ic_location.png" />
        </template>
      </nut-cell>
      <nut-cell :show-icon="true" title="我的收藏" @click-cell="clickEvnt">
        <template slot="avatar">
          <img width="24" height="24" class="avatar-img" src="./assets/img/ic_collect.png" />
        </template>
      </nut-cell>
      <nut-cell :show-icon="true" title="设置" desc="版本升级" @click-cell="clickEvnt">
        <template slot="avatar">
          <img width="24" height="24" class="avatar-img" src="./assets/img/ic_set.png" />
        </template>
      </nut-cell>
      <nut-cell title="打开Dialog" @click-cell="dialogOpen"></nut-cell>

      <nut-cell :show-icon="true" title="ActionSheet 基础样式" :desc="'123'" @click.native="isVisible1=true">
      </nut-cell>
      <nut-actionsheet :is-visible="isVisible1" @close="isVisible=false" :option-list="optionList" @choose="choose">
      </nut-actionsheet>

      <nut-leftslip v-for="(item, index) in list" :key="item.id" ref="leftslip">
        <div slot="slip-main" class="slip-main">
          <nut-cell class="cell-item" :title="item.title" :sub-title="item.subTitle">
            <template slot="avatar">
              <nut-avatar sizeNum="60" :bg-image="require('./assets/logo.png')" bg-icon></nut-avatar>
            </template>
            <template slot="desc">
              <p class="timer">{{item.time}}</p>
              <p class="badge">
                <nut-badge :is-dot="item.isDot" :value="item.value" :max="99" top="0px" right="15px"></nut-badge>
              </p>
            </template>
          </nut-cell>
        </div>
        <div slot="slipbtns" class="slipbtns"><a href="javascript:;" @click="delItem(index)">删除</a>
        </div>
      </nut-leftslip>
    </div>

    <nut-tabbar :tabbar-list="navList" :bottom="true"> </nut-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      isVisible1: false,
      date: null,
      showPopup: false,
      openDate: false,
      popupshow: false,
      searchBarValue: "",
      list: [
        {
          id: "add1",
          title: "噜啦噜1",
          subTitle: "我又来送福利啦！关注之后你就会",
          time: "10:13",
          isDot: false,
          value: 9,
        },
        {
          id: "add2",
          title: "噜啦噜2",
          subTitle: "我又来送福利啦！关注之后你就会",
          time: "10:12",
          isDot: true,
          value: 1,
        },
        {
          id: "add5",
          title: "噜啦噜5",
          subTitle: "我又来送福利啦！关注之后你就会",
          time: "1小时前",
          isDot: false,
          value: 99,
        },
        {
          id: "add8",
          title: "噜啦噜8",
          subTitle: "我又来送福利啦！关注之后你就会",
          time: "星期五",
          isDot: false,
          value: 100,
        },
      ],
      optionList: [
        {
          name: "选项A",
          value: 0,
        },
        {
          name: "选项B",
          value: 1,
        },
        {
          name: "选项C",
          value: 1,
        },
      ],
      navList: [
        {
          id: 1,
          tabTitle: "首页",
          icon:
            "https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png",
        },
        {
          id: 2,
          tabTitle: "分类",
          icon:
            "https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png",
        },
        {
          id: 3,
          tabTitle: "购物车",
          num: 2,
          icon:
            "https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png",
        },
        {
          id: 4,
          tabTitle: "我的",
          icon:
            "https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png",
        },
      ],
      province: [
        { id: 1, name: "北京" },
        { id: 2, name: "广西" },
        { id: 3, name: "江西" },
        { id: 4, name: "四川" },
      ], // 省
      city: [
        { id: 7, name: "朝阳区" },
        { id: 8, name: "崇文区" },
        { id: 9, name: "昌平区" },
        { id: 6, name: "石景山区" },
      ], // 市
      country: [
        { id: 3, name: "八里庄街道" },
        { id: 9, name: "北苑" },
        { id: 4, name: "常营乡" },
      ], // 县
      town: [], // 镇
    };
  },
  mounted() {
    this.$toast.text("欢迎您使用nutui");
  },
  methods: {
    choose(e) {
      console.log(e);
    },
    dialogOpen() {
      this.$dialog({
        title: "确定删除此订单？",
        content: "删除后将从你的记录里消失，无法找回",
        onOkBtn() {
          this.close(); //关闭对话框
        },
      });
    },
    clickEvnt() {
      console.log("clickEvnt");
    },
    clear() {
      console.log("clear");
    },
    popupClose() {
      // this.$refs.mySearchBarInput.clearInput();
    },
    onChange(event) {
      console.log(event);
    },
    openCalendar() {
      this.isVisible = true;
    },
    switchPickerClose(event) {
      console.log("switchPickerClose", event);
    },
    setChooseValue(param) {
      this.date = [...[param[0][3], param[1][3]]];
      console.log(this.date);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 60px;
  padding-bottom: 60px;
  overflow: auto;
  // display: flex;
  // flex-direction: column;

  > img {
    height: 200px;
    width: 200px;
  }
}
</style>
