import Vue from "vue";
import VueRouter from "vue-router";
import DetailView from "../views/DetailView.vue";
import TentangView from "../views/TentangView.vue";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: DetailView,
  },
  // {
  //   path: '/detailview',
  //   name: 'DetailView',
  //   component: DetailView
  // },
  {
    path: "/tentangview",
    name: "TentangView",
    component: TentangView,
  },
  {
    path: "/loginview",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/registerview",
    name: "RegisterView",
    component: RegisterView,
  },
  {
    path: "/homeview",
    name: "HomeView",
    component: HomeView,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
