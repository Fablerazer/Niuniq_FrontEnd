import Vue from "vue";
import VueRouter from "vue-router";
import DetailView from "../views/pembeli/DetailView.vue";
import TentangView from "../views/pembeli/TentangView.vue";
import HomeView from "../views/pembeli/HomeView.vue";
import RegisterView from "../views/penjual/RegisterView.vue";
import LoginView from "../views/penjual/LoginView.vue";
import NotificationView from "../views/penjual/NotificationView.vue";
import InputProdukView from "../views/penjual/InputProdukView.vue";
import InputTokoView from "../views/penjual/InputTokoView.vue";
import TentangViewPenjual from "../views/penjual/TentangViewPenjual.vue";
import PengaturanView from "../views/penjual/PengaturanView.vue";
import ShopInfo from "../views/ShopInfoView.vue";
import Dashboard from "../views/DashboardView.vue";
import ProfileView from "../views/ProfileView.vue";
import ProductList from "../views/ProductListView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: '/detailview/:id',
    name: "DetailView",
    component: DetailView,
    props: true
  },
  {
    path: "/pengaturanview/:id",
    name: "PengaturanView",
    component: PengaturanView,
    props: true
  },
  {
    path: "/tentangview",
    name: "TentangView",
    component: TentangView,
  },
  {
    path: "/tentangviewpenjual/:id",
    name: "TentangViewPenjual",
    component: TentangViewPenjual,
  },
  {
    path: "/inputprodukview/:id",
    name: "InputProdukView",
    component: InputProdukView,
    props: true
  },
  {
    path: "/inputtokoview/:id",
    name: "InputTokoView",
    component: InputTokoView,
  },
  {
    path: "/loginview",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/notificationview/:id",
    name: "NotificationView",
    component: NotificationView,
    props: true,
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
    props: true
  },
  {
    path: "/profileview/:id",
    name: "ProfileView",
    component: ProfileView,
    props: true
  },
  {
    path: "/shop-info/:id",
    name: "ShopInfo",
    component: ShopInfo,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
    {
      path: "/product-list",
      name: "ProductList",
      component: ProductList,
    },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
