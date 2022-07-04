<template>
  <div>
    <CNavbar />
    <div class="container">
      <h4>Pemberitahuan Status Produk</h4>
      <CNotifSuccess />
    </div>
  </div>
</template>

<script>
import CNavbar from "@/components/Navbar.vue";
import CNotifSuccess from "@/components/Notifsuccess.vue";
import CNotifFail from "@/components/Notiffail.vue";

export default {
  name: "NotificationView",
  components: {
    CNavbar,
    CNotifSuccess,
    CNotifFail
  },
};
</script>

<style></style>
