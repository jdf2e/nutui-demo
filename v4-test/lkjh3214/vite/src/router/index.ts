import { createRouter, createWebHistory } from "vue-router";
export const routes = [
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
  {
    path: "/range",
    name: "range",
    component: () => import("../views/RangeView.vue"),
  },
  {
    path: "/CircleProgress",
    name: "CircleProgress",
    component: () => import("../views/CircleProgress.vue"),
  },
  {
    path: "/AudioView",
    name: "AudioView",
    component: () => import("../views/AudioView.vue"),
  },
  {
    path: "/MenuView",
    name: "MenuView",
    component: () => import("../views/MenuView.vue"),
  },
  {
    path: "/PaginationView",
    name: "PaginationView",
    component: () => import("../views/PaginationView.vue"),
  },
  {
    path: "/CheckboxView",
    name: "CheckboxView",
    component: () => import("../views/CheckboxView.vue"),
  },

  {
    path: "/InputView",
    name: "InputView",
    component: () => import("../views/InputView.vue"),
  },
  {
    path: "/CountupView",
    name: "CountupView",
    component: () => import("../views/CountupView.vue"),
  },

  {
    path: "/TestView",
    name: "TestView",
    component: () => import("../views/TestView.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
