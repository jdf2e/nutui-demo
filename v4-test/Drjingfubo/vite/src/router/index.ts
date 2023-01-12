import { createRouter, createWebHistory } from "vue-router";
export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/Tour",
    name: "Tour",
    component: () => import("../views/Tour.vue"),
  },
  {
    path: "/comment",
    name: "Comment",
    component: () => import("../views/Comment.vue"),
  },
  {
    path: "/Searchbar",
    name: "Searchbar",
    component: () => import("../views/Searchbar.vue"),
  },
  {
    path: "/TrendArrow",
    name: "TrendArrow",
    component: () => import("../views/TrendArrow.vue"),
  },
  {
    path: "/Noticebar",
    name: "Noticebar",
    component: () => import("../views/Noticebar.vue"),
  },
  {
    path: "/watermark",
    name: "Watermark",
    component: () => import("../views/Watermark.vue"),
  },
  {
    path: "/PullRefresh",
    name: "PullRefresh",
    component: () => import("../views/PullRefresh.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
