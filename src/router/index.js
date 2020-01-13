import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    props: true
  },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    component: () => import(/* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails"),
    props: true,
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component:  () => import(/* webpackChunkName: "ExperienceDetails" */ "../views/ExperienceDetails")
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: "my-custom-active-link-class",
  mode: "history" // removes # from the URL
});

export default router;
