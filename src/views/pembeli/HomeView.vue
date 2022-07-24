<template>
  <div>
    <CNavbar />
    <Qrcodeid />
    <div class="container">
      <CStorepreview />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CNavbar from "@/components/bar/Navbar.vue";
import Qrcodeid from "@/components/pembeli/Qrcodeid.vue";
import CStorepreview from "@/components/pembeli/StorePreview.vue";

export default {
  name: "HomeView",
  components: {
    CNavbar,
    Qrcodeid,
    CStorepreview,
  },
};
</script>
