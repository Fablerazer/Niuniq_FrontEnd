<template>
  <div>
    <CNavbarPenjual />
    <div class="container">
      <CInputInfoDetail />
      <CInputDokProduk />
    </div>
  </div>
</template>

<script>
import CNavbarPenjual from "@/components/Navbarpenjual.vue";
import CInputInfoDetail from "@/components/Inputinfodetail.vue";
import CInputDokProduk from "@/components/Inputdokproduk.vue";

export default {
  name: "ProfileView",
  components: {
    CNavbarPenjual,
    CInputInfoDetail,
    CInputDokProduk
  },
};
</script>

<style></style>
