import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";


const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import("../components/register.vue"),
    },

    {
      path: "/content",
      name: "content",
      component: () =>
      import("../components/content.vue")
    },

    {
      path: "/rules",
      name: "rules",
      component: () =>
      import("../components/rules.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  
  export default router;
  