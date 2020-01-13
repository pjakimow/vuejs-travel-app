import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/details/:slug",
    name: "DestinationDetails",
    component: () => import(/* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails")
  }
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: "my-custom-active-link-class",
  mode: "history" // removes # from the URL
});

export default router;
