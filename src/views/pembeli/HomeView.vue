<template>
  <div>
    <CNavbar />
    <Qrcodeid />
    <div class="container">
      <CStorepreview :product="products" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CNavbar from "@/components/bar/Navbar.vue";
import Qrcodeid from "@/components/pembeli/Qrcodeid.vue";
import CStorepreview from "@/components/pembeli/StorePreview.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    CNavbar,
    Qrcodeid,
    CStorepreview,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("https://niuniq.herokuapp.com/api/web/niuniq/products")
      .then((response) => this.setProducts(response.data.data))
      .catch((error) => console.log(error));
  },
};
</script>
