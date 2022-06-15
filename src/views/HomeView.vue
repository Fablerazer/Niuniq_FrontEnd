<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Detail />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Detail from '@/components/Detail.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Detail
  }
}
</script>
