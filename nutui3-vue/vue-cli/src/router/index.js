import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/index.vue'
import NoticeBar from '../views/noticebar/index.vue'
import Infinite from '../views/InfiniteLoading/index.vue'
const routes = [{
    path:'/',
    name:'/',
    component: Index
},{
    path:'/noticebar',
    name:'main',
    component: NoticeBar
},{
    path:'/infinite',
    name:'infinite',
    component: Infinite
}]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;