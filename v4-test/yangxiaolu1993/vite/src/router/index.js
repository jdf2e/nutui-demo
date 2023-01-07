import { createRouter,createWebHistory } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue';
import Button from '../components/button.vue'
import Price from '../components/price.vue'
import Layout from '../components/layout.vue'
import ActionSheet from '../components/actionsheet.vue'
import Drag from '../components/drag.vue'
import Signature from '../components/signature.vue'
import Timeselect from '../components/timeselect.vue'
import skeleton from '../components/skeleton.vue'
import sidenavbar from '../components/sidenavbar.vue'
import cascader from '../components/cascader.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:HelloWorld,
        },
        {
            path:'/button',
            component:Button,
        },
        {
            path:'/price',
            component:Price,
        },
        {
            path:'/layout',
            component:Layout,
        },
        {
            path:'/actionsheet',
            component:ActionSheet
        },
        {
            path:'/drag',
            component:Drag
        },
        {
            path:'/signature',
            component:Signature
        },
        {
            path:'/timeselect',
            component:Timeselect
        },
        {
            path:'/skeleton',
            component:skeleton
        },
        {
            path:'/sidenavbar',
            component:sidenavbar
        },{
            path:'/cascader',
            component:cascader
        }
    ]
})
export default router;