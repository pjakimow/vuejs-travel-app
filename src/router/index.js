import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

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
        component:  () => import(/* webpackChunkName: "ExperienceDetails" */ "../views/ExperienceDetails"),
        beforeEnter: (to, from, next) => {
          const exists = store.destinations.find(destination => destination.slug === to.params.slug)
              .experiences.find( experience => experience.slug === to.params.experienceSlug)
          if(exists){
            next()
          }
          else{
            next({name: "notFound"})
          }
        }
      }
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(destination => destination.slug === to.params.slug)
      if(exists){
        next()
      }
      else{
        next({name: "notFound"})
      }
    }
    },
  {
    path: "/404", //it has to be at the end
    alias: "*",
    name: "notFound",
    component: () => import(/* webpackChunkName: "NotFound" */ "../views/NotFound")
  }
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: "my-custom-active-link-class",
  mode: "history" // removes # from the URL
});

export default router;
