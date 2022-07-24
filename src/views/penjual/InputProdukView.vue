<template>
  <div>
    <CNavbarPenjual />
    <div class="flex-row" style="background-color: #f9f9f9">
      <SideBarInputProduk />
      <div class="container" style="padding-left: 180px;">
        <CInputInfoDetail />
        <CInputDokProduk />
      </div>
    </div>
  </div>
</template>

<script>
import CNavbarPenjual from "@/components/bar/NavbarPenjual.vue";
import CInputInfoDetail from "@/components/penjual/InputInfoDetail.vue";
import CInputDokProduk from "@/components/penjual/InputDokProduk.vue";
import SideBarInputProduk from "@/components/bar/SideBarInputProduk.vue";

export default {
  name: "InputProdukView",
  components: {
    CNavbarPenjual,
    CInputInfoDetail,
    CInputDokProduk,
    SideBarInputProduk
  },
};
</script>

<style></style>
