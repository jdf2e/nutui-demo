/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-12-29 15:48:22
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-29 17:30:47
 */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/button",
      name: "button",
      component: () => import("../views/Button.vue"),
    },
    {
      path: "/audio",
      name: "audio",
      component: () => import("../views/Audio.vue"),
    },
    {
      path: "/layout",
      name: "layout",
      component: () => import("../views/Layout.vue"),
    },
    {
      path: "/notify",
      name: "notify",
      component: () => import("../views/Notify.vue"),
    },
    {
      path: "/picker",
      name: "picker",
      component: () => import("../views/Picker.vue"),
    },
    {
      path: "/circleprogress",
      name: "circleprogress",
      component: () => import("../views/CircleProgress.vue"),
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("../views/Menu.vue"),
    },
  ],
});

export default router;
