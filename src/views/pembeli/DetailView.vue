<template>
  <div>
    <CNavbar />
    <div class="container">
      <CInfoproduksi />
      <CCarousel />
      <CCard />
      <CVideo />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CNavbar from "@/components/bar/Navbar.vue";
import CInfoproduksi from "@/components/pembeli/InfoProduksi.vue";
import CCarousel from "@/components/pembeli/Carousel.vue";
import CCard from "@/components/pembeli/Card.vue";
import CVideo from "@/components/pembeli/Video.vue";

export default {
  name: "HomeView",
  components: {
    CNavbar,
    CInfoproduksi,
    CCarousel,
    CCard,
    CVideo,
  },
};
</script>
