import { createRouter, createWebHashHistory } from "vue-router";
import List from '@/views/List.vue';
import Empty from '@/views/Empty.vue';
const routes = [{
    path: '/',
    name: 'index',
    component: List, 
  },
  
  {
    path: '/Empty',
    name: 'Empty',
    component: Empty
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
