<template>
  <div>
    <CNavbar />
    <CAboutpage />
    <div class="container" style="padding-top: 0">
      <CFnQ />
      <CFooter />
    </div>
  </div>
</template>

<script>
import CNavbar from "@/components/bar/Navbar.vue";
import CAboutpage from "@/components/Tentang.vue";
import CFnQ from "@/components/pembeli/FnQ.vue";
import CFooter from "@/components/pembeli/Footer.vue";

export default {
  name: "TentangView",
  components: {
    CNavbar,
    CAboutpage,
    CFooter,
    CFnQ,
  },
};
</script>
