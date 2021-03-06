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
    path: "/user",
    name: "user",
    component: () => import(/* webpackChunkName: "User" */ "../views/User"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "Login" */ "../views/Login")
  },
  {
    path: "/invoices",
    name: "invoices",
    component: () => import(/* webpackChunkName: "Invoices" */ "../views/Invoices"),
    meta: {
      requiresAuth: true
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
  mode: "history", // removes # from the URL
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (to.hash === '#experience') {
          position.offset = { y: 150 };
        }
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false;
      }
    }
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) { // when record or nested records requires auth
    if(!store.user){ // when user is logged in, fake
      next({
        name: 'login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
