import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
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
  ],
});

export default router;
