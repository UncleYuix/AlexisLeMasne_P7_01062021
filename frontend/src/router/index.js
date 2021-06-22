import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  // {
  //   path: "/register",
  //   name: "register",
  //   component: () =>
  //     import("../components/register.vue"),
  // },

  {
    path: "/Content",
    name: "Content",
    component: () => import("../views/Content.vue"),
  },

  {
    path: "/rules",
    name: "rules",
    component: () => import("../components/rules.vue"),
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
