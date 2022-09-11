<template>
  <div>
    <CNavbar />
    <CAboutpage />
    <div class="container" style="padding-top: 0">
      <CFooter />
    </div>
  </div>
</template>

<script>
import CNavbar from "@/components/bar/Navbar.vue";
import CAboutpage from "@/components/Tentang.vue";
import CFooter from "@/components/pembeli/Footer.vue";

export default {
  name: "TentangView",
  components: {
    CNavbar,
    CAboutpage,
    CFooter,

  },
};
</script>
