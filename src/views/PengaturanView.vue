<template>
  <div>
    <CNavbarPenjual />
    <CPengaturan />
  </div>
</template>

<script>
import CNavbarPenjual from "@/components/NavbarPenjual.vue";
import CPengaturan from "@/components/Pengaturan.vue";


export default {
  name: "PengaturanView",
  components: {
    CNavbarPenjual,
    CPengaturan
  },
};
</script>

<style></style>
