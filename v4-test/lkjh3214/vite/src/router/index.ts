import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/button",
      name: "button",
      component: () => import("../views/ButtonView.vue"),
    },
    {
      path: "/price",
      name: "price",
      component: () => import("../views/PriceView.vue"),
    },
    {
      path: "/layout",
      name: "layout",
      component: () => import("../views/LayoutView.vue"),
    },
    {
      path: "/actionSheet",
      name: "ActionSheet",
      component: () => import("../views/ActionSheet.vue"),
    },
    {
      path: "/drag",
      name: "DragView",
      component: () => import("../views/DragView.vue"),
    },
    {
      path: "/notify",
      name: "notify",
      component: () => import("../views/NotifyView.vue"),
    },
    {
      path: "/popup",
      name: "popup",
      component: () => import("../views/PopupView.vue"),
    },
    {
      path: "/switch",
      name: "switch",
      component: () => import("../views/SwitchView.vue"),
    },
    {
      path: "/backtop",
      name: "backtop",
      component: () => import("../views/BacktopDemo.vue"),
    },
  ],
});

export default router;
