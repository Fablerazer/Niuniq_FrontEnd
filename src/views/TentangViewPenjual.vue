<template>
  <div>
    <CNavbarPenjual />
    <CAboutpage />
  </div>
</template>

<script>
// @ is an alias to /src
import CNavbarPenjual from '@/components/NavbarPenjual.vue'
import CAboutpage from '@/components/AboutPage.vue'

export default {
  name: 'TentangViewPenjual',
  components: {
    CNavbarPenjual,
    CAboutpage
  }
}
</script>