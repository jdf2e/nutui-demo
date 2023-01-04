import { createRouter, createWebHashHistory } from "vue-router";
import List from '@/views/List.vue';
import Toast from '@/views/Toast.vue';
import Dialog from '@/views/Dialog.vue';
import ImagePreview from '@/views/ImagePreview.vue';
import Notify from '@/views/Notify.vue';
const routes = [{
    path: '/',
    name: 'index',
    component: List, 
  },
  
  {
    path: '/toast',
    name: 'toast',
    component: Toast
  },

  {
    path: '/dialog',
    name: 'dialog',
    component: Dialog
  },

  {
    path: '/imagepreview',
    name: 'imagepreview',
    component: ImagePreview
  },

  {
    path: '/notify',
    name: 'notify',
    component: Notify
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
