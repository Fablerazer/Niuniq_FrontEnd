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
import CNotifSuccess from "@/components/NotifSuccess.vue";

export default {
  name: "NotificationView",
  components: {
    CNavbar,
    CNotifSuccess,
  },
};
</script>

<style></style>
