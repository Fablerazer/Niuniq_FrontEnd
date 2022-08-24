<template>
  <div>
    <CNavbarPenjual />
    <section class="bginputtoko">
      <div class="container">
        <CInputToko />
      </div>
    </section>
  </div>
</template>

<script>
import CInputToko from "@/components/penjual/InputToko.vue";
import CNavbarPenjual from "@/components/bar/NavbarPenjual.vue";

export default {
  name: "InputTokoView",
  components: {
    CInputToko,
    CNavbarPenjual,
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "RegisterView" });
    }
  },
};
</script>

<style></style>
