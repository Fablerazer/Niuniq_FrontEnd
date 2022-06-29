<template>
  <div>
    <CNavbar />
    <div class="container">
      <CDetail />
      <CCarousel />
      <CCard />
      <CVideo />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CNavbar from '@/components/Navbar.vue'
import CDetail from '@/components/Detail.vue'
import CCarousel from '@/components/Carousel.vue'
import CCard from '@/components/Card.vue'
import CVideo from '@/components/Video.vue'

export default {
  name: 'HomeView',
  components: {
    CNavbar,
    CDetail,
    CCarousel,
    CCard,
    CVideo
  }
}
</script>
