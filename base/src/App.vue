<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <nut-icon type="self" :url="require('./assets/after-sale.svg')">
    </nut-icon>
    <nut-button @click="openCalendar">
      打开日历
    </nut-button>
    <nut-button @click="openDate=true">
      打开日期
    </nut-button>
    <nut-datepicker startDate='2020-05-18' endDate='2021-05-20' :is-visible="openDate" @close="openDate=false"
      title="请选择日期" type="date" />
    <nut-button @click="showPopup=true">
      打开地址组件
    </nut-button>

    <nut-calendar :is-visible.sync="isVisible" :default-value="date" type="range" :start-date="null" :end-date="null"
      :animation="`nutSlideUp`" @close="switchPickerClose" @choose="setChooseValue">
    </nut-calendar>

    <nut-address v-model="showPopup" :province="province" :city="city" :country="country" :town="town"
      @onChange="onChange" customAddressTitle="请选择所在地区"></nut-address>

    <nut-button @click.native="popupshow= true">展示弹出层</nut-button>

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

    <nut-switch :active="true">
    </nut-switch>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      date: null,
      showPopup: false,
      openDate: false,
      popupshow: false,
      searchBarValue: "",
      navList: [
        {
          id: 1,
          text: "首页",
          icon:
            "https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png",
        },
        {
          id: 2,
          text: "分类",
          icon:
            "https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png",
        },
        {
          id: 3,
          text: "购物车",
          num: 2,
          icon:
            "https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png",
        },
        {
          id: 4,
          text: "我的",
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
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    height: 200px;
    width: 200px;
  }

  .nut-button {
    margin-bottom: 20px;
  }
}
</style>
