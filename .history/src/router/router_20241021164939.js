import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("@/views/Home/Home.vue"),
  },
  {
    path: "/college",
    component: () => import("@/views/College/College.vue"),
  },
  {
    path: "/sky",
    component: () => import("@/views/Sky/Sky.vue"),
  },
  {
    path: "/street",
    component: () => import("@/views/Street/Street.vue"),
  },
  {
    path: "/park",
    component: () => import("@/views/Park/Park.vue"),
  },
  {
    path: "/foods",
    component: () => import("@/views/Foods/Foods.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
