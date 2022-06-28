<template>
  <div class="feature">
    <CNavbar />
    <h1>This is an tentang page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import CNavbar from '@/components/Navbar.vue'

export default {
  name: 'AboutView',
  components: {
    CNavbar
  }
}
</script>