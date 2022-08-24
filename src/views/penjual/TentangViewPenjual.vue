<template>
  <div>
    <CNavbarPenjual />
    <CAboutpage />
    <!-- <CPagination /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import CNavbarPenjual from "@/components/bar/NavbarPenjual.vue";
import CAboutpage from "@/components/Tentang.vue";
// import CPagination from "@/components/Pagination.vue";

export default {
  name: "TentangViewPenjual",
  components: {
    CNavbarPenjual,
    CAboutpage,
    // CPagination,
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "LoginView" });
    }
  },
};
</script>
