<template>
  <div>
    <CNavbar />
    <Qrcodeid />
    <div style="padding-left: 9rem; padding-right: 10rem">
      <CHomeFillerKenapa />
      <CHomeFillerInformasi />
      <CHomeFillerKesulitan />
      <CHomeFillerTentang />
    </div>
    <div class="container" style="padding-top: 0">
      <CFooter />
    </div>
  </div>
</template>

<script>
import CNavbar from "@/components/bar/Navbar.vue";
import Qrcodeid from "@/components/pembeli/Qrcodeid.vue";
import CFooter from "@/components/pembeli/Footer.vue";
import CHomeFillerKenapa from "@/components/pembeli/HomeFillerKenapa.vue";
import CHomeFillerKesulitan from "@/components/pembeli/HomeFillerKesulitan.vue";
import CHomeFillerTentang from "@/components/pembeli/HomeFillerTentang.vue";
import CHomeFillerInformasi from "@/components/pembeli/HomeFillerInformasi.vue";
// import CStorepreview from "@/components/pembeli/StorePreview.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    CNavbar,
    Qrcodeid,
    CFooter,
    CHomeFillerKenapa,
    CHomeFillerTentang,
    CHomeFillerInformasi,
    CHomeFillerKesulitan,
    // CStorepreview,
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
      .then((response) => {
        this.setProducts(response.data.data);
        console.log(response);
        if (response.status == 404) {
          alert("Produk tidak ditemukan");
        }
      })
      .catch((error) => console.log(error));

    // let user = localStorage.getItem("user-info");
    // if (user) {
    //   this.$router.push({
    //     // name: "ProfileView",
    //     path: "/profileview/" + response.data.data.store[0]._id,
    //   });
    // }
  },
};
</script>
