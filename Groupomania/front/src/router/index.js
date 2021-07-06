import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Posts from "../views/Posts.vue";
import Post from "../views/Post.vue";
import Settings from "../views/Settings.vue";
import NewPost from "../views/NewPost.vue";
import PostUpdate from "../views/PostUpdate.vue";
import Rules from "../views/Rules.vue"

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      // Me permet d'indiquer directement login dans l'url quand on se connecte au site
      path: "/",
      redirect: { name: "Login" }
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/posts",
      name: "Posts",
      component: Posts
    },
    {
      path: "/post/:id",
      name: "Post",
      component: Post
    },
    {
      path: "/postupdate/:id",
      name: "PostUpdate",
      component: PostUpdate
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings
    },
    {
      path: "/upload",
      name: "NewPost",
      component: NewPost
    },
    {
      path: "/rules",
      name: "Rules",
      component: Rules

    },
  ]
});

export default router;
