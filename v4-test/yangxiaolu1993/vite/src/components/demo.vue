<template>
  <nut-cell title="不可售" desc="" @click="notSell = true"></nut-cell>
  <nut-sku
    v-model:visible="notSell"
    :sku="sku"
    :goods="goods"
    :btnExtraText="btnExtraText"
    @changeStepper="changeStepper"
    @selectSku="selectSku"
  >
    <template #sku-operate>
      <div class="sku-operate-box">
        <nut-button class="sku-operate-box-dis" type="warning">查看相似商品</nut-button>
        <nut-button class="sku-operate-box-dis" type="info">到货通知</nut-button>
      </div>
    </template>
  </nut-sku>
</template>
<script lang="ts">
import { ref,reactive,onMounted,toRefs} from 'vue';
export default {
setup() {
    const notSell = ref(false);
    const data = reactive({
      sku: [],
      goods: {}
    });

    const btnExtraText = ref('抱歉，此商品在所选区域暂无存货');

    onMounted(() => {
        fetch('https://storage.360buyimg.com/nutui/3x/data.js')
          .then((response) => response.json())
          .then((res) => {
            const { Sku, Goods, imagePathMap } = res;
            data.sku = Sku;
            data.goods = Goods;
          }) //执行结果是 resolve就调用then方法
          .catch((err) => console.log('Oh, error', err)); //执行结果是 reject就调用catch方法
    });

    // inputNumber 更改
    const changeStepper = (count: number) => {
      console.log('购买数量', count);
    };

    // 切换规格类目
    const selectSku = (ss: string) => {
      const { sku, skuIndex, parentSku, parentIndex } = ss;
      if (sku.disable) return false;
      data.sku[parentIndex].list.forEach((s) => {
        s.active = s.id == sku.id;
      });
      data.goods = {
        skuId: sku.id,
        price: '4599.00',
        imagePath:
          '//img14.360buyimg.com/n4/jfs/t1/216079/14/3895/201095/618a5c0cEe0b9e2ba/cf5b98fb6128a09e.jpg' 
      };
    };
    // 底部操作按钮触发
    const clickBtnOperate = (op:string)=>{
      console.log('点击了操作按钮',op)
    } 
    return { notSell, changeStepper,selectSku,btnExtraText,...toRefs(data) };
  }
}
</script>
<style>
.sku-operate-box {
  width: 100%;
  display: flex;
  padding: 8px 10px;
  box-sizing: border-box;
}
.sku-operate-box-dis{
    flex:1
}
.sku-operate-box-dis:first-child{
  margin-right: 18px;
}
</style>
