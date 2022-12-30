import { createRouter,createWebHistory } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue';
import Button from '../components/button.vue'

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
        }
    ]
})
export default router;