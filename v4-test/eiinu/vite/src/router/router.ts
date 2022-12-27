import { createRouter, createWebHashHistory } from "vue-router";
import CellDemo from '@/views/CellDemo.vue';
import OverlayDemo from '@/views/OverlayDemo.vue';
import ImagePreviewDemo from '@/views/ImagePreviewDemo.vue';
import List from '@/views/List.vue';

const routes = [
  {
    path: "/",
    name: 'home',
    component: List
  },
  {
    path: "/cell",
    name: "cell",
    component: CellDemo
  },
  {
    path: "/overlay",
    name: "overlay",
    component: OverlayDemo
  },
  {
    path: "/image-preview",
    name: "image-preview",
    component: ImagePreviewDemo
  },
  {
    path: "/:path(.*)+",
    redirect: () => "home",
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
