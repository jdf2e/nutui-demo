<template>
  <div id="app">
    <nut-card content="这里是默认卡片内容" :footer-buttons="footerButtons">
    </nut-card>
    <nut-steps>
      <nut-step title="已签收" content="您的订单已由本人签收。如有疑问您可以联系配送员，感谢您在京东购物。" time="2020-03-03 11:09:96">
        <template v-slot:status-icon>
          <nut-icon type="self" :url="require('./assets/svg/finish.svg')"></nut-icon>
        </template>
      </nut-step>
      <nut-step title="运输中" content="您的订单已达到京东【北京旧宫营业部】" time="2020-03-03 11:09:06">
        <template v-slot:status-icon>
          <nut-icon type="self" :url="require('./assets/svg/processed.svg')"></nut-icon>
        </template>
      </nut-step>
      <nut-step content="您的订单已达到京东【北京旧宫营业部】" time="2020-03-03 11:09:06"></nut-step>
      <nut-step content="您的订单由京东【北京顺义分拣中心】送往【北京旧宫营业部】" time="2020-03-03 11:09:06"></nut-step>
      <nut-step title="已下单" content="您提交了订单，请等待系统确认" time="2020-03-03 11:09:06">
        <template v-slot:status-icon>
          <nut-icon type="self" :url="require('./assets/svg/processed.svg')"></nut-icon>
        </template>
      </nut-step>
    </nut-steps>
    <nut-rate :value="5">
    </nut-rate>
    <nut-tag disabled>
      标签
    </nut-tag>
    <nut-noticebar :close-mode="true">华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！
    </nut-noticebar>
    <nut-badge :value="9" :max="99" class="item">拜访提醒</nut-badge>
    <nut-badge :value="99" :max="99" class="item">拜访提醒</nut-badge>
    <nut-badge :value="200" :max="99" class="item">拜访提醒</nut-badge>
    <nut-navbar style="position:fixed;left:0;top:0;right:0;z-index:1111">
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
    <nut-cell isLink title="展示图片预览" :showIcon="true" @click.native="showPreview = true"></nut-cell>
    <nut-imagepreview v-model="showPreview" :images="dataImgItem" @close="showPreview = false" />

    <nut-tabbar :tabbar-list="navList" :bottom="true"> </nut-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerButtons: [
        { event: "click1", clickName: "操作一" }, // event的值 对应组件的点击事件 clickName为按钮显示的文案
        { event: "click2", clickName: "操作二" },
      ],
      showPreview: false,
      isVisible: false,
      isVisible1: false,
      date: null,
      showPopup: false,
      openDate: false,
      popupshow: false,
      searchBarValue: "",
      dataImgItem: [
        {
          imgSrc:
            "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg",
        },
        {
          imgSrc:
            "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png",
        },
        {
          imgSrc:
            "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg",
        },
        {
          imgSrc:
            "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg",
        },
      ],
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

.item {
  margin: 16px 26px 10px 10px;
  line-height: 15px;
  font-family: PingFangSC-Regular;
  font-size: 15px;
  color: #646464;
}

.demo-w {
  margin: 0;
  background: white;
}

.demo-svg {
  display: inline-block;
  height: 17px;
  width: 19px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
