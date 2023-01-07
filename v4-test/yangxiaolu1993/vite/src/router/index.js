import { createRouter,createWebHistory } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue';
import Button from '../components/button.vue'
import Price from '../components/price.vue'
import Layout from '../components/layout.vue'
import ActionSheet from '../components/actionsheet.vue'
import Drag from '../components/drag.vue'

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
        }
    ]
})
export default router;