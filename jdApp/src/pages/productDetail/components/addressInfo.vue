<template>
  <div class="address_info">
    <div class="selected_info" @click="showAddressExist">
      <span>已选</span>
      <div class="container">
        <div class="user-address">
          <nut-icon name="location2" color="#f2270c" size="12px"></nut-icon>
          <nut-ellipsis :content="text" direction="end"></nut-ellipsis>
        </div>
        <div class="express">
          <span class="red_text">现货</span>
          <span>23:00前下单，预计<b>明天(09月22日)</b> 送达</span>
        </div>
        <div class="service">
          <ul>
            <li class="detail_serve_item ">
              京东发货&售后
            </li>
            <li class="detail_serve_item ">
              支持7天无理由退货
            </li>
            <li class="detail_serve_item ">
              不参与秒杀满减和赠品等优惠活动
            </li>
          </ul>
        </div>
      </div>
      <nut-icon name="more-x"></nut-icon>
    </div>
    <nut-address
      v-model:visible="showPopupExist"
      type="exist"
      :exist-address="existAddress"
      @close="close"
      :is-show-custom-address="false"
      @selected="selected"
      exist-address-title="配送至"
    ></nut-address>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const showPopupExist = ref(false);
    const existAddress = ref([
      {
        id: 1,
        addressDetail: "",
        cityName: "次渠镇",
        countyName: "通州区",
        provinceName: "北京市",
        selectedAddress: true,
        townName: "",
        name: "探探鱼",
        phone: "182****1718",
      },
      {
        id: 2,
        addressDetail: "",
        cityName: "钓鱼岛全区",
        countyName: "",
        provinceName: "钓鱼岛",
        selectedAddress: false,
        townName: "",
        name: "探探鱼",
        phone: "182****1718",
      },
      {
        id: 3,
        addressDetail: "京东大厦",
        cityName: "大兴区",
        countyName: "科创十一街18号院",
        provinceName: "北京市",
        selectedAddress: false,
        townName: "",
        name: "探探鱼",
        phone: "182****1718",
      },
    ]);
    const showAddressExist = () => {
      showPopupExist.value = true;
    };
    const text = ref(
      "北京大兴区亦庄经济开发区科创十一街与经海四路交叉口西北150米京东总部4号楼"
    );
    const close = (val) => {
      if (val.type == "exist") {
        const {
          provinceName,
          cityName,
          countyName,
          townName,
          addressDetail,
        } = val.data;
        text.value =
          provinceName + cityName + countyName + townName + addressDetail;
      } else {
        text.value = val.data.addressStr;
      }
    };

    const selected = (prevExistAdd, nowExistAdd, arr) => {
      console.log(prevExistAdd);
      console.log(nowExistAdd);
    };
    return {
      showPopupExist,
      existAddress,
      showAddressExist,
      text,
      close,
      selected,
    };
  },
};
</script>
<style lang="scss">
.address_info {
  background-color: #fff;
  border-radius: 12px;
  margin-top: 12px;
  padding: 24px 18px;
  .selected_info {
    display: flex;
    font-size: 13px;
    color: #333;
    span {
      width: 38px;
      font-weight: 700;
      flex-shrink: 0;
    }
    .container {
      flex: 1;
      .user-address {
        display: flex;
        align-items: center;
      }
      .nut-ellipsis {
        flex: 1;
        margin-left: 4px;
      }
      .express {
        .red_text {
          color: #f2270c;
          margin-right: 3px;
        }
        span {
          font: inherit;
          font-size: 13px;
          color: #999;
          b {
            font: inherit;
          }
        }
      }
      .service {
        padding-top: 15px;
        .detail_serve_item {
          color: #8c8c8c;
          display: inline-block;
          line-height: 1;
          padding: 3px 12px 3px 0;
          &::before {
            background: url(//jstatic.3.cn/static/icon_can_choose_jd.dba11276.png?__inline)
              no-repeat;
            background-size: 11px auto;
            content: "";
            display: inline-block;
            height: 11px;
            margin-right: 6px;
            margin-top: -2px;
            vertical-align: middle;
            width: 11px;
          }
        }
      }
    }
  }
}
</style>
