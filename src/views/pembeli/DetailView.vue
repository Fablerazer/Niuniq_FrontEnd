<template>
  <div>
    <CNavbar />
    <div class="container">
      <CInfoproduksi />
      <div v-for="product in products" :key="product._id">
        <CCarousel :product="product" />
        <CCard :product="product" />
        <CVideo :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CNavbar from "@/components/bar/Navbar.vue";
import CInfoproduksi from "@/components/pembeli/InfoProduksi.vue";
import CCarousel from "@/components/pembeli/Carousel.vue";
import CCard from "@/components/pembeli/Card.vue";
import CVideo from "@/components/pembeli/Video.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    CNavbar,
    CInfoproduksi,
    CCarousel,
    CCard,
    CVideo,
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
    // setStores(data) {
    //   this.stores = data;
    // },
  },
  mounted() {
    axios
      .get("https://niuniq.herokuapp.com/api/web/niuniq/products")
      .then((response) => this.setProducts(response.data.data))
      .catch((error) => console.log(error));
  },
  // created() {
  //   this.getProducts();
  // },
  // methods: {
  //   getProducts() {
  //     var config = {
  //       method: "get",
  //       url: "https://niuniq.herokuapp.com/api/web/niuniq/products",
  //       headers: {
  //         Cookie: `token=${localStorage.getItem("token")}`,
  //       },
  //     };
  //     axios(config)
  //       .then((response) => {
  //         this.products = response.data.data;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  // },
};
</script>
