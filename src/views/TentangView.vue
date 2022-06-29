<template>
  <div class="feature">
    <CNavbar />
    <CAbout />
  </div>
</template>

<script>
// @ is an alias to /src
import CNavbar from '@/components/Navbar.vue'
import CAbout from '@/components/About.vue'

export default {
  name: 'TentangView',
  components: {
    CNavbar,
    CAbout
  }
}
</script>