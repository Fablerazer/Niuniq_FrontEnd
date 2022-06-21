<template>
  <div class="about">
      <CNavbar />
    <h1>This is an feature page</h1>
    <div class="container">
      <CCarousel />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CNavbar from '@/components/Navbar.vue'
import CCarousel from '@/components/Carousel.vue'

export default {
  name: 'FeatureView',
  components: {
    CNavbar,
    CCarousel
  }
}
</script>