<template>
    <view class="seckill">
        <view class="seckill-top">
            <view class="seckill-title-countdown">
                <view class="seckill-title">京东秒杀</view>
                <view class="seckill-countdown">
                    <view class="seckill-countdown-type">12点场</view>
                    <nut-countdown :end-time="end" />
                </view>
            </view>
            <view class="seckill-arrow-box">爆款轮番秒<nut-icon name="arrow-right" size="11" /></view>
        </view>
        <view class="seckill-bottom">
            <view v-for="(product, index) in seckillProducts" :key="index" class="seckill-product">
                <view>
                    <img :src="product.img" />
                </view>
                <view class="seckill-product-price">¥{{product.price}}</view>
            </view>
        </view>
    </view>
</template>

<script>
import {reactive, toRefs} from 'vue'
export default {
    name: 'Seckill',
    setup() {
        const state = reactive({
            end: Date.now() + 60 * 1000,
            seckillProducts: [
                {
                    img: require('../../../asset/images/seckillProducts/product1.jpeg'),
                    price: 11.99
                },
                {
                    img: require('../../../asset/images/seckillProducts/product1.jpeg'),
                    price: 11.99
                },
                {
                    img: require('../../../asset/images/seckillProducts/product1.jpeg'),
                    price: 11.99
                },
                {
                    img: require('../../../asset/images/seckillProducts/product1.jpeg'),
                    price: 11.99
                },
                {
                    img: require('../../../asset/images/seckillProducts/product1.jpeg'),
                    price: 11.99
                },
                {
                    img: require('../../../asset/images/seckillProducts/product1.jpeg'),
                    price: 11.99
                }
            ]
        })

        return {
            ...toRefs(state)
        }
    }
}
</script>