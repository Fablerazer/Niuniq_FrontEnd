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
import ShopInfo from "../views/penjual/homepenjual/ShopInfoView.vue";
import Dashboard from "../views/penjual/homepenjual/DashboardView.vue";
import ProfileView from "../views/penjual/homepenjual/ProfileView.vue";
import ProductList from "../views/penjual/homepenjual/ProductListView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/detailview",
    name: "DetailView",
    component: DetailView,
  },
  {
    path: "/pengaturanview",
    name: "PengaturanView",
    component: PengaturanView,
  },
  {
    path: "/tentangview",
    name: "TentangView",
    component: TentangView,
  },
  {
    path: "/tentangviewpenjual",
    name: "TentangViewPenjual",
    component: TentangViewPenjual,
  },
  {
    path: "/inputprodukview",
    name: "InputProdukView",
    component: InputProdukView,
  },
  {
    path: "/inputtokoview",
    name: "InputTokoView",
    component: InputTokoView,
  },
  {
    path: "/loginview",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/notificationview",
    name: "NotificationView",
    component: NotificationView,
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
  {
    path: "/profileview",
    name: "ProfileView",
    component: ProfileView,
  },
  {
    path: "/shop-info",
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
