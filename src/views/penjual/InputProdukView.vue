<template>
  <div>
    <CNavbarPenjual />
    <div class="flex-row" style="background-color: #f9f9f9">
      <SideBarInputProduk />
      <div class="container" style="padding-left: 180px;">
        <CInputInfoDetail :product="products"/>
        <!-- <CInputDokProduk :product="products"/> -->
      </div>
    </div>
  </div>
</template>

<script>
import CNavbarPenjual from "@/components/bar/NavbarPenjual.vue";
import CInputInfoDetail from "@/components/penjual/InputInfoDetail.vue";
// import CInputDokProduk from "@/components/penjual/InputDokProduk.vue";
import SideBarInputProduk from "@/components/bar/SideBarInputProduk.vue";
import axios from "axios";

export default {
  name: "InputProdukView",
  components: {
    CNavbarPenjual,
    CInputInfoDetail,
    // CInputDokProduk,
    SideBarInputProduk
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
      .get("https://niuniq.herokuapp.com/api/web/niuniq/search?product="+this.$route.params.id)
      .then((response) => {
        this.setProducts(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => console.log(error));
    
  },
};
</script>

<style></style>
