import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/datepicker",
    name: "datepicker",
    component: () => import("../views/DatePicker.vue"),
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () => import("../views/Calendar.vue"),
  },
  {
    path: "/input",
    name: "input",
    component: () => import("../views/Input.vue"),
  },
  {
    path: "/radio",
    name: "radio",
    component: () => import("../views/Radio.vue"),
  },
  {
    path: "/rate",
    name: "rate",
    component: () => import("../views/Rate.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
