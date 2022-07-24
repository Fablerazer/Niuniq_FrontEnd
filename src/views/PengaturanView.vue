<template>
  <div>
    <CNavbarPenjual />
    <div style="background-color: #f9f9f9">
      <div class="container">
        <CPengaturan />
      </div>
    </div>
  </div>
</template>

<script>
import CNavbarPenjual from "@/components/bar/NavbarPenjual.vue";
import CPengaturan from "@/components/penjual/Pengaturan.vue";

export default {
  name: "PengaturanView",
  components: {
    CNavbarPenjual,
    CPengaturan,
  },
};
</script>

<style></style>
