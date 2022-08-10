<template>
  <div>
    <CNavbar />
    <Qrcodeid />
    <div v-for="product in products" :key="product._id" class="container">
      <CStorepreview :product="product"/>
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
      stores: [],
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
  // computed: {
  //  filteredItems: function () {
  //    return this.items.slice(0, 10)
  //    }
  // }
};
</script>
