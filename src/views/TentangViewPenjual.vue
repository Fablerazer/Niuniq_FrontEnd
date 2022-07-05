<template>
  <div>
    <CNavbarPenjual />
    <CAboutpage />
  </div>
</template>

<script>
// @ is an alias to /src
import CNavbarPenjual from '@/components/Navbarpenjual.vue'
import CAboutpage from '@/components/Aboutpage.vue'

export default {
  name: 'TentangViewPenjual',
  components: {
    CNavbarPenjual,
    CAboutpage
  }
}
</script>