import { createRouter, createWebHashHistory } from "vue-router";
import List from '@/views/List.vue';
import Cell from '@/views/Cell.vue';
import Overlay from '@/views/Overlay.vue';
import ImagePreview from '@/views/ImagePreview.vue';
import Backtop from '@/views/Backtop.vue';
import Dialog from '@/views/Dialog.vue';
import Range from '@/views/Range.vue';
const routes = [{
    path: '/',
    name: 'index',
    component: List, 
  },
  
  {
    path: '/cell',
    name: 'cell',
    component: Cell
  },

  {
    path: '/overlay',
    name: 'overlay',
    component: Overlay
  },

  {
    path: '/imagepreview',
    name: 'imagepreview',
    component: ImagePreview
  },

  {
    path: '/backtop',
    name: 'backtop',
    component: Backtop
  },

  {
    path: '/dialog',
    name: 'dialog',
    component: Dialog
  },

  {
    path: '/range',
    name: 'range',
    component: Range
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
