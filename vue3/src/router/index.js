import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/index.vue'
import NoticeBar from '../views/noticebar/index.vue'
const routes = [{
    path:'/',
    name:'/',
    component: Index
},{
    path:'/noticebar',
    name:'main',
    component: NoticeBar
}]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;