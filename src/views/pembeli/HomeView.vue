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
  async created() {
    const response = await axios.get(
      "https://niuniq.herokuapp.com/api/web/niuniq/auth/me"
    );

    console.log(response);
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
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({
        // name: "ProfileView",
        path: "/profileview/" + response.data.data.store[0]._id,
      });
    }
  },
};
</script>
