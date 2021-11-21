import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);


export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/blogs",
      name: "blogs",
      component: () => import("./components/BlogList")
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("./components/EditBlog")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddBlog")
    }
  ]
});