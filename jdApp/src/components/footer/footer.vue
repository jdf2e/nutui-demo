<template>
    <view>
        <nut-tabbar
            :bottom="true"
            unactive-color="#333"
            active-color="#f00"
        >
            <nut-tabbar-item
                v-for="(item, index) in items"
                :key="index"
                :tab-title="item.title"
                :img="item.img"
                :activeImg="item.activeImg"
            ></nut-tabbar-item>
        </nut-tabbar>
    </view>
</template>

<script>
export default {
    setup() {
        const items = [
            {
                title: '首页',
                img: require('../../asset/images/footer/home.png'),
                activeImg: require('../../asset/images/footer/home_hover.png')
            },
            {
                title: '分类',
                img: require('../../asset/images/footer/category.png'),
                activeImg: require('../../asset/images/footer/category_hover.png')
            },
            {
                title: '附近生活圈',
                img: require('../../asset/images/footer/life.png'),
                activeImg: require('../../asset/images/footer/life_hover.png')
            },
            {
                title: '购物车',
                img: require('../../asset/images/footer/cart.png'),
                activeImg: require('../../asset/images/footer/cart_hover.png')
            },
            {
                title: '我的',
                img: require('../../asset/images/footer/my.png'),
                activeImg: require('../../asset/images/footer/my_hover.png')
            }
        ]

        return {
            items
        }
    },
}
</script>