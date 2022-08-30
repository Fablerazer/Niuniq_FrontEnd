<template>
  <div>
    <CNavbarPenjual />
    <div
      class="flex-row"
      style="background-color: #f9f9f9; padding-bottom: 5px"
    >
      <SideBarInputProduk />
      <div
        v-if="products || !isEdit"
        class="container"
        style="padding-left: 180px; padding-top: 32px"
      >
        <CInputInfoDetail :product="products" :isEdit="isEdit" />
      </div>
    </div>
  </div>
</template>

<script>
import CNavbarPenjual from "@/components/bar/NavbarPenjual.vue";
import CInputInfoDetail from "@/components/penjual/InputInfoDetail.vue";
import SideBarInputProduk from "@/components/bar/SideBarInputProduk.vue";
import axios from "axios";

export default {
  name: "InputProdukView",
  components: {
    CNavbarPenjual,
    CInputInfoDetail,
    SideBarInputProduk,
  },
  data() {
    return {
      products: null,
      isEdit: true,
    };
  },
  methods: {
    setProducts(data) {
      console.log(data);
      this.products = data;
    },
    setIsEdit(data) {
      this.isEdit = data;
    },
  },
  mounted() {
    axios
      .get(
        "https://niuniq.herokuapp.com/api/web/niuniq/search?product=" +
          this.$route.params.id
      )
      .then((response) => {
        this.setProducts(response.data.data);
        this.setIsEdit(response.data.success);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        this.setIsEdit(false);
      });
  },
};
</script>

<style></style>
