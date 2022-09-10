<template>
  <div>
    <CNavbar />
    <div class="container" style="padding-top: 48px; padding-left: 10px; padding-right: 10px;">
      <CInfoproduksi :store="stores" :product="products" />
      <div>
        <CCarousel :product="products" />
        <CCard :product="products" />
        <CVideo :store="stores" :product="products" />
      </div>
      <CFooter/>
    </div>
  </div>
</template>

<script>
import CNavbar from "@/components/bar/Navbar.vue";
import CInfoproduksi from "@/components/pembeli/InfoProduksi.vue";
import CCarousel from "@/components/pembeli/Carousel.vue";
import CCard from "@/components/pembeli/Card.vue";
import CVideo from "@/components/pembeli/Video.vue";
import CFooter from "@/components/pembeli/Footer.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    CNavbar,
    CInfoproduksi,
    CCarousel,
    CCard,
    CVideo,
    CFooter,
  },
  data() {
    return {
      products: [],
      stores: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    setStores(data) {
      this.stores = data;
    },
  },
  mounted() {
    axios
      .get(
        "https://niuniq.herokuapp.com/api/web/niuniq/search?product=" +
          this.$route.params.id
      )
      .then((response) => {
        console.log(response.data.status);
        this.setProducts(response.data.data);
        console.log(response.data.data);
        this.setStores(response.data.data.store);
      })
      .catch((error) => {
        console.log(error);
        alert("Produk tidak ditemukan");
      });
  },
};
</script>
